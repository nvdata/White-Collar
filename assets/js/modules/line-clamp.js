export default

function lineClamp() {
    const buttons = document.querySelectorAll(".p__container .js-more")
    buttons.forEach((i) => {
        i.addEventListener("click", mostrarMais)
    })
    function mostrarMais(e) {
        e.preventDefault()
        const textoAcima = e.target.parentElement.querySelector("p");
        textoAcima.classList.toggle("active")
    }
}