var lastSection = null;

function scrollToSection(sectionId) {
    if (lastSection === sectionId) {
        return;
    }
    // Obtener la posición de la sección correspondiente
    var section = document.getElementById(sectionId);
    var position = section.offsetTop;
    var sectionSize;

    switch (sectionId) {
        case "vision":
            sectionSize = 125;
            break;
        case "horarios":
            sectionSize = 200;
            break;
        default:
            sectionSize = 0;
    }
    console.log("position: " + position + "; sectionSize: " + sectionSize);
    window.scrollTo({
        top: position - sectionSize,
        behavior: "smooth"
    });

    lastSection = sectionId;
}
