var lastSection = null;

function scrollToSection(sectionId) {
    if (lastSection === sectionId) {
        return;
    }
    // Obtener la posición de la sección correspondiente
    var section = document.getElementById(sectionId);
    var position = section.getBoundingClientRect().top;
    var sectionSize;


    window.scrollTo({
        top: position - 100,
        behavior: "smooth"
    });

    lastSection = sectionId;
}