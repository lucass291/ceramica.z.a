/* ===================================================
   TIERRA VIVA — Espacio de Cerámica
   script.js
   =================================================== */

'use strict';

/* ── Navbar: scroll effect ─────────────────────────── */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll(); // run on load


/* ── Hamburger / mobile menu ───────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  });
});


/* ── Reveal on scroll (IntersectionObserver) ───────── */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings inside the same parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
        const index    = siblings.indexOf(entry.target);
        const delay    = index >= 0 ? index * 100 : 0;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ── Smooth scroll for all anchor links ────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    const offset = navbar.offsetHeight + 12;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ── WhatsApp deep-links: dynamic event name ───────── */
// The buttons already have their URLs hardcoded, but if you want to
// dynamically build them from data-event attributes:
document.querySelectorAll('.event-card').forEach(card => {
  const btn       = card.querySelector('.btn-card');
  const eventName = card.dataset.event;

  if (btn && eventName) {
    const msg = encodeURIComponent(`Hola, quiero reservar un lugar para el "${eventName}" 🏺`);
    btn.href  = `https://wa.me/5491100000000?text=${msg}`;
  }
});


/* ── Active nav link highlight based on scroll ─────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNavLink() {
  const scrollY = window.scrollY + navbar.offsetHeight + 60;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNavLink, { passive: true });


/* ── Card entrance micro-animation on hover ─────────── */
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.willChange = 'transform';
  });
  card.addEventListener('mouseleave', () => {
    card.style.willChange = '';
  });
});


/* ── Parallax: hero shapes ─────────────────────────── */
const shapes = document.querySelectorAll('.shape');

function parallaxShapes() {
  const y = window.scrollY;
  shapes.forEach((shape, i) => {
    const speed = 0.08 + i * 0.04;
    shape.style.transform = `translateY(${y * speed}px)`;
  });
}

window.addEventListener('scroll', parallaxShapes, { passive: true });


/* ── Init: trigger scroll handlers once ────────────── */
highlightNavLink();


/* ── Carrusel de fotos ─────────────────────────────── */
let currentSlide = 0;
const carouselContainer = document.querySelector('.carousel-container');
const carouselImgs = document.querySelectorAll('.carousel-img');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  carouselImgs.forEach((img, i) => {
    img.classList.toggle('active', i === currentSlide);
  });
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentSlide);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + carouselImgs.length) % carouselImgs.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % carouselImgs.length;
  updateCarousel();
});

indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    currentSlide = i;
    updateCarousel();
  });
});
