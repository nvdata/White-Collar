export default

function progressBar() {
    document.addEventListener("scroll",

        function () {
            let footerHeight = document.querySelector(".footer").offsetHeight

            let scrollTop =
                document.documentElement["scrollTop"] || document.body["scrollTop"];
            let scrollBottom =
                (document.documentElement["scrollHeight"] ||
                    document.body["scrollHeight"]) - document.documentElement.clientHeight - footerHeight;

            let scrollPercent = scrollTop / scrollBottom * 100 + "%";
            document
                .getElementById("progress")
                .style.setProperty("--scroll", scrollPercent);
        }, {
            passive: true
        }
    );
}