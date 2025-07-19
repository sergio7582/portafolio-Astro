export const devInfo = {
    name: "Sergio Mancinas 💻",
    title: "Desarrollador Full Stack .NET",
    bio: "Ingeniero en redes y telecomunicaciones con más de 4 años de experiencia desarrollando soluciones de software eficientes y escalables. Apasionado por la tecnología y el aprendizaje continuo.",
    location: "Durango, México",
    social: [
        { text: "GitHub", url: "https://github.com/sergio7582", icon: "fab fa-github", title: "Visitar mi página de GitHub" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/sergio-mancinas-7b0b3b1b4/", icon: "fab fa-linkedin", title: "Visitar mi página de LinkedIn" },
        { text: "CV", url: "/Sergio_Mancinas_CV.pdf", icon: "fas fa-file-pdf", title: "Descargar mi CV" },
        { text: "Correo", url: "mailto:saidels1999@outlook.com", icon: "fas fa-envelope", title: "Enviarme un correo electrónico" },
    ]
};

export const skills = [
    { name: ".NET Core", icon: "fa-brands fa-windows"},
    { name: "C#", icon: "fas fa-code" },
    { name: "Angular", icon: "fab fa-angular" },
    { name: "JavaScript/TypeScript", icon: "fab fa-js" },
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Azure DevOps", icon: "fa-solid fa-cloud" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Kotlin", icon: "fa-brands fa-kickstarter" },
    { name: "Git", icon: "fab fa-git" },
];

export const projects = [
    {
        title: "Sistema de tickets",
        description: "Asp .NET, SQL, SignalR, Bootstrap",
        details: `Solución para gestionar solicitudes de mantenimiento y soporte técnico con:`,
        listDetails: [ '📲 Chat grupal en tiempo real','📎 Posibilidad de adjuntar archivos','🔔 Notificaciones via correo', '👥 Acceso diferenciado (técnicos/usuarios)','🛠️ Ajuste de opciones por departamento'],
        image: "/Projects/Tickets_home.webp",
        links: [
            { text: "Code", url: "https://github.com/sergio7582/TicketsSystem", icon: "fab fa-github" },
        ],
        technologies: [
            { name: '.NET', icon: 'fa-brands fa-windows' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'SignalR', icon: ''},
            { name: 'Bootstrap', icon: ''}
        ],

    },
    {
        title: "Control de facturas de proveedores",
        description: ".NET, Angular, SQL, JWT, XML",
        details: `Sistema para gestionar las facturas de tus proveedores, cumplimiento de normativas y complementos de pago con:`,
        listDetails: ['📄 Manejo de archivos XML y PDF','👨‍💻 Control de usuario','🔒 Recuperación de contraseñas', '📅 Registro de actividad', '📤 Envío de notificaciones'],
        image: "/Projects/Proveedores/facturas_system.png",
        links: [
            { text: "Page", url: "https://kyungshinmx.com/auth/login", icon: "fa-solid fa-globe" },
        ],
        technologies: [
            { name: '.NET', icon: 'fa-brands fa-windows' },
            { name: 'Angular', icon: 'fab fa-angular' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'JWT', icon: ''},
        ],
    },
    {
        title: "Recuperar datos del SAT",
        description: "",
        details: `Solución para recuperar los datos fiscales escaneado QR de la constancia fiscal con:`,
        listDetails: ['🗄️ Guardado en base de datos relacional.', '🧷 Buscador de información con RFC o CURP.', '📃 Descarga de reporte excel por rango de fechas.'],
        image: "/Projects/scansat.webp",
        links: [
            // { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET API', icon: 'fa-brands fa-windows' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'Bootstrap', icon: ''},
            { name: 'JS', icon: ''}
        ],
    },
    {
        title: "Aplicación de recordatorios",
        description: "Asp .NET API, Angular,SQL, JWT, HangFire",
        details: `Sistema para programar notificaciones:`,
        listDetails: ['⏰ Recordatorios personalizables (diarios/semanales)','📧 Plantillas de email editable','📊 Panel en tiempo real', '🔧 Activar o desactivar recordatorios'],
        image: "/Projects/Recordatorios/agregar_nuevo_recordatorio.png",
        links: [
            { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET', icon: 'fa-brands fa-windows' },
            { name: 'Angular', icon: 'fab fa-angular' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'HangFire', icon: ''},
        ],
    },
    {
        title: "Sistema para compartir archivos",
        description: "Asp .NET Core MVC,SQL, JWT, Azure Web App, SmarterASP .NET, CloudFlare",
        details: `Plataforma para compartir archivos de forma segura:`,
        listDetails: ['☁️ Almacenamiento en la nube','🔐 Control de usuarios','📂 Creación de carpetas','🌐 CDN para descargas rápidas'],
        image: "/Projects/Proveedores/sistema_proveedores.png",
        links: [
            { text: "Demo", url: "#", icon: "fas fa-external-link-alt" },
            { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET Core MVC', icon: 'fa-brands fa-windows' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'JWT', icon: ''},
            { name: 'Azure Web App', icon: 'fa-solid fa-cloud'},
            { name: 'SmarterASP .NET', icon: ''},
            { name: 'CloudFlare', icon: ''},
        ],
    }
];

export const about = {
    content: `Soy un Ing en redes y telecomunicaciones ya con 4+ años de experiencia en el desarrollo de software, me apasiona la tecnología y siempre estoy buscando aprender cosas nuevas, mejorar como persona y desarrollador. Me gusta trabajar en equipo y siempre estoy dispuesto a ayudar a mis compañeros. Me considero una persona proactiva y responsable con capacidad para adaptarme a cualquier entorno de trabajo.`,
};

//Nota: Agregar la sección de educación y experiencia laboral
export const education = [
    {
        title: "Ingeniería en Redes y Telecomunicaciones",
        institution: "Universidad Politécnica de Durango",
        date: "2018 - 2021",
        description: "Ingeniería en Redes y Telecomunicaciones",
    },
    {
        title: "Curso de Desarrollo Web",
        institution: "Platzi",
        date: "2020 - 2021",
        description: "Curso de desarrollo web con HTML, CSS, JavaScript, React y Node.js",
    },
];

export const experience = [
    {
        title: "Desarrollador Full Stack",
        company: "DAWS",
        date: "2022 - Actualidad",
        description: "Desarrollo de aplicaciones web, móviles y de escritorio con tecnologías .NET y Angular",
    },
    {
        title: "Practicas Profesionales",
        company: "DAWS",
        date: "2021 - 2022",
        description: "Desarrollo de aplicaciones web, móviles con .NET y ReactNative",
    }
];

//Nota: Separar las tecnologías por categorías (Frontend, Backend, Bases de datos, Otros)
//Nota: Agregar un botón para descargar el CV en PDF y visitar pagina de linkedin
//Nota: Agregar un botón para enviar un correo
//Nota: Cambiar el estilo de las habilidades que sea una linea vertical con iconos que se mueva infinitamente y que al pasar el mouse se detenga y muestre el nombre de la habilidad