// ============================================
//  DATA.JS — Edita aquí toda tu información
// ============================================

const DATA = {

  skills: [
    { name: "Java",           level: 85 },
    { name: "Spring Boot",    level: 75 },
    { name: "React",          level: 70 },
    { name: "JavaScript",     level: 75 },
    { name: "HTML / CSS",     level: 85 },
    { name: "Kotlin",         level: 65 },
    { name: "Python",         level: 60 },
    { name: "SQL / MySQL",    level: 80 },
    { name: "Power BI",       level: 60 },
    { name: "Git / GitHub",   level: 75 },
    { name: "Scrum",          level: 85 },
    { name: "Linux",          level: 55 },
  ],

  experience: [
    {
      role:    "Programador Freelance",
      company: "Independiente",
      period:  "Oct 2025 – Actualidad",
      color:   "accent",
      items: [
        "Desarrollé aplicaciones web utilizando Java (Spring) y React, implementando funcionalidades CRUD y conexión a bases de datos SQL.",
        "Diseñé interfaces con HTML y CSS enfocadas en usabilidad y rendimiento.",
        "Desarrollé una aplicación móvil en Android utilizando Kotlin.",
      ],
    },
    {
      role:    "Asistente Informático",
      company: "Universidad Nacional Federico Villarreal",
      period:  "May 2024 – Dic 2024",
      color:   "teal",
      items: [
        "Administré bases de datos, realizando instalación, configuración y actualización de sistemas.",
        "Elaboré modelados de datos y generé reportes utilizando Power BI y Excel.",
        "Brindé soporte técnico en procesos académicos y administrativos.",
      ],
    },
    {
      role:    "Asesor Técnico – Ventas",
      company: "Movistar (Covisian – GSS)",
      period:  "Mar 2025 – Oct 2025",
      color:   "gold",
      items: [
        "Asesoré a clientes en servicios de fibra óptica y portabilidad.",
        "Brindé soporte técnico y orientación en servicios de telecomunicaciones.",
      ],
    },
  ],

  projects: [
    {
      title:  "Aplicación Web Full Stack",
      desc:   "App web con Java Spring Boot como backend REST y React en el frontend. CRUD completo con autenticación y conexión a base de datos SQL.",
      tags:   ["Java", "Spring Boot", "React", "MySQL"],
      icon:   "🌐",
      link:   "https://github.com/JuanJ38",
    },
    {
      title:  "App Móvil Android",
      desc:   "Aplicación móvil nativa en Android desarrollada con Kotlin. Interfaz moderna con consumo de APIs REST y almacenamiento local.",
      tags:   ["Kotlin", "Android", "REST API"],
      icon:   "📱",
      link:   "https://github.com/JuanJ38",
    },
    {
      title:  "Aplicacion de Escritorio ",
      desc:   "Reportes y visualizaciones de datos para la UNFV. Modelado de datos, consultas SQL avanzadas e integración con Excel.",
      tags:   ["Java", "SQL", "Excel"],
      icon:   "📊",
      link:   "#",
    },
  ],

  education: [
    {
      type:    "university",
      title:   "Ingeniería Informática",
      place:   "Universidad Nacional Federico Villarreal",
      period:  "2019 – Actualidad (9no ciclo)",
      icon:    "🎓",
    },
    {
      type:    "university",
      title:   "Inglés – Nivel Intermedio",
      place:   "Instituto Británico",
      period:  "May 2025 – Actualidad",
      icon:    "🇬🇧",
    },
    {
      type:    "cert",
      title:   "Curso SQL – Bases de Datos",
      place:   "IDAT · 2026",
      detail:  "Modelamiento, consultas, integración de datos, implementación avanzada",
      icon:    "🗄️",
    },
    {
      type:    "cert",
      title:   "Desarrollador de Aplicaciones Web con Java",
      place:   "TECSUP · 2025",
      detail:  "Fundamentos, POO, Interfaces, Colecciones, JDBC, JSP, Spring Boot",
      icon:    "☕",
    },
    {
      type:    "cert",
      title:   "Java 17 – Desarrollo Back-End",
      place:   "CIBERTEC · 2026",
      detail:  "Spring Core, MVC, Data, Spring Boot, Servicios Rest, Microservicios, Security",
      icon:    "🔧",
    },
    {
      type:    "cert",
      title:   "Microsoft Office – Nivel Intermedio",
      place:   "Fundación Telefónica · 2026",
      detail:  "Excel, Word y PowerPoint aplicados a reportes y análisis de datos",
      icon:    "📋",
    },
  ],

  contact: [
    { label: "Email",    value: "juanjosehorna16@gmail.com",            href: "mailto:ju@gmail.com",                   icon: "email" },
    { label: "GitHub",   value: "github.com/JuanJ38",      href: "https://github.com/JuanJ38",            icon: "github" },
    { label: "LinkedIn", value: "Tu perfil LinkedIn",      href: "https://linkedin.com/in/tu-perfil",     icon: "linkedin" },
    { label: "Ubicación",value: "Lima", href: "#",                                   icon: "location" },
  ],

};