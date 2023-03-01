var imagen


function scrollToSection(sectionId) {
    // Obtener la posición de la sección correspondiente
    var section = document.getElementById(sectionId);
    var position = section.offsetTop;

    var navBar = document.getElementsByClassName("navbar")[0];
    var sectionSize = getComputedStyle(navBar).height;
    sectionSize = sectionSize.substring(0, (sectionSize.length - 2));

    console.log("position: " + position + "; sectionSize: " + sectionSize);
    window.scrollTo({
        top: position - sectionSize,
        behavior: "smooth"
    });

    lastSection = sectionId;
}
function agrandarImagen(imagen) {
    var origen = imagen.src;
    var imagenG = document.getElementsByClassName("imagenG");
    var marco = document.getElementsByClassName("marcoG");
    imagenG.src = origen;   
    console.log(imagenG);
    console.log(marco);
    marco.style = "display: grid";
}
