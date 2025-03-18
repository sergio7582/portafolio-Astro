export const devInfo = {
    name: "Sergio Mancinas 💻",
    title: "Desarrollador Full Stack .NET",
    bio: "Ingeniero en redes y telecomunicaciones con 4 años de experiencia en el desarrollo de software. Me apasiona la tecnología y siempre estoy buscando aprender cosas nuevas y mejorar como persona y desarrollador.",
    location: "Durango, México",
    social: [
        { text: "GitHub", url: "https://github.com/sergio7582", icon: "fab fa-github", title: "Visitar mi página de GitHub" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/sergio-mancinas-7b0b3b1b4/", icon: "fab fa-linkedin", title: "Visitar mi página de LinkedIn" },
        { text: "CV", url: "/Sergio_Mancinas_CV.pdf", icon: "fas fa-file-pdf", title: "Descargar mi CV" },
        { text: "Correo", url: "mailto:saidels1999@outlook.com", icon: "fas fa-envelope", title: "Enviarme un correo electrónico" },
    ]
};

export const skills = [
    { name: "C#", image: "/icons/csharp.svg" },
    { name: ".NET Core", image: "/icons/dotnet-tile.svg" },
    { name: "HTML", image: "/icons/html5.svg" },
    { name: "CSS", image: "/icons/css_old.svg" },
    { name: "JavaScript", image: "/icons/javascript.svg" },
    { name: "TypeScript", image: "/icons/typescript.svg" },
    { name: "Angular", image: "/icons/angular.svg" },
    { name: "Bootstrap", image: "/icons/bootstrap.svg" },
    { name: "Azure DevOps", image: "/icons/azure.svg" },
    { name: "SQL", image: "/icons/sql-server.svg" },
    { name: "REDIS", image: "/icons/redis.svg" },
    { name: "Kotlin", image: "/icons/kotlin.svg" },
    { name: "Git", image: "/icons/git.svg" },
    { name: "PostMan", image: "/icons/postman.svg" },
    { name: "VisualStudio", image: "/icons/visual-studio.svg" },
    
];

export const projects = [
    {
        title: "Sistema de tickets",
        description: "Asp .NET, SQL, SignalR, Bootstrap",
        details: `Solución para gestionar solicitudes de mantenimiento y soporte técnico con:`,
        listDetails: [ '📲 Chat grupal en tiempo real','📎 Posibilidad de adjuntar archivos','🔔 Notificaciones via correo', '👥 Acceso diferenciado (técnicos/usuarios)','🛠️ Ajuste de opciones por departamento'],
        image: "/Projects/Tickets_home.webp",
        links: [
            { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET', icon: 'fa-brands fa-windows' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'SignalR', icon: ''},
            { name: 'Bootstrap', icon: ''}
        ],

    },
    {
        title: "Recuperar datos del SAT",
        description: "",
        details: `Solución para recuperar los datos fiscales escaneado QR de la constancia fiscal con:`,
        listDetails: ['🗄️ Guardado en base de datos relacional.', '🧷 Buscador de información con RFC o CURP.', '📃 Descarga de reporte excel por rango de fechas.'],
        image: "/Projects/scansat.webp",
        links: [
            { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET MVC', icon: 'fa-brands fa-windows' },
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
        image: "/Projects/agregar_nuevo_recordatorio.webp",
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
        image: "/Projects/sistema_proveedores.webp",
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
    },
    {
        title: "API de tareas",
        description: "Asp .NET API, SQL, JWT",
        details: `API segura para administrar tareas con:`,
        listDetails: ['🔐 Autenticación con JWT','🔍 Filtrar tareas por categoría', '✅ Todas las operaciones CRUD'],
        image: "/Projects/Proyecto_de_tareas.webp",
        links: [
            { text: "Code", url: "#", icon: "fab fa-github" },
        ],
        technologies: [
            { name: 'Asp .NET API', icon: 'fa-brands fa-windows' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'JWT', icon: ''},
        ],
    },
];

export const about = {
    content: `Soy un Ing en redes y telecomunicaciones ya con 4 años en el desarrollo de software, me apasiona la tecnología y siempre estoy buscando aprender cosas nuevas y mejorar como persona y desarrollador. Me gusta trabajar en equipo y siempre estoy dispuesto a ayudar a mis compañeros. 
    Me considero una persona proactiva y responsable con capacidad para adaptarme a cualquier entorno de trabajo. Me gustan los videojuegos, el cine y las series de televisión.`,
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