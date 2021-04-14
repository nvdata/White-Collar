export

function darkMode() {
    const icon = document.querySelector("button.dark__mode")
    const body = document.body
    if (icon) {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
            body.classList.add("dark__mode")


        const lua = icon.querySelector("ion-icon")

        icon.addEventListener("click", changeMode)

        function changeMode() {
            body.style.transition = "all .3s ease"
            body.classList.toggle("dark__mode")

            if (body.classList.contains("dark__mode")) {
                lua.name = "sunny"
            } else {
                lua.name = "moon"

            }

            setTimeout(() => {
                body.style.transition = "initial"
            }, 300);

        }
    }
}
export

function escondeIcon() {

    window.onscroll = function (e) {
        let posicao = this.oldScroll > this.scrollY
        this.oldScroll = this.scrollY;
        if (posicao) {
            document.body.classList.add("subiu")
            document.body.classList.remove("desceu")

        } else {
            document.body.classList.remove("subiu")
            document.body.classList.add("desceu")


        }

    }

}