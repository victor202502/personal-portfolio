// Tu objeto de traducciones (asegúrate de que esté completo con todas las claves necesarias)
const translations = {
    en: {
        // --- Existing Keys ---
        home: "Home",
        about: "About",
        resume: "Resume",
        jobexperience: "Job Experience",
        skills: "Skills",
        projects: "Projects",
        blog: "My Blog",
        contact: "Contact",
        contact1: "Contact Form",
        language: "Language",
        hello: "Hello, I'm Víctor Salgado",
        homeDescription: "I'm currently looking for an internship to complete my training as a Fachinformatiker Anwendungsentwicklung...",
        looking: "Looking for new opportunities!",
        // Note: If homeDescription2 contains HTML (like <strong>), the current logic might break it.
        // Consider always using innerHTML or ensuring translations are plain text.
        homeDescription2: "If you're looking for someone with a passion for programming, commitment, and a willingness to learn, I would love to be part of your team! I'm ready to contribute and keep developing my skills.",
        aboutMe: "About Me",
        aboutDescription: "I am looking for an internship for my vocational training in application development, with the interest to learn and apply my knowledge.",
        nameLabel: "Name:",
        dobLabel: "Date of birth:",
        addressLabel: "Address:",
        zipcodeLabel: "Zip code:",
        emailLabel: "Email:",
        phoneLabel: "Phone:",
        address: "Address",
        phone: "Phone",
        email: "Email",
        linkedin: "LinkedIn",
        keyTasks: "Key Tasks:",
        // Resume...
        resumeTitleIT: "IT Specialist", resumeDescIT: "In training as an IT specialist focused on application development.", resumeTitleCodecademy: "Codecademy", resumeDescCodecademyFS: "• Full-Stack Engineer Path: Basics and advanced skills in web development.", resumeDescCodecademyJava: "• Learn Java: Introduction to Java programming with a certificate.", resumeTitleSecurity: "Security Guard Course", resumeDescSecurity: "Academia Foris – Security guard training course.", resumeTitleMechatronics: "Car Mechatronics Training", resumeDescMechatronics: "I.E.S. Universidad Laboral – Professional training as a car mechanic.",
        // Job Experience...
        jobTitleProdAssistant: "Production Assistant", jobTitleTruckDriver: "Truck Driver", jobTitleBusDriver: "Bus Driver", jobTitleConstructionAssistant: "Construction Assistant", jobTitleSecurityGuard: "Security Guard", jobTitleWarehouseWorker: "Warehouse Worker",
        job1Task1: "Operation and monitoring of production systems.", job1Task2: "Cleaning and maintenance of equipment.", job1Task3: "Reporting malfunctions and quality deviations.", job1Task4: "Ensuring compliance with production parameters.", contactBtnXella: "Contact XELLA",
        job2Task1: "Executing planned waste collection routes.", job2Task2: "Ensuring truck roadworthiness and safety.", job2Task3: "Reporting technical issues to the workshop.", contactBtnReso: "Contact RESO",
        job3Task1: "Picking parts according to order forms.", job3Task2: "Sawing and stamping components.", job3Task3: "Preparing shipments and handing them over to the next production stage.", contactBtnMarkilux: "Contact MARKILUX",
        job4Task1: "Performing scheduled bus routes.", job4Task2: "Handling fare transactions and accounting.", job4Task3: "Providing customer service and ticket sales.", contactBtnWorms: "Contact VERKEHRSGESELLSCHAFT WORMS",
        job5Task1: "Transporting material samples from construction sites to the lab.", job5Task2: "Conducting material tests.", contactBtnEptisa: "Contact EPTISA",
        job6Task1: "Monitoring company premises.", job6Task2: "Controlling access for people and vehicles.", job6Task3: "Surveillance via camera systems.", contactBtnViten: "Contact VITEN SEGURIDAD",
        job7Task1: "Receiving and storing goods.", job7Task2: "Sorting and assembling customer orders.", job7Task3: "Packing and preparing shipments.", contactBtnVerino: "Contact ROBERTO VERINO",
        // Contact Section...
        copyBtn: "Copy",
        copiedMsg: "Copied to clipboard!", // Also used for tooltips
        visitLinkedInBtn: "Visit LinkedIn",
        contactFormTitle: "Contact Me",
        formNameLabel: "Name:",
        formNamePlaceholder: "Your name",
        formNameError: "Please enter your name.",
        formEmailLabel: "Email:",
        formEmailPlaceholder: "Your email",
        formEmailError: "Please enter a valid email address.",
        formSubjectLabel: "Subject:",
        formSubjectPlaceholder: "Message subject",
        formSubjectError: "Please enter a subject.",
        formMessageLabel: "Message:",
        formMessagePlaceholder: "Write your message",
        formMessageError: "Please enter your message.",
        formSendButton: "Send",
        formStatusSending: "Sending...",
        formStatusSuccess: "Thank you for your message! It has been sent.",
        formStatusErrorServer: "Oops! There was a problem submitting your form.", // Error genérico del servidor/Formspree
        formStatusErrorNetwork: "Oops! There was a problem submitting your form (network error).",
        formValidationError: "Please fill in all required fields correctly.", // Mensaje para validación JS (si lo usas)
        // Footer...
        footerCopyright: "© 2025 Victor Salgado Personal Portfolio",
        // Proyects...
        project1Name: "Interactive Quiz", 
        project1ModalTitle: "Interactive Quiz",
        project1ModalDesc: "This project is a full-stack interactive quiz application. The frontend is built with HTML, CSS (using Bootstrap for responsive design), and vanilla JavaScript. The backend is developed with Node.js and Express, and it includes user authentication using bcrypt for password hashing. User data and quiz progress are stored in a PostgreSQL database integrated via the hosting platform Render.\n\nUsers can register via a signup form or log in with test credentials (`user11` / `user11`). Once authenticated, users can access the quiz interface, answer multiple-choice questions, and their results and progress are saved for future sessions. The project focuses on DOM manipulation, conditional logic, user state management, and secure handling of user credentials.",
        viewCodeBtn: "GitHub Repository",
        viewProjectBtn: "Open Web",
        project2Name: "React Messaging App", 
        project2ModalTitle: "React Messaging App",
        project2ModalDesc: "This is a full-stack real-time messaging application. The frontend is built using React, utilizing a component-based architecture and efficient state management to provide a dynamic and responsive user interface. The backend, powered by Node.js and Express with Socket.IO, manages WebSocket connections for real-time communication, user authentication, and message persistence. User data, conversations, and messages are stored in a connected database. Users can sign up, log in, and view a list of other users. They can select a recipient to view their message history and initiate or continue direct conversations. The application supports real-time message exchange, making it easy to chat instantly with other users.",
        project3Name: "JavaFX Paint App",
        project3ModalTitle: "Modern JavaFX Paint Application",
        project3ModalDesc: `This is a desktop paint application developed using Java with the JavaFX framework for the graphical user interface.
                        It utilizes Maven for project build and dependency management.
                        The application provides basic drawing functionalities including a pen tool, eraser, shape tools (rectangle, oval), color selection, and line width adjustment.
                        Users can save their creations as PNG image files and load existing PNGs back into the canvas.
                        The canvas supports zooming and panning for better navigation on larger drawings.`,
        project3Req1: "Requires Java Runtime Environment (JRE) version 18 or higher installed on the system.",
        project3Req2: "Download the executable JAR file and run it from the command line using: <code>java -jar YourAppName.jar</code> (replace YourAppName.jar with the actual downloaded file name).",
        viewCodeBtn: "GitHub Repository",
        downloadAppBtn: "Download JAR",
        project4Name: "PHP Blog System",
        project4ModalTitle: "PHP Blog System",
        project4ModalDesc: "This is a dynamic blog application built from scratch using PHP for server-side logic and a PostgreSQL database (hosted on Neon) for data persistence. The application features user registration, login/logout functionality, and session management. Authenticated users can create, view, edit, and delete their own blog posts. All users can view posts from all authors and add comments to any post. Comment authors can also edit or delete their own comments. The project demonstrates CRUD operations, secure password hashing, user authentication, and basic database interaction with PDO.",
        project4FeaturesTitle: "Key Features:",
        project4Feature1: "User authentication (registration, login, logout) with password hashing.",
        project4Feature2: "CRUD operations for blog posts (Create, Read, Update, Delete) by post authors.",
        project4Feature3: "Public view of all posts with author information.",
        project4Feature4: "Commenting system on posts, with edit/delete capabilities for comment authors.",
        project4Feature5: "Responsive design using basic CSS, adaptable for various screen sizes.",
        project4Feature6: "Secure database interaction using PDO and prepared statements.",
        project4Feature7: "Deployed on Koyeb with an external Neon PostgreSQL database.",
        project5Name: "Rental Law Assistant",
        project5ModalTitle: "Key Features:",
        project5ModalDesc: "This is a web-based legal assistant application focused on rental law, developed with Python and Streamlit. It allows users to ask questions about rental agreements, such as contract duration, termination conditions, deposit regulations, and the obligations of tenants and landlords. The application integrates natural language processing through LangChain and HuggingFace models, combined with Pinecone for efficient document search. Legal texts and guidelines are processed using PDF parsing, enabling the assistant to provide accurate, AI-powered explanations and references in real time. The goal of the project is to provide an easy-to-use consultation tool for tenants and landlords, ensuring clarity and accessibility in typical rental situations.",

        cv: "CV / Resume",
        viewCvLink: "View CV Online",
        downloadBtn: "Download PDF",
    },
    es: {
         // --- Existing Keys ---
        home: "Inicio", about: "Acerca de", resume: "Currículum", jobexperience: "Experiencia laboral", skills: "Habilidades", projects: "Proyectos", blog: "Mi Blog", contact: "Contacto",contact1:"Formulario de contacto", language: "Idioma", hello: "Hola, soy Víctor Salgado", homeDescription: "Actualmente estoy buscando una pasantía para completar mi formación como Fachinformatiker Anwendungsentwicklung...", looking: "¡Buscando nuevas oportunidades!", homeDescription2: "Si estás buscando a alguien con pasión por la programación, compromiso y ganas de aprender, ¡me encantaría formar parte de tu equipo! Estoy listo para contribuir y seguir desarrollando mis habilidades.", aboutMe: "Acerca de mí", aboutDescription: "Estoy buscando unas prácticas para mi ciclo formativo en el área de desarrollo de aplicaciones, con el interés de aprender y aplicar mis conocimientos.", nameLabel: "Nombre:", dobLabel: "Fecha de nacimiento:", addressLabel: "Dirección:", zipcodeLabel: "Código postal:", emailLabel: "Correo electrónico:", phoneLabel: "Teléfono:", address: "Dirección", phone: "Teléfono", email: "Correo electrónico", linkedin: "LinkedIn", keyTasks: "Tareas clave:",
        // Resume section...
        resumeTitleIT: "Especialista en TI", resumeDescIT: "En formación como especialista en TI enfocado en el desarrollo de aplicaciones.", resumeTitleCodecademy: "Codecademy", resumeDescCodecademyFS: "• Ruta de Ingeniero Full-Stack: Habilidades básicas y avanzadas en desarrollo web.", resumeDescCodecademyJava: "• Aprende Java: Introducción a la programación Java con certificado.", resumeTitleSecurity: "Curso de Vigilante de Seguridad", resumeDescSecurity: "Academia Foris – Curso de formación de vigilante de seguridad.", resumeTitleMechatronics: "Formación en Mecatrónica Automotriz", resumeDescMechatronics: "I.E.S. Universidad Laboral – Formación profesional como mecánico de automóviles.",
        // Job Experience section...
        jobTitleProdAssistant: "Asistente de Producción", jobTitleTruckDriver: "Conductor de Camión", jobTitleBusDriver: "Conductor de Autobús", jobTitleConstructionAssistant: "Asistente de Construcción", jobTitleSecurityGuard: "Vigilante de Seguridad", jobTitleWarehouseWorker: "Mozo de Almacén",
        job1Task1: "Operación y monitorización de sistemas de producción.", job1Task2: "Limpieza y mantenimiento de equipos.", job1Task3: "Reporte de malfuncionamientos y desviaciones de calidad.", job1Task4: "Asegurar el cumplimiento de los parámetros de producción.", contactBtnXella: "Contactar XELLA",
        job2Task1: "Ejecución de rutas planificadas de recolección de residuos.", job2Task2: "Asegurar la aptitud para la circulación y seguridad del camión.", job2Task3: "Reporte de problemas técnicos al taller.", contactBtnReso: "Contactar RESO",
        job3Task1: "Recogida de piezas según formularios de pedido.", job3Task2: "Serrado y estampado de componentes.", job3Task3: "Preparación de envíos y entrega a la siguiente fase de producción.", contactBtnMarkilux: "Contactar MARKILUX",
        job4Task1: "Realización de rutas de autobús programadas.", job4Task2: "Manejo de transacciones de tarifas y contabilidad.", job4Task3: "Provisión de servicio al cliente y venta de billetes.", contactBtnWorms: "Contactar VERKEHRSGESELLSCHAFT WORMS",
        job5Task1: "Transporte de muestras de material desde obras al laboratorio.", job5Task2: "Realización de pruebas de materiales.", contactBtnEptisa: "Contactar EPTISA",
        job6Task1: "Monitorización de las instalaciones de la empresa.", job6Task2: "Control de acceso de personas y vehículos.", job6Task3: "Vigilancia mediante sistemas de cámaras.", contactBtnViten: "Contactar VITEN SEGURIDAD",
        job7Task1: "Recepción y almacenamiento de mercancías.", job7Task2: "Clasificación y montaje de pedidos de clientes.", job7Task3: "Empaquetado y preparación de envíos.", contactBtnVerino: "Contactar ROBERTO VERINO",
        // Contact Section...
        copyBtn: "Copiar",
        copiedMsg: "¡Copiado al portapapeles!",
        visitLinkedInBtn: "Visitar LinkedIn",
        contactFormTitle: "Contáctame",
        formNameLabel: "Nombre:",
        formNamePlaceholder: "Tu nombre",
        formNameError: "Por favor, introduce tu nombre.",
        formEmailLabel: "Correo electrónico:",
        formEmailPlaceholder: "Tu correo electrónico",
        formEmailError: "Por favor, introduce una dirección de correo válida.",
        formSubjectLabel: "Asunto:",
        formSubjectPlaceholder: "Asunto del mensaje",
        formSubjectError: "Por favor, introduce un asunto.",
        formMessageLabel: "Mensaje:",
        formMessagePlaceholder: "Escribe tu mensaje",
        formMessageError: "Por favor, introduce tu mensaje.",
        formSendButton: "Enviar",
        formStatusSending: "Enviando...",
        formStatusSuccess: "¡Gracias por tu mensaje! Ha sido enviado.",
        formStatusErrorServer: "¡Ups! Hubo un problema al enviar tu formulario.",
        formStatusErrorNetwork: "¡Ups! Hubo un problema al enviar tu formulario (error de red).",
        formValidationError: "Por favor, completa todos los campos requeridos correctamente.",
        // Footer...
        footerCopyright: "© 2025 Portfolio Personal Victor Salgado",
        //proyects...
        project1Name: "Quiz Interactivo",
        project1ModalTitle: "Quiz Interactivo",
        project1ModalDesc: "Este proyecto es una aplicación de cuestionario interactiva full-stack. El frontend está desarrollado con HTML, CSS (usando Bootstrap para diseño responsivo) y JavaScript puro. El backend está construido con Node.js y Express, e incluye autenticación de usuarios usando bcrypt para el hash de contraseñas. Los datos del usuario y el progreso del quiz se almacenan en una base de datos PostgreSQL integrada mediante la plataforma de alojamiento Render.\n\nLos usuarios pueden registrarse a través de un formulario de inscripción o iniciar sesión con credenciales de prueba (`user11` / `user11`). Una vez autenticados, pueden acceder a la interfaz del quiz, responder preguntas de opción múltiple, y sus resultados y progreso se guardan para futuras sesiones. El proyecto se enfoca en la manipulación del DOM, lógica condicional, gestión del estado del usuario y manejo seguro de credenciales.",
        viewCodeBtn: "Repositorio GitHub",
        viewProjectBtn: "Abrir Web",
        project2Name: "Aplicación de Mensajería React", 

        project2ModalTitle: "Aplicación de Mensajería React",
        project2ModalDesc: "Esta es una aplicación de mensajería en tiempo real full-stack. El frontend está desarrollado con React, utilizando una arquitectura basada en componentes y una gestión eficiente del estado para ofrecer una interfaz de usuario dinámica y responsiva. El backend, basado en Node.js y Express con Socket.IO, gestiona las conexiones WebSocket para la comunicación en tiempo real, la autenticación de usuarios y la persistencia de mensajes. Los datos de usuarios, conversaciones y mensajes se almacenan en una base de datos conectada. Los usuarios pueden registrarse, iniciar sesión y ver una lista de otros usuarios. Pueden seleccionar un destinatario para ver el historial de mensajes y comenzar o continuar conversaciones directas. La aplicación permite el intercambio de mensajes en tiempo real de forma instantánea.",
        project3Name: "Aplicación de Pintura JavaFX",
        project3ModalTitle: "Aplicación Moderna de Pintura JavaFX",
        project3ModalDesc: `Esta es una aplicación de escritorio para pintar desarrollada usando Java con el framework JavaFX para la interfaz gráfica de usuario.
                        Utiliza Maven para la construcción del proyecto y la gestión de dependencias.
                        La aplicación proporciona funcionalidades básicas de dibujo incluyendo una herramienta de lápiz, borrador, herramientas de forma (rectángulo, óvalo), selección de color y ajuste del ancho de línea.
                        Los usuarios pueden guardar sus creaciones como archivos de imagen PNG y cargar PNG existentes de nuevo en el lienzo.
                        El lienzo soporta zoom y desplazamiento para una mejor navegación en dibujos grandes.`,
        project3Req1: "Requiere Java Runtime Environment (JRE) versión 18 o superior instalado en el sistema.",
        project3Req2: "Descarga el archivo JAR ejecutable y ejecútalo desde la línea de comandos usando: <code>java -jar TuAppName.jar</code> (reemplaza TuAppName.jar con el nombre real del archivo descargado).",
        viewCodeBtn: "Repositorio GitHub",
        project4Name: "Sistema de Blog PHP",
        project4ModalTitle: "Sistema de Blog PHP",
        project4ModalDesc: "Esta es una aplicación de blog dinámica construida desde cero usando PHP para la lógica del lado del servidor y una base de datos PostgreSQL (alojada en Neon) para la persistencia de datos. La aplicación cuenta con registro de usuarios, funcionalidad de inicio/cierre de sesión y gestión de sesiones. Los usuarios autenticados pueden crear, ver, editar y eliminar sus propias entradas de blog. Todos los usuarios pueden ver las entradas de todos los autores y añadir comentarios a cualquier entrada. Los autores de comentarios también pueden editar o eliminar sus propios comentarios. El proyecto demuestra operaciones CRUD, hashing seguro de contraseñas, autenticación de usuarios e interacción básica con bases de datos usando PDO.",
        project4FeaturesTitle: "Características Clave:",
        project4Feature1: "Autenticación de usuarios (registro, inicio de sesión, cierre de sesión) con hashing de contraseñas.",
        project4Feature2: "Operaciones CRUD para entradas de blog (Crear, Leer, Actualizar, Eliminar) por los autores de las entradas.",
        project4Feature3: "Vista pública de todas las entradas con información del autor.",
        project4Feature4: "Sistema de comentarios en las entradas, con capacidades de edición/eliminación para los autores de los comentarios.",
        project4Feature5: "Diseño responsivo usando CSS básico, adaptable a varios tamaños de pantalla.",
        project4Feature6: "Interacción segura con la base de datos usando PDO y sentencias preparadas.",
        project4Feature7: "Desplegado en Koyeb con una base de datos PostgreSQL externa de Neon.",
        project5Name: "Asistente Legal de Alquileres",
        project5ModalTitle: "Características principales:",
        project5ModalDesc: "Esta es una aplicación web de asistencia legal centrada en el derecho de alquileres, desarrollada con Python y Streamlit. Permite a los usuarios realizar consultas sobre contratos de arrendamiento, como la duración del contrato, las condiciones de rescisión, las regulaciones sobre depósitos y las obligaciones de inquilinos y propietarios. La aplicación integra procesamiento de lenguaje natural mediante LangChain y modelos de HuggingFace, combinados con Pinecone para una búsqueda eficiente de documentos. Los textos legales y las guías se procesan con análisis de PDF, lo que permite al asistente ofrecer explicaciones y referencias precisas, impulsadas por IA, en tiempo real. El objetivo del proyecto es proporcionar una herramienta de consulta fácil de usar para inquilinos y arrendadores, garantizando claridad y accesibilidad en situaciones habituales de alquiler.",
        downloadAppBtn: "Descargar JAR",
        cv: "CV / Currículum",
        viewCvLink: "Ver CV Online",
        downloadBtn: "Descargar PDF",

        
    },
    de: {
         // --- Existing Keys ---
        home: "Startseite", about: "Über Mich", resume: "Lebenslauf", jobexperience: "Berufserfahrung", skills: "Fähigkeiten", projects: "Projekte", blog: "Mein Blog", contact: "Kontakt", contact1:"Kontaktformular", language: "Sprache", hello: "Hallo, ich bin Víctor Salgado", homeDescription: "Ich suche derzeit ein Praktikum, um meine Ausbildung zum Fachinformatiker für Systemintegration abzuschließen...", looking: "Auf der Suche nach neuen Möglichkeiten!", homeDescription2: "Wenn Sie jemanden mit Leidenschaft für die Programmierung, Engagement und Lernbereitschaft suchen, würde ich gerne Teil Ihres Teams sein! Ich bin bereit, einen Beitrag zu leisten und meine Fähigkeiten weiterzuentwickeln.", aboutMe: "Über Mich", aboutDescription: "Ich suche ein Praktikum für meine Ausbildung im Bereich Anwendungsentwicklung, um meine Kenntnisse zu erweitern und anzuwenden", nameLabel: "Name:", dobLabel: "Geburtsdatum:", addressLabel: "Adresse:", zipcodeLabel: "Postleitzahl:", emailLabel: "E-Mail:", phoneLabel: "Telefon:", address: "Adresse", phone: "Telefon", email: "E-Mail", linkedin: "LinkedIn", keyTasks: "Schlüsselaufgaben:",
        // Resume section...
        resumeTitleIT: "Fachinformatiker", resumeDescIT: "In Ausbildung zum Fachinformatiker mit Schwerpunkt Systemintegration.", resumeTitleCodecademy: "Codecademy", resumeDescCodecademyFS: "• Full-Stack Engineer Pfad: Grundlagen und fortgeschrittene Fähigkeiten in der Webentwicklung.", resumeDescCodecademyJava: "• Java lernen: Einführung in die Java-Programmierung mit Zertifikat.", resumeTitleSecurity: "Sicherheitsfachkraft Kurs", resumeDescSecurity: "Academia Foris – Ausbildungskurs zur Sicherheitsfachkraft.", resumeTitleMechatronics: "Ausbildung zum KFZ-Mechatroniker", resumeDescMechatronics: "I.E.S. Universidad Laboral – Berufsausbildung zum KFZ-Mechaniker.",
        // Job Experience section...
        jobTitleProdAssistant: "Produktionshelfer", jobTitleTruckDriver: "LKW-Fahrer", jobTitleBusDriver: "Busfahrer", jobTitleConstructionAssistant: "Bauhelfer", jobTitleSecurityGuard: "Sicherheitsmitarbeiter", jobTitleWarehouseWorker: "Lagermitarbeiter",
        job1Task1: "Bedienung und Überwachung von Produktionsanlagen.", job1Task2: "Reinigung und Wartung der Ausrüstung.", job1Task3: "Meldung von Störungen und Qualitätsabweichungen.", job1Task4: "Sicherstellung der Einhaltung von Produktionsparametern.", contactBtnXella: "XELLA kontaktieren",
        job2Task1: "Durchführung geplanter Routen zur Abfallsammlung.", job2Task2: "Sicherstellung der Fahrtüchtigkeit und Sicherheit des LKWs.", job2Task3: "Meldung technischer Probleme an die Werkstatt.", contactBtnReso: "RESO kontaktieren",
        job3Task1: "Kommissionierung von Teilen nach Bestellformularen.", job3Task2: "Sägen und Stanzen von Komponenten.", job3Task3: "Vorbereitung von Sendungen und Übergabe an die nächste Produktionsstufe.", contactBtnMarkilux: "MARKILUX kontaktieren",
        job4Task1: "Durchführung planmäßiger Buslinien.", job4Task2: "Abwicklung von Fahrpreistransaktionen und Abrechnung.", job4Task3: "Kundenservice und Ticketverkauf.", contactBtnWorms: "VERKEHRSGESELLSCHAFT WORMS kontaktieren",
        job5Task1: "Transport von Materialproben von Baustellen zum Labor.", job5Task2: "Durchführung von Materialprüfungen.", contactBtnEptisa: "EPTISA kontaktieren",
        job6Task1: "Überwachung von Firmengeländen.", job6Task2: "Kontrolle des Zugangs von Personen und Fahrzeugen.", job6Task3: "Überwachung mittels Kamerasystemen.", contactBtnViten: "VITEN SEGURIDAD kontaktieren",
        job7Task1: "Annahme und Lagerung von Waren.", job7Task2: "Sortierung und Zusammenstellung von Kundenaufträgen.", job7Task3: "Verpackung und Vorbereitung von Sendungen.", contactBtnVerino: "ROBERTO VERINO kontaktieren",
        // Contact Section...
        copyBtn: "Kopieren",
        copiedMsg: "In die Zwischenablage kopiert!",
        visitLinkedInBtn: "LinkedIn besuchen",
        contactFormTitle: "Kontaktieren Sie mich",
        formNameLabel: "Name:",
        formNamePlaceholder: "Ihr Name",
        formNameError: "Bitte geben Sie Ihren Namen ein.",
        formEmailLabel: "E-Mail:",
        formEmailPlaceholder: "Ihre E-Mail",
        formEmailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        formSubjectLabel: "Betreff:",
        formSubjectPlaceholder: "Betreff der Nachricht",
        formSubjectError: "Bitte geben Sie einen Betreff ein.",
        formMessageLabel: "Nachricht:",
        formMessagePlaceholder: "Schreiben Sie Ihre Nachricht",
        formMessageError: "Bitte geben Sie Ihre Nachricht ein.",
        formSendButton: "Senden",
        formStatusSending: "Senden...",
        formStatusSuccess: "Vielen Dank für Ihre Nachricht! Sie wurde gesendet.",
        formStatusErrorServer: "Ups! Beim Senden Ihres Formulars ist ein Problem aufgetreten.",
        formStatusErrorNetwork: "Ups! Beim Senden Ihres Formulars ist ein Problem aufgetreten (Netzwerkfehler).",
        formValidationError: "Bitte füllen Sie alle erforderlichen Felder korrekt aus.",
        // Footer...
        footerCopyright: "© 2025 Victor Salgado Persönliches Portfolio",
        //proyects...
        project1ModalTitle: "Interaktives Quiz",
        project1ModalDesc: "Dieses Projekt ist eine Full-Stack-Quizanwendung. Das Frontend wurde mit HTML, CSS (unter Verwendung von Bootstrap für responsives Design) und Vanilla JavaScript erstellt. Das Backend wurde mit Node.js und Express entwickelt und beinhaltet eine Benutzer-Authentifizierung mit bcrypt zur Passwortverschlüsselung. Benutzerdaten und Quizfortschritte werden in einer PostgreSQL-Datenbank gespeichert, die über die Hosting-Plattform Render integriert ist.\n\nBenutzer können sich über ein Anmeldeformular registrieren oder sich mit Test-Zugangsdaten anmelden (`user11` / `user11`). Nach erfolgreicher Authentifizierung erhalten sie Zugriff auf die Quiz-Oberfläche, können Multiple-Choice-Fragen beantworten und ihre Ergebnisse und Fortschritte werden für zukünftige Sitzungen gespeichert. Das Projekt konzentriert sich auf DOM-Manipulation, bedingte Logik, Benutzerzustandsverwaltung und sichere Handhabung von Benutzeranmeldeinformationen.",
        viewCodeBtn: "GitHub-Repository",
        viewProjectBtn: "Web öffnen",
        project2Name: "React-Nachrichten-App", 
        project2ModalTitle: "React-Nachrichten-App",
        project2ModalDesc: "Dies ist eine Full-Stack-Messaging-Anwendung in Echtzeit. Das Frontend wurde mit React entwickelt und nutzt eine komponentenbasierte Architektur sowie eine effiziente Zustandsverwaltung, um eine dynamische und reaktionsfähige Benutzeroberfläche bereitzustellen. Das Backend, basierend auf Node.js und Express mit Socket.IO, verwaltet WebSocket-Verbindungen für die Echtzeitkommunikation, Benutzerauthentifizierung und Nachrichtenpersistenz. Benutzerdaten, Konversationen und Nachrichten werden in einer verbundenen Datenbank gespeichert. Benutzer können sich registrieren, anmelden und eine Liste anderer Benutzer anzeigen. Sie können einen Empfänger auswählen, um den bisherigen Nachrichtenverlauf einzusehen und Direktnachrichten zu starten oder fortzusetzen. Die Anwendung unterstützt den sofortigen Nachrichtenaustausch in Echtzeit.",
        project3Name: "JavaFX Malanwendung",
        project3ModalTitle: "Moderne JavaFX Malanwendung",
        project3ModalDesc: `Dies ist eine Desktop-Malanwendung, die mit Java unter Verwendung des JavaFX-Frameworks für die grafische Benutzeroberfläche entwickelt wurde.
                            Sie verwendet Maven für die Projekterstellung und Abhängigkeitsverwaltung.
                            Die Anwendung bietet grundlegende Zeichenfunktionen wie ein Stiftwerkzeug, Radierer, Formwerkzeuge (Rechteck, Oval), Farbauswahl und Anpassung der Linienbreite.
                            Benutzer können ihre Kreationen als PNG-Bilddateien speichern und vorhandene PNGs wieder in die Leinwand laden.
                            Die Leinwand unterstützt Zoomen und Verschieben (Panning) für eine bessere Navigation bei größeren Zeichnungen.`,
        project3Req1: "Benötigt Java Runtime Environment (JRE) Version 18 oder höher auf dem System installiert.",
        project3Req2: "Laden Sie die ausführbare JAR-Datei herunter und führen Sie sie über die Befehlszeile aus mit: <code>java -jar IhrAppName.jar</code> (ersetzen Sie IhrAppName.jar durch den tatsächlichen Namen der heruntergeladenen Datei).",
        viewCodeBtn: "GitHub-Repository",
        project4Name: "PHP Blog-System",
        project4ModalTitle: "PHP Blog-System",
        project4ModalDesc: "Dies ist eine dynamische Blog-Anwendung, die von Grund auf mit PHP für die serverseitige Logik und einer PostgreSQL-Datenbank (gehostet auf Neon) für die Datenpersistenz erstellt wurde. Die Anwendung bietet Benutzerregistrierung, Login-/Logout-Funktionalität und Sitzungsverwaltung. Authentifizierte Benutzer können ihre eigenen Blog-Beiträge erstellen, anzeigen, bearbeiten und löschen. Alle Benutzer können Beiträge von allen Autoren anzeigen und Kommentare zu jedem Beitrag hinzufügen. Kommentarautoren können auch ihre eigenen Kommentare bearbeiten oder löschen. Das Projekt demonstriert CRUD-Operationen, sicheres Passwort-Hashing, Benutzerauthentifizierung und grundlegende Datenbankinteraktion mit PDO.",
        project4FeaturesTitle: "Hauptmerkmale:",
        project4Feature1: "Benutzerauthentifizierung (Registrierung, Login, Logout) mit Passwort-Hashing.",
        project4Feature2: "CRUD-Operationen für Blog-Beiträge (Erstellen, Lesen, Aktualisieren, Löschen) durch Beitragsautoren.",
        project4Feature3: "Öffentliche Ansicht aller Beiträge mit Autorinformationen.",
        project4Feature4: "Kommentarsystem für Beiträge, mit Bearbeitungs-/Löschfunktionen für Kommentarautoren.",
        project4Feature5: "Responsives Design mit grundlegendem CSS, anpassbar an verschiedene Bildschirmgrößen.",
        project4Feature6: "Sichere Datenbankinteraktion mit PDO und vorbereiteten Anweisungen.",
        project4Feature7: "Bereitgestellt auf Koyeb mit einer externen Neon PostgreSQL-Datenbank.",
        downloadAppBtn: "JAR herunterladen",
        project5Name:" Mietrechtsassistent",
        project5ModalTitle: "Hauptmerkmale:",
        project5ModalDesc: "Dies ist eine webbasierte Rechtsassistent-Anwendung mit Schwerpunkt Mietrecht, entwickelt mit Python und Streamlit. Sie ermöglicht es den Nutzern, Fragen zu Mietverträgen zu stellen, z. B. zur Vertragslaufzeit, zu Kündigungsbedingungen, zu Kautionsregelungen sowie zu den Pflichten von Mietern und Vermietern. Die Anwendung integriert Natural Language Processing über LangChain und HuggingFace-Modelle, kombiniert mit Pinecone für eine effiziente Dokumentensuche. Rechtstexte und Richtlinien werden mittels PDF-Parsing verarbeitet, sodass der Assistent in Echtzeit präzise, KI-gestützte Erklärungen und Verweise bereitstellen kann. Ziel des Projekts ist es, ein benutzerfreundliches Beratungstool für Mieter und Vermieter anzubieten, das Klarheit und Zugänglichkeit in typischen Mietfragen gewährleistet.",
        cv: "Lebenslauf",
        viewCvLink: "Lebenslauf Online ansehen",
        downloadBtn: "PDF Herunterladen",
         

        
        
    }
};
// ========================================================
//                  GLOBAL VARIABLES
// ========================================================

// Objeto de traducciones (DEBE ESTAR DEFINIDO ANTES - ASUMIDO)
// const translations = { en: {...}, es: {...}, de: {...} };

// Enlaces de proyectos por idioma
const projectLinks = {
    'es': 'index1es.html',  // URL de la página en español
    'en': 'index1en.html',  // URL de la página en inglés
    'de': 'index1de.html'   // URL de la página en alemán
};

// Idioma actual (se establece al cargar la página en DOMContentLoaded)
let currentLang = 'en';

// Referencias a elementos del DOM (mejor obtenerlas una vez si son estáticas)
const imageOverlay = document.getElementById('imageOverlay');
const overlayImageContent = document.getElementById('overlayImageContent');
const navbar = document.querySelector('nav.navbar');
let lastScrollTop = 0;


// ========================================================
//                  HELPER FUNCTIONS
// ========================================================

/**
 * Obtiene una traducción para una clave dada, usando el idioma actual.
 * Proporciona fallbacks a inglés y luego a la propia clave.
 * @param {string} key - La clave de traducción a buscar.
 * @returns {string} La cadena traducida o la clave si no se encuentra.
 */
function getFormTranslation(key) {
    // Accede a la variable global 'currentLang' y al objeto 'translations'
    // Asegúrate de que 'translations' esté definido globalmente.
    if (typeof translations === 'undefined') {
        console.error("ERROR: translations object is not defined!");
        return key; // Retorna la clave si las traducciones no están disponibles
    }
    return translations[currentLang]?.[key]
        || translations['en']?.[key] // Fallback a inglés
        || key;                   // Fallback a la clave misma
}

/**
 * Actualiza los atributos href de los enlaces de proyectos
 * basándose en el idioma actual ('currentLang').
 */
function updateProjectLinks() {
    const link = projectLinks[currentLang] || projectLinks['en']; // Fallback a inglés
    console.log(`Updating project links for lang "${currentLang}" to: ${link}`);

    const projectIds = [ 'project-2', 'project-3', 'project-4']; // IDs a actualizar

    projectIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute('href', link);
        } else {
             // Comentado para evitar ruido en la consola si algunos proyectos no existen siempre
             // console.warn(`Element with ID ${id} not found.`);
        }
    });
}

// ========================================================
//                  CORE LOGIC FUNCTIONS
// ========================================================

/**
 * Cambia el idioma de la interfaz y actualiza todos los elementos dependientes.
 * @param {string} lang - El código del idioma destino ('en', 'es', 'de').
 */
function changeLanguage(lang) {
    console.log(`--- Changing language to: ${lang} ---`);
    currentLang = lang; // Actualiza la variable global
    document.documentElement.lang = lang; // Actualiza el atributo lang del HTML

    const localeMap = { en: 'en-GB', es: 'es-ES', de: 'de-DE' };
    const currentLocale = localeMap[lang] || 'en-GB';
    console.log(`Using locale for dates: ${currentLocale}`);

    // 1. Traducir textos (data-lang-key)
    console.log("1. Translating text elements...");
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        const translation = getFormTranslation(key); // Usa la función helper
        if (key === 'footerCopyright') { // Ejemplo si necesitas innerHTML
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });

    // 2. Traducir placeholders (data-lang-placeholder)
    console.log("2. Translating placeholders...");
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.dataset.langPlaceholder;
        element.placeholder = getFormTranslation(key); // Usa la función helper
    });

    // 3. Formatear fechas (data-date-value)
    console.log("3. Formatting dates...");
    document.querySelectorAll('[data-date-value]').forEach(element => {
        const dateValue = element.dataset.dateValue;
        if (!dateValue) return;
        try {
            const parts = dateValue.split('-');
            if (parts.length !== 3) throw new Error("Invalid date format YYYY-MM-DD");
            // Mes es 0-indexado en Date.UTC
            const dateObject = new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
            if (isNaN(dateObject.getTime())) throw new Error("Invalid date object");
            const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
            const formatter = new Intl.DateTimeFormat(currentLocale, options);
            element.textContent = formatter.format(dateObject);
        } catch (error) {
            console.error(`Error formatting date "${dateValue}":`, error);
            element.textContent = dateValue; // Mostrar valor original en caso de error
        }
    });

    // 4. Actualizar enlaces de proyectos
    console.log("4. Updating project links...");
    updateProjectLinks(); // <-- LLAMADA CORRECTA AQUÍ

    // 5. Update Bootstrap tooltip titles (para tooltips AUTOMÁTICOS si los tienes)
    // NOTA: Si quitaste 'data-bs-toggle="tooltip"' de los botones de copia,
    // esta sección NO afectará a esos botones, lo cual es correcto.
    console.log("5. Updating automatic tooltips (if any)...");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        const titleAttributeKey = `data-bs-title-${lang}`;
        // Usa getFormTranslation si prefieres centralizar, o los atributos data-* como estaba
         const newTitle = tooltipTriggerEl.getAttribute(titleAttributeKey) || tooltipTriggerEl.getAttribute('data-bs-title-en'); // Fallback

        if (newTitle) {
            if (tooltip) {
                tooltip.setContent({ '.tooltip-inner': newTitle });
            } else {
                 // Si no hay instancia, puede que baste con actualizar el title (Bootstrap lo recogerá al inicializar o en hover)
                 tooltipTriggerEl.setAttribute('title', newTitle);
             }
             // Actualizar también el data-bs-original-title es importante para Bootstrap 5.2+
             tooltipTriggerEl.setAttribute('data-bs-original-title', newTitle);
        }
    });

    console.log(`--- Language change to ${lang} complete ---`);
    // Opcional: Guardar preferencia
    // localStorage.setItem('preferredLanguage', lang);
}


/**
 * Copia texto al portapapeles y muestra un tooltip de confirmación localizado.
 * Usa `getFormTranslation` para el mensaje.
 * @param {string} text - El texto a copiar.
 * @param {HTMLElement} button - El botón que activó la copia.
 */
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltipTitle = getFormTranslation('copiedMsg'); // Obtiene texto traducido

        // Desechar tooltip anterior si existe
        const existingTooltip = bootstrap.Tooltip.getInstance(button);
        if (existingTooltip) {
            existingTooltip.dispose();
        }

        // Crear y mostrar nuevo tooltip manual
        const tooltip = new bootstrap.Tooltip(button, {
            title: tooltipTitle,
            trigger: 'manual',
            placement: button.getAttribute('data-bs-placement') || 'top',
        });

        tooltip.show();

        // Ocultar y desechar después de un tiempo
        setTimeout(() => {
            const currentTooltipInstance = bootstrap.Tooltip.getInstance(button);
            if (currentTooltipInstance) {
               currentTooltipInstance.hide();
               button.addEventListener('hidden.bs.tooltip', () => {
                   const finalInstance = bootstrap.Tooltip.getInstance(button);
                   if (finalInstance) finalInstance.dispose();
               }, { once: true });
            }
        }, 1000); // Duración del tooltip: 1 segundo

    }).catch(err => {
        console.error("Error copying to clipboard: ", err);
        const errorMsg = getFormTranslation('copyErrorMsg') || 'Failed to copy!'; // Mensaje de error (traducido opcionalmente)
        const errorTooltip = new bootstrap.Tooltip(button, {
             title: errorMsg,
             trigger: 'manual',
             placement: button.getAttribute('data-bs-placement') || 'top',
             customClass: 'tooltip-danger' // Clase opcional para estilo de error
        });
        errorTooltip.show();
        setTimeout(() => {
            const instance = bootstrap.Tooltip.getInstance(button);
            if (instance) instance.dispose();
        }, 1500);
    });
}

/**
 * Maneja el envío del formulario de contacto, incluyendo validación y feedback al usuario.
 * @param {Event} event - El evento de envío del formulario.
 */
async function handleSubmit(event) {
    event.preventDefault(); // Prevenir envío normal

    const form = event.target;
    const status = document.getElementById('form-status');

    // Validación Bootstrap (o la que uses)
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        // Podrías mostrar un mensaje general aquí si quieres
        // status.innerHTML = getFormTranslation('formValidationError');
        // status.className = 'form-status-message text-danger'; // Asegúrate de definir esta clase CSS
        // status.style.display = 'block';
        return;
    }
    form.classList.add('was-validated'); // Muestra estilos de validación :valid/:invalid

    // Feedback: Enviando...
    status.innerHTML = getFormTranslation('formStatusSending');
    status.className = 'form-status-message text-info'; // Usa clases para estilo
    status.style.display = 'block';

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Éxito
            status.innerHTML = getFormTranslation('formStatusSuccess');
            status.className = 'form-status-message text-success';
            form.reset(); // Limpia el formulario
            form.classList.remove('was-validated'); // Quita clases de validación
        } else {
            // Error del servidor (ej. Formspree)
            status.innerHTML = getFormTranslation('formStatusErrorServer');
            status.className = 'form-status-message text-danger';
        }
    } catch (error) {
        // Error de red
        console.error("Form submission error:", error);
        status.innerHTML = getFormTranslation('formStatusErrorNetwork');
        status.className = 'form-status-message text-danger';
    }

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        if (status) {
            status.innerHTML = '';
            status.style.display = 'none';
            status.className = 'form-status-message'; // Resetear clase
        }
    }, 5000);
}


/**
 * Muestra/oculta la barra de navegación al hacer scroll.
 */
function handleNavbarScroll() {
    if (!navbar) return; // Salir si la navbar no se encontró
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.style.top = "-80px"; // Ajusta este valor si la altura de tu navbar es diferente
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

/**
 * Actualiza el enlace activo en la barra de navegación según la sección visible.
 */
function updateNavbarActiveLink() {
    const sections = document.querySelectorAll('section[id]'); // Solo secciones con ID
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]'); // Solo enlaces internos
    if (navLinks.length === 0) return;

    let currentSectionId = '';
    let minDistance = Infinity;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - (navbar ? navbar.offsetHeight : 60); // Ajuste por altura de navbar
        const distance = Math.abs(window.pageYOffset - sectionTop);

        // Encuentra la sección más cercana a la parte superior de la ventana
        if (distance < minDistance) {
            minDistance = distance;
            // Considera una sección como activa si está razonablemente cerca de la parte superior
            if(window.pageYOffset >= sectionTop - window.innerHeight * 0.3) {
               currentSectionId = section.id;
            }
        }
    });

     // Caso especial: si estamos muy arriba, activa 'home' (si existe)
     if (window.pageYOffset < window.innerHeight * 0.5) {
         const homeLink = document.querySelector('.navbar-nav .nav-link[href="#home"]');
         if (homeLink) currentSectionId = 'home';
     }


    navLinks.forEach(link => {
        link.classList.remove('active');
        // Comprueba si el href del enlace (sin #) coincide con la sección actual
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
}


/**
 * Muestra la imagen en el overlay grande.
 * @param {string} imageSource La ruta de la imagen a mostrar.
 */
function showImage(imageSource) {
    if (imageOverlay && overlayImageContent && imageSource) {
        overlayImageContent.src = imageSource;
        imageOverlay.style.display = 'flex';
    } else {
        console.error("Cannot show image: Overlay elements not found or imageSource missing.");
    }
}

/**
 * Oculta el overlay de la imagen.
 */
function hideOverlayImage() {
    if (imageOverlay) {
        imageOverlay.style.display = 'none';
        overlayImageContent.src = ''; // Limpia src para liberar memoria (opcional)
    }
}


// ========================================================
//             EVENT LISTENERS & INITIALIZATION
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed.");

    // 1. Inicializar Tooltips Automáticos (si los hay)
    //    Asegúrate de que los botones de copia NO tengan 'data-bs-toggle="tooltip"'
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
        // NOTA: No establezcas trigger: 'manual' aquí, eso se maneja en copyToClipboard
    });
    console.log(`Initialized ${tooltipTriggerList.length} automatic tooltips.`);

    // 2. Configurar Validación de Formulario (Bootstrap)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.setAttribute('novalidate', ''); // Prevenir validación HTML5 nativa
        contactForm.addEventListener("submit", function (event) {
            // Este listener solo añade la clase 'was-validated' para estilos
            // La lógica de validación real está en handleSubmit
            if (!contactForm.checkValidity()) {
                // event.preventDefault(); // Prevenido en handleSubmit
                // event.stopPropagation(); // Prevenido en handleSubmit
            }
            contactForm.classList.add("was-validated");
        }, false); // false para que se ejecute antes que handleSubmit si es necesario

        // 3. Añadir Listener para el Envío Asíncrono del Formulario
        contactForm.addEventListener("submit", handleSubmit);
        console.log("Form submit listener added.");

    } else {
        console.warn("Contact form not found.");
    }

    // 4. Añadir Listeners de Scroll para Navbar
    window.addEventListener('scroll', handleNavbarScroll);
    window.addEventListener('scroll', updateNavbarActiveLink); // Llama también al actualizar enlace activo
    console.log("Navbar scroll listeners added.");

    // 5. Ejecutar actualización de Navbar al cargar
    updateNavbarActiveLink();

    // 6. Establecer Idioma Inicial y Aplicarlo
    //    (Ejemplo: leer de localStorage o usar un valor por defecto)
    const initialLang = localStorage.getItem('preferredLanguage') || 'de'; // Cambia 'es' a tu idioma por defecto preferido
    console.log(`Setting initial language to: ${initialLang}`);
    changeLanguage(initialLang); // ¡IMPORTANTE! Llama a changeLanguage al inicio

    // 7. Añadir listener al overlay de imagen para cerrarlo (si existe)
    if (imageOverlay) {
        imageOverlay.addEventListener('click', hideOverlayImage);
        console.log("Image overlay close listener added.");
    }

}); // Fin de DOMContentLoaded