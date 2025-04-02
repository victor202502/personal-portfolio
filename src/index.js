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
        aboutDescription: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
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
    },
    es: {
         // --- Existing Keys ---
        home: "Inicio", about: "Acerca de", resume: "Currículum", jobexperience: "Experiencia laboral", skills: "Habilidades", projects: "Proyectos", blog: "Mi Blog", contact: "Contacto",contact1:"Formulario de contacto", language: "Idioma", hello: "Hola, soy Víctor Salgado", homeDescription: "Actualmente estoy buscando una pasantía para completar mi formación como Fachinformatiker Anwendungsentwicklung...", looking: "¡Buscando nuevas oportunidades!", homeDescription2: "Si estás buscando a alguien con pasión por la programación, compromiso y ganas de aprender, ¡me encantaría formar parte de tu equipo! Estoy listo para contribuir y seguir desarrollando mis habilidades.", aboutMe: "Acerca de mí", aboutDescription: "Un pequeño río llamado Duden fluye por su lugar y le proporciona el regelialia necesario.", nameLabel: "Nombre:", dobLabel: "Fecha de nacimiento:", addressLabel: "Dirección:", zipcodeLabel: "Código postal:", emailLabel: "Correo electrónico:", phoneLabel: "Teléfono:", address: "Dirección", phone: "Teléfono", email: "Correo electrónico", linkedin: "LinkedIn", keyTasks: "Tareas clave:",
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
    },
    de: {
         // --- Existing Keys ---
        home: "Startseite", about: "Über Mich", resume: "Lebenslauf", jobexperience: "Berufserfahrung", skills: "Fähigkeiten", projects: "Projekte", blog: "Mein Blog", contact: "Kontakt", contact1:"Kontaktformular", language: "Sprache", hello: "Hallo, ich bin Víctor Salgado", homeDescription: "Ich suche derzeit ein Praktikum, um meine Ausbildung zum Fachinformatiker Anwendungsentwicklung abzuschließen...", looking: "Auf der Suche nach neuen Möglichkeiten!", homeDescription2: "Wenn Sie jemanden mit Leidenschaft für die Programmierung, Engagement und Lernbereitschaft suchen, würde ich gerne Teil Ihres Teams sein! Ich bin bereit, einen Beitrag zu leisten und meine Fähigkeiten weiterzuentwickeln.", aboutMe: "Über Mich", aboutDescription: "Ein kleiner Fluss namens Duden fließt an ihrem Ort vorbei und versorgt ihn mit dem notwendigen Regelialien.", nameLabel: "Name:", dobLabel: "Geburtsdatum:", addressLabel: "Adresse:", zipcodeLabel: "Postleitzahl:", emailLabel: "E-Mail:", phoneLabel: "Telefon:", address: "Adresse", phone: "Telefon", email: "E-Mail", linkedin: "LinkedIn", keyTasks: "Schlüsselaufgaben:",
        // Resume section...
        resumeTitleIT: "Fachinformatiker", resumeDescIT: "In Ausbildung zum Fachinformatiker mit Schwerpunkt Anwendungsentwicklung.", resumeTitleCodecademy: "Codecademy", resumeDescCodecademyFS: "• Full-Stack Engineer Pfad: Grundlagen und fortgeschrittene Fähigkeiten in der Webentwicklung.", resumeDescCodecademyJava: "• Java lernen: Einführung in die Java-Programmierung mit Zertifikat.", resumeTitleSecurity: "Sicherheitsfachkraft Kurs", resumeDescSecurity: "Academia Foris – Ausbildungskurs zur Sicherheitsfachkraft.", resumeTitleMechatronics: "Ausbildung zum KFZ-Mechatroniker", resumeDescMechatronics: "I.E.S. Universidad Laboral – Berufsausbildung zum KFZ-Mechaniker.",
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
    }
};
let currentLang = 'en'; 
function changeLanguage(lang) {
    console.log(`--- Changing language to: ${lang} ---`); // Log para depuración
    currentLang = lang; 
    console.log(currentLang)
    // Mapa de idiomas a locales para Intl (Necesario para las fechas)
    const localeMap = {
        en: 'en-GB', // Inglés Británico para formato DD Month YYYY
        es: 'es-ES', // Español de España
        de: 'de-DE'  // Alemán de Alemania
    };
    const currentLocale = localeMap[lang] || 'en-GB'; // Usa inglés como fallback
    console.log(`Using locale for dates: ${currentLocale}`);

    // 1. Translate elements with data-lang-key
    console.log("1. Translating text elements...");
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    elementsToTranslate.forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang] && translations[lang][key] !== undefined) {
            const translation = translations[lang][key];
            if (key === 'footerCopyright') {
                element.innerHTML = translation; // Necesario para ©
            } else {
                element.textContent = translation; // Seguro para la mayoría
            }
        } else {
           // console.warn(`Translation key "${key}" not found for language "${lang}" in element:`, element);
        }
    });

    // 2. Translate placeholders with data-lang-placeholder
    console.log("2. Translating placeholders...");
    const elementsWithPlaceholder = document.querySelectorAll('[data-lang-placeholder]');
    elementsWithPlaceholder.forEach(element => {
        const key = element.dataset.langPlaceholder;
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.placeholder = translations[lang][key];
        } else {
           // console.warn(`Placeholder translation key "${key}" not found for language "${lang}" in element:`, element);
        }
    });

    // ===> 3. Formatear fechas con data-date-value (NUEVA SECCIÓN) <===
    console.log("3. Formatting dates...");
    const dateElements = document.querySelectorAll('[data-date-value]');
    console.log(`Found ${dateElements.length} elements with data-date-value.`);

    dateElements.forEach((element, index) => {
        const dateValue = element.dataset.dateValue; // Obtiene "YYYY-MM-DD"
        console.log(`Processing date element #${index + 1}: Value="${dateValue}"`, element);

        if (!dateValue) {
            console.warn(`Element #${index + 1} has data-date-value but it's empty.`);
            return; // Saltar si el valor está vacío
        }

        try {
            // Crear objeto Date usando UTC para evitar problemas de zona horaria
            const parts = dateValue.split('-');
            if (parts.length !== 3) {
                throw new Error("Invalid date format in data-date-value. Expected YYYY-MM-DD.");
            }
            // El mes es 0-indexado en Date.UTC(year, monthIndex, day)
            const dateObject = new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
            console.log(`Created Date object for element #${index + 1}:`, dateObject);

            // Verificar si la fecha es válida
            if (isNaN(dateObject.getTime())) {
                throw new Error("Created date object is invalid.");
            }

            // Opciones de formato
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                // timeZone: 'UTC' // Asegura que el formato use UTC
            };

            // Crear formateador y formatear
            const formatter = new Intl.DateTimeFormat(currentLocale, options);
            const formattedDate = formatter.format(dateObject);
            console.log(`Formatted date for element #${index + 1} (${currentLocale}): "${formattedDate}"`);

            element.textContent = formattedDate; // Actualizar el texto del span

        } catch (error) {
            console.error(`Error formatting date "${dateValue}" for element #${index + 1}:`, element, error);
            // Mantener el texto original o mostrar error
        }
    });
    // ===> FIN DE LA NUEVA SECCIÓN <===


////////////////////////////////////////////////////////////////////////////////////////////////////



 
var projectLinks = {
    'es': 'index1es.html',  // URL de la página en español
    'en': 'index1en.html',  // URL de la página en inglés
    'de': 'index1de.html'   // URL de la página en alemán
};

// Función para actualizar los enlaces según el idioma actual
function updateProjectLinks() {
    var link = projectLinks[currentLang];
    console.log(`Updating project links to: ${link}`);

    // Verificar si los elementos con los id existen
    let element = document.getElementById('project-1');
    if (element) {
        element.setAttribute('href', link);
    } else {
        console.warn('Element with ID project-1 not found.');
    }

    element = document.getElementById('project-2');
    if (element) {
        element.setAttribute('href', link);
    } else {
        console.warn('Element with ID project-2 not found.');
    }

    element = document.getElementById('project-3');
    if (element) {
        element.setAttribute('href', link);
    } else {
        console.warn('Element with ID project-3 not found.');
    }

    element = document.getElementById('project-4');
    if (element) {
        element.setAttribute('href', link);
    } else {
        console.warn('Element with ID project-4 not found.');
    }
}
updateProjectLinks()





/////////////////////////////////////////////////////////////////////////////////////////

    // 4. Update Bootstrap tooltip titles (código existente que funciona)
    console.log("4. Updating tooltips...");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        const titleAttributeKey = `data-bs-title-${lang}`;
        const newTitle = tooltipTriggerEl.getAttribute(titleAttributeKey);

        if (newTitle) { // Solo actualiza si hay un título específico para este idioma
            if (tooltip) {
                tooltip.setContent({ '.tooltip-inner': newTitle });
            } else {
                tooltipTriggerEl.setAttribute('title', newTitle);
            }
            tooltipTriggerEl.setAttribute('data-bs-original-title', newTitle);
        }
    });

    console.log(`--- Language change to ${lang} complete ---`);
    // Store language preference if needed
    // localStorage.setItem('language', lang);
}

// --- Código de Soporte (Asegúrate de que sigue presente) ---





// Inicialización de Tooltips (fuera de changeLanguage)
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded. Initializing tooltips...");
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    console.log(`Initialized ${tooltipList.length} tooltips.`);

    // Opcional: Establecer idioma inicial
    // const initialLang = localStorage.getItem('language') || 'en';
    // changeLanguage(initialLang);
});

// Función copyToClipboard (definida)
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard:', text);
        const tooltip = bootstrap.Tooltip.getInstance(buttonElement);
        if (tooltip) {
            tooltip.show();
            setTimeout(() => { tooltip.hide(); }, 1500);
        }
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// --- Cómo usarlo ---
// Llama a changeLanguage('es'), changeLanguage('de'), etc., cuando sea necesario.
// Asegúrate de que el HTML para la fecha sea:
// <li>
//    <strong><span data-lang-key="dobLabel">...</span></strong>
//    <span data-date-value="1989-01-15">January 15, 1989</span>
// </li>

let navbar = document.querySelector('nav.navbar');
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.style.top = "-60px"; // Desaparece al hacer scroll hacia abajo
    } else {
        navbar.style.top = "0"; // Aparece al hacer scroll hacia arriba
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar que el valor sea negativo
});

// Función para cambiar la clase active en la navbar
// Función para cambiar la clase active en la navbar
function updateNavbar() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id; // Guardar la sección visible
        }
    });

    // Eliminar la clase active de todos los enlaces
    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
            link.classList.remove('active');
        }
    });

    // Añadir la clase active al enlace correspondiente
    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown-toggle') && link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Agregar el evento de scroll
window.addEventListener('scroll', updateNavbar);

// Ejecutar la función una vez al cargar la página para establecer la clase active correctamente
document.addEventListener('DOMContentLoaded', updateNavbar);


/*function showImage(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    var modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
}*/

// Obtener referencias a los elementos del overlay (mejor hacerlo una vez fuera)
const imageOverlay = document.getElementById('imageOverlay');
const overlayImageContent = document.getElementById('overlayImageContent');

/**
 * Muestra la imagen en el overlay grande.
 * Esta función REEMPLAZA tu showImage() existente.
 * @param {string} imageSource La ruta de la imagen a mostrar.
 */
function showImage(imageSource) {
  if (imageOverlay && overlayImageContent && imageSource) {
    console.log("Mostrando imagen:", imageSource); // Para depurar
    overlayImageContent.src = imageSource; // Pone la imagen correcta en el <img> del overlay
    imageOverlay.style.display = 'flex'; // Muestra el overlay (usamos flex para centrar)
  } else {
    console.error("Error: No se encontró el overlay o la fuente de la imagen.");
  }
}

/**
 * Oculta el overlay de la imagen.
 * Se llama al hacer clic en el fondo del overlay o en el botón de cierre.
 */
function hideOverlayImage() {
  if (imageOverlay) {
    imageOverlay.style.display = 'none'; // Oculta el overlay
    overlayImageContent.src = ''; // Limpia la imagen (opcional, pero bueno)
    console.log("Overlay oculto."); // Para depurar
  }
}


// Función para copiar al portapapeles
function copyToClipboard(text, button) {
    // Copiar al portapapeles
    navigator.clipboard.writeText(text).then(() => {
        // Crear y mostrar tooltip manualmente
        const tooltip = new bootstrap.Tooltip(button, {
            trigger: 'manual',
            title: 'Copied to clipboard!'
        });

        // Mostrar el tooltip al hacer clic
        tooltip.show();
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            tooltip.hide();
        }, 1000);
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

// Inicialización de todos los tooltips cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        // Desactivar el trigger por defecto (hover)
        const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: 'manual' // Solo mostrar el tooltip manualmente
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});


function getFormTranslation(key) {
    // Accede a la variable global 'currentLang' y al objeto 'translations'
    // Proporciona un fallback al inglés y luego a la propia clave si no se encuentra
    return translations[currentLang]?.[key] || translations['en']?.[key] || key;
  }


  async function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target; // Más corto que document.getElementById('contact-form')
    const status = document.getElementById('form-status');
  
    // --- VALIDACIÓN ANTES DE ENVIAR ---
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      // Opcional: Mostrar mensaje de error general usando la clave
      // status.innerHTML = getFormTranslation('formValidationError');
      // status.style.display = 'block';
      // status.classList.add('text-danger');
      return;
    }
    form.classList.add('was-validated'); // Para estilos 'is-valid' si los usas
  
    // --- ENVÍO CON FETCH ---
    const formData = new FormData(form);
  
    // Usa la clave de traducción para "Enviando..."
    status.innerHTML = getFormTranslation('formStatusSending');
    status.style.display = 'block';
    status.classList.remove('text-danger', 'text-success');
  
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        // Usa la clave de traducción para "Éxito"
        status.innerHTML = getFormTranslation('formStatusSuccess');
        status.classList.remove('text-danger');
        status.classList.add('text-success');
  
        form.reset();
        form.classList.remove('was-validated');
  
        const formElements = form.querySelectorAll('.form-control');
        formElements.forEach(element => {
          element.classList.remove('is-invalid');
          element.classList.remove('is-valid');
        });
  
      } else {
        // Error del servidor (Formspree) - Usa clave genérica
        // Nota: Decidimos no intentar traducir los errores específicos de Formspree
        status.innerHTML = getFormTranslation('formStatusErrorServer');
        status.classList.remove('text-success');
        status.classList.add('text-danger');
        // No necesitas el response.json().then(...) si usas el mensaje genérico
      }
    } catch (error) {
      // Error de red - Usa clave específica
      status.innerHTML = getFormTranslation('formStatusErrorNetwork');
      status.classList.remove('text-success');
      status.classList.add('text-danger');
    }
  
    setTimeout(() => {
        // Comprueba si el elemento 'status' todavía existe (buena práctica)
        if (status) {
          status.innerHTML = ''; // Borra el texto del mensaje
          status.style.display = 'none'; // Oculta el párrafo (para que no ocupe espacio)
          // Opcional: También quita las clases por si acaso
          status.classList.remove('text-success', 'text-danger');
        }
      }, 5000);
      // --- FIN: CÓDIGO PARA OCULTAR MENSAJE ---
  }
  
  // Asegúrate de que el listener se añade después de que el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
     const form = document.getElementById('contact-form');
     if (form) {
        form.addEventListener("submit", handleSubmit);
     }
     // Aquí también deberías establecer el idioma inicial al cargar la página
     // const initialLang = localStorage.getItem('language') || 'es'; // O tu lógica actual
     // changeLanguage(initialLang); // Llama a changeLanguage al inicio
  });










 