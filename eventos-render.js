/* =====================================================
   CERÁMICA ZA — eventos-render.js
   Este archivo lee el array EVENTOS (definido en
   eventos-data.js) y genera las tarjetas en la página.
   No necesitás editar este archivo para agregar eventos.
   ===================================================== */

'use strict';

const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

const proximos = EVENTOS
  .filter(e => new Date(e.anio, e.mesNum, e.dia) >= hoy)
  .sort((a, b) => new Date(a.anio, a.mesNum, a.dia) - new Date(b.anio, b.mesNum, b.dia));

const pasados = EVENTOS
  .filter(e => new Date(e.anio, e.mesNum, e.dia) < hoy)
  .sort((a, b) => new Date(b.anio, b.mesNum, b.dia) - new Date(a.anio, a.mesNum, a.dia));

const typeClass = {
  bday:   'type-bday',
  junta:  'type-junta',
  taller: 'type-taller',
  otro:   'type-otro'
};

/* ── Render próximos ─────────────────────────────── */
const upList  = document.getElementById('upcomingList');
const upCount = document.getElementById('upcomingCount');

if (upCount) {
  upCount.textContent = proximos.length
    ? `${proximos.length} evento${proximos.length > 1 ? 's' : ''} próximo${proximos.length > 1 ? 's' : ''}`
    : '';
}

if (upList) {
  if (proximos.length === 0) {
    upList.innerHTML = `
      <div class="empty">
        <i class="fa-regular fa-calendar-xmark"></i>
        <p>No hay eventos próximos por ahora.<br>¡Seguí atenta, pronto se viene algo!</p>
      </div>`;
  } else {
    proximos.forEach((ev, i) => {
      const url = ev.waMsg
        ? `https://wa.me/5492914682284?text=${encodeURIComponent(ev.waMsg)}`
        : '#';

      const avsHtml = ev.avatares.slice(0, 3)
        .map(s => `<div class="av"><img src="${s}" alt="" loading="lazy"/></div>`)
        .join('');

      const extra = ev.asistentes > 3
        ? `<span style="font-size:.68rem;color:var(--muted);margin-left:4px">+${ev.asistentes - 3} más</span>`
        : '';

      const mobileBtn = ev.waMsg
        ? `<div class="row-wa-mobile">
             <a href="${url}" target="_blank" class="btn-confirm-mobile">
               <i class="fa-brands fa-whatsapp"></i> ¡Me apunto!
             </a>
           </div>`
        : '';

      const row = document.createElement('div');
      row.className = 'event-row reveal';
      row.style.animationDelay = `${i * 60}ms`;
      row.innerHTML = `
        <div class="row-date">
          <span class="day">${ev.dia}</span>
          <span class="month">${ev.mes}</span>
        </div>
        <div class="row-info">
          <div class="row-type ${typeClass[ev.tipo] || 'type-otro'}">${ev.tipoLabel}</div>
          <div class="row-name">${ev.nombre}</div>
          <div class="row-meta">
            <span><i class="fa-regular fa-clock"></i>${ev.hora}</span>
            <span><i class="fa-solid fa-location-dot"></i>${ev.lugar}</span>
          </div>
          <p class="row-desc">${ev.descripcion}</p>
          <div class="row-going">
            ${avsHtml}${extra}
            <span class="row-going-text"><strong>${ev.asistentes}</strong> van a ir</span>
          </div>
        </div>
        <div class="row-cta">
          <a href="${url}" target="_blank" class="btn-confirm">
            <i class="fa-brands fa-whatsapp"></i> ¡Me apunto!
          </a>
        </div>
        ${mobileBtn}`;

      row.addEventListener('click', (e) => {
        if (window.innerWidth <= 860 && !e.target.closest('a')) {
          window.open(url, '_blank');
        }
      });

      upList.appendChild(row);
    });
  }
}

/* ── Render pasados ──────────────────────────────── */
const pastList = document.getElementById('pastList');

if (pastList) {
  if (pasados.length === 0) {
    pastList.innerHTML = `<p style="font-size:.84rem;color:var(--muted);font-weight:300;">Todavía no hay eventos pasados.</p>`;
  } else {
    pasados.forEach((ev) => {
      const card = document.createElement('div');
      card.className = 'past-card reveal';
      card.innerHTML = `
        <div class="past-date">${ev.dia} ${ev.mes} ${ev.anio} &nbsp;·&nbsp; ${ev.tipoLabel}</div>
        <div class="past-name">${ev.nombre}</div>
        <p class="past-desc">${ev.descripcion}</p>
        <div class="past-meta">
          <span><i class="fa-regular fa-clock"></i>${ev.hora}</span>
          <span><i class="fa-solid fa-user-group"></i>${ev.asistentes} personas</span>
        </div>`;
      pastList.appendChild(card);
    });
  }
}

/* ── Navbar scroll ───────────────────────────────── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Reveal on scroll ────────────────────────────── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const sibs = [...e.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const delay = sibs.indexOf(e.target) * 80;
    setTimeout(() => e.target.classList.add('visible'), Math.max(0, delay));
    ro.unobserve(e.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => ro.observe(el));