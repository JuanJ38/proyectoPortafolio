

const DATA = {

  skills: {
    solid: [
      { name: "Java",      icon: "java" },
      { name: "SQL/MySQL", icon: "mysql" },
      { name: "Scrum",     icon: "scrum" },
      { name: "Power BI",  icon: "powerbi" },
      { name: "Office",     icon: "excel" },
    ],
    frequent: [
      { name: "Spring Boot", icon: "spring" },
      { name: "JavaScript",  icon: "javascript" },
      { name: "HTML/CSS",    icon: "html5" },
      { name: "Git/GitHub",  icon: "github" },
    ],
    learning: [
      { name: "Python",    icon: "python" },
      { name: "Kotlin",    icon: "kotlin" },
      
    ],
  },

  experience: [
    {
      role:    "Proyecto TI",
      company: "Personal",
      period:  "Nov 2025 – Actualidad",
      color:   "accent",
      items: [
        "Desarrollé una solución integral migrando una aplicación de escritorio (Java Swing / SQL Server ) a una arquitectura web moderna con Spring Boot y MySQL.",
        "Implementé API REST, seguridad y despliegue en la nube (Railway)",
        
      ],
    },
    {
      role:    "Asistente Informático",
      company: "Universidad Nacional Federico Villarreal",
      period:  "May 2025 – Nov 2025",
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
      period:  "Nov 2024  – Mar 2025",
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
      desc:   "App web con Java Spring Boot como backend REST y React en el frontend. CRUD completo con autenticación y conexión a base de datos MSQL.",
      tags:   ["Java", "Spring Boot", "Javascript", "MySQL" ," HTML" , "CSS"],
      icon:   "🌐",
      link:   "https://github.com/JuanJ38/sistemaBiblioteca-springBoot",
       liveLink: " https://sistemabiblioteca-springboot-production.up.railway.app/login",
      
    },

    {
      title:  "Aplicacion de Escritorio ",
      desc:   "Sistema de Gestión de Biblioteca — Aplicación de escritorio en Java Swing con arquitectura MVC, conexión a base de datos MySQL vía JDBC, control de roles (Admin/User).",
      tags:   ["Java", "SQL", "JDBC"],
      icon:   "📊",
      link:   "https://github.com/JuanJ38/biblioteca-java",
    },
    {
      title:  "Portafolfio Web ",
      desc:   "Diseñé y desarrollé un portafolio web  Enfocado en usabilidad, diseño responsivo y rendimiento. ", 

      tags:   ["Javascript", "HTML", "CSS"],
      icon:   "🌐",
      link:   "https://github.com/JuanJ38/proyectoPortafolio",
    },
    {
      title:  "App Móvil Android",
      desc:   "Aplicación móvil nativa en Android desarrollada con Kotlin. Interfaz moderna con consumo de APIs REST y almacenamiento local.",
      tags:   ["Kotlin", "Android", "REST API"],
      icon:   "📱",
      link:   "https://github.com/JuanJ38/biblioteca-android",
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
    { label: "Numero",value: " 930 271 941", href: "#",                                   icon: "celular" },
  ],

};