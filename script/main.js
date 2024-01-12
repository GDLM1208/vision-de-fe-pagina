const images = document.querySelectorAll(".image");
const imageDialog = document.getElementById("imageDialog")
const dialogContent = document.getElementById("dialogContent")

images.forEach((image) => {
    image.addEventListener("click", () => {
        dialogContent.src = image.src
        
        imageDialog.showModal()
    })
})

imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog ) imageDialog.close()
})

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    let position = section.offsetTop;

    let navBar = document.getElementsByClassName("navbar")[0];
    let sectionSize = getComputedStyle(navBar).height;
    sectionSize = sectionSize.substring(0, (sectionSize.length - 2));
    window.scrollTo({
        top: position - sectionSize,
        behavior: "smooth"
    });

    lastSection = sectionId;
}

