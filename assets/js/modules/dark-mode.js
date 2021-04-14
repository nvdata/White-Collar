export default

function darkMode() {
    const icon = document.querySelector("button.dark__mode")

    if (icon) {
        const lua = icon.querySelector("ion-icon")

        icon.addEventListener("click", changeMode)

        console.log(icon, lua);

        function changeMode() {
            document.body.style.transition = "all .3s ease "
            document.body.classList.toggle("dark__mode")

            console.log("oi");

            if (document.body.classList.contains("dark__mode")) {
                lua.name = "sunny"
            } else {
                lua.name = "moon"

            }
            setTimeout(() => {
                document.body.style.transition = "initial"
            }, 300);

        }
    }
}