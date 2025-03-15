export const devInfo = {
    name: "Sergio Mancinas 💻",
    title: "Desarrollador Full Stack .NET",
    bio: "Soy un desarrollador Full-Stack con 4 años de experiencia en desarrollo web. Tengo una sólida formación en tecnologías como .NET y siempre estoy buscando aprender cosas nuevas.",
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
        description: "Tecnologías: Asp .NET, SQL, SignalR, Bootstrap",
        details: `Solución para gestionar solicitudes de mantenimiento y soporte técnico.`,
        listDetails: [ '📲 Chat grupal en tiempo real','📎 Adjuntar archivos en tickets y chats','🔔 Notificaciones via email', '👥 Acceso diferenciado (técnicos/usuarios)','🛠️ Ajuste de opciones al crear un ticket'],
        image: "/Projects/Tickets/Tickets_home.png",
    },
    {
        title: "API de tareas",
        description: "Tecnologías: Asp .NET API, SQL, JWT",
        details: `API segura para administrar tareas con:`,
        listDetails: ['🔐 Autenticación con JWT','🔍 Filtrar tareas por categoría', '✅ Todas las operaciones CRUD'],
        image: "/Projects/Tasks/Proyecto_de_tareas.png",
    },
    {
        title: "Aplicacion de recordatorios",
        description: "Tecnologías: Asp .NET API, Angular,SQL, JWT, HangFire",
        details: `Sistema para programar notificaciones:`,
        listDetails: ['⏰ Recordatorios personalizables (diarios/semanales)','📧 Plantillas de email editable','📊 Panel en tiempo real', '🔧 Activar o desactivar recordatorios'],
        image: "/Projects/Recordatorios/agregar_nuevo_recordatorio.png",
    },
    {
        title: "Sistema para compartir archivos",
        description: "Tecnologías: Asp .NET Core MVC,SQL, JWT, Azure Web App, SmarterASP .NET, CloudFlare",
        details: `Plataforma para compartir archivos de forma segura:`,
        listDetails: ['☁️ Almacenamiento en la nube','🔐 Control de usuarios','📂 Creación de carpetas','🌐 CDN para descargas rápidas'],
        image: "/Projects/Proveedores/sistema_proveedores.png",
    }
];

export const about = {
    content: `Soy un Ing en redes y telecomunicaciones ya con 4 años en el desarrollo de software, me apasiona la tecnología y siempre estoy buscando aprender cosas nuevas y mejorar como persona y desarrollador. Me gusta trabajar en equipo y siempre estoy dispuesto a ayudar a mis compañeros. 
    Me considero una persona proactiva y responsable con capacidad para adaptarme a cualquier entorno de trabajo. Me gustan los videojuegos, el cine y las series de televisión.`,
};