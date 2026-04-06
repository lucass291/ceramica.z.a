/* =====================================================
   CERÁMICA ZA — eventos-data.js
   =====================================================
   Para agregar un evento nuevo:
   1. Copiá uno de los bloques de abajo
   2. Pegalo AL PRINCIPIO del array (después de "[")
   3. Completá los datos y guardá

   tipo:    "bday"   → Cumpleaños   (badge rosa)
            "taller" → Taller       (badge terracotta)
            "junta"  → Juntada      (badge verde)
            "otro"   → Otro         (badge neutro)

   mesNum:  enero=0, febrero=1, marzo=2, abril=3,
            mayo=4, junio=5, julio=6, agosto=7,
            septiembre=8, octubre=9, noviembre=10, diciembre=11

   waMsg:   Mensaje que se envía al confirmar por WhatsApp.
            Si lo dejás vacío ("") no aparece el botón.
   ===================================================== */

const EVENTOS = [
 
  /* ─── PRÓXIMOS — agregá los nuevos eventos acá arriba ─── */

  {
    nombre:      "🎂 Cumple de Valentina",
    tipo:        "bday",
    tipoLabel:   "Cumpleaños",
    dia: 12,  mes: "Jul",  mesNum: 6,  anio: 2025,
    hora:        "18:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "¡La Valen cumple años y lo festeja con toda la comunidad del taller! Va a haber torta, música y mucha buena onda. Pasate a festejar con ella.",
    asistentes:  8,
    avatares: [
      "https://i.pravatar.cc/60?img=47",
      "https://i.pravatar.cc/60?img=32",
      "https://i.pravatar.cc/60?img=21"
    ],
    waMsg: "Hola! Confirmo que voy al cumple de Valentina el 12 de julio 🎂🏺"
  },

  {
    nombre:      "🏺 Tarde de torno libre",
    tipo:        "taller",
    tipoLabel:   "Taller abierto",
    dia: 19,  mes: "Jul",  mesNum: 6,  anio: 2025,
    hora:        "15:00 – 18:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "Una tarde sin consigna para hacer lo que tenés ganas. Traé tus ideas o venite a improvisar. Café y mate incluidos, buena música garantizada.",
    asistentes:  5,
    avatares: [
      "https://i.pravatar.cc/60?img=12",
      "https://i.pravatar.cc/60?img=55"
    ],
    waMsg: "Hola! Me anoto para la tarde de torno libre del 19 de julio 🏺"
  },

  {
    nombre:      "🎂 Cumple de Martina",
    tipo:        "bday",
    tipoLabel:   "Cumpleaños",
    dia: 2,   mes: "Ago",  mesNum: 7,  anio: 2025,
    hora:        "20:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "Marti cumple 30 y lo quiere festejar en el taller con todas las chicas. Noche especial con champagne, música y cerámica.",
    asistentes:  14,
    avatares: [
      "https://i.pravatar.cc/60?img=9",
      "https://i.pravatar.cc/60?img=44",
      "https://i.pravatar.cc/60?img=38"
    ],
    waMsg: "Hola! Confirmo que voy al cumple de Martina el 2 de agosto 🥂🎂"
  },

  {
    nombre:      "☀️ Juntada de fin de cuatrimestre",
    tipo:        "junta",
    tipoLabel:   "Juntada",
    dia: 16,  mes: "Ago",  mesNum: 7,  anio: 2025,
    hora:        "17:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "Cerramos el cuatrimestre con una juntada para todas las alumnas. Cada una trae algo para compartir y charlamos sobre lo que creamos juntas estos meses.",
    asistentes:  20,
    avatares: [
      "https://i.pravatar.cc/60?img=3",
      "https://i.pravatar.cc/60?img=17",
      "https://i.pravatar.cc/60?img=60"
    ],
    waMsg: "Hola! Me apunto a la juntada de fin de cuatrimestre del 16 de agosto ☀️"
  },

  /* ─── PASADOS — se muestran solos cuando pasa la fecha ─── */

  {
    nombre:      "🎂 Cumple de Lucía",
    tipo:        "bday",
    tipoLabel:   "Cumpleaños",
    dia: 21,  mes: "Jun",  mesNum: 5,  anio: 2025,
    hora:        "19:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "Lu festejó sus 25 con una tarde íntima entre amigas. Mate, buena música y macetitas hechas a mano.",
    asistentes:  9,
    avatares: [
      "https://i.pravatar.cc/60?img=29",
      "https://i.pravatar.cc/60?img=5"
    ],
    waMsg: ""
  },

  {
    nombre:      "🏺 Workshop de pinchado",
    tipo:        "taller",
    tipoLabel:   "Taller abierto",
    dia: 7,   mes: "Jun",  mesNum: 5,  anio: 2025,
    hora:        "14:00 – 17:00 hs",
    lugar:       "Cerámica ZA — Barrio Santa Margarita",
    descripcion: "Tarde de técnica de pinchado para alumnas de todos los niveles. Cada una se fue con su pieza lista para hornear.",
    asistentes:  11,
    avatares: [
      "https://i.pravatar.cc/60?img=22",
      "https://i.pravatar.cc/60?img=43"
    ],
    waMsg: ""
  },

];
