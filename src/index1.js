document.getElementById("language-selector").addEventListener("change", function(event) {
    var lang = event.target.value;

    var title = document.getElementById("title");
    var leadText = document.getElementById("lead-text");
    var thankYou = document.getElementById("thank-you");

    if (lang === "es") {
        title.innerHTML = "¡Estamos trabajando en ello!";
        leadText.innerHTML = "Nuestro sitio web está en construcción. Agradecemos su paciencia.";
        thankYou.innerHTML = "¡Gracias por visitarnos! Vuelve pronto.";
    } else if (lang === "de") {
        title.innerHTML = "Wir arbeiten daran!";
        leadText.innerHTML = "Unsere Website ist derzeit in Arbeit. Wir schätzen Ihre Geduld und Ihr Verständnis.";
        thankYou.innerHTML = "Danke für Ihren Besuch! Schauen Sie bald wieder vorbei.";
    } else {
        // Default to English
        title.innerHTML = "We're Working on It!";
        leadText.innerHTML = "Our website is currently under construction. We appreciate your patience and understanding.";
        thankYou.innerHTML = "Thank you for visiting! Please check back soon.";
    }
});
