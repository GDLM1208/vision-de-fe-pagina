window.onload = function() {
    var mision = document.getElementById("etiqMision");;
    var vision = document.getElementById("etiqVision");;
    var horarios = document.getElementById("etiqHorarios")
    var misionSection = document.getElementById("mision");
    var visionSection = document.getElementById("vision");
    var horariosSection = document.getElementById("horarios");
    
    mision.onclick = moverSeccion(misionSection.getBoundingClientRect().top);
    vision.onclick = moverSeccion(visionSection.getBoundingClientRect().top);
    horarios.onclick = moverSeccion(horariosSection.getBoundingClientRect().top);

    function moverSeccion(position) {
        console.log(position);
        window.scrollTo({
            top: position - 225,
            behavior: "smooth"
        });
    };
};

