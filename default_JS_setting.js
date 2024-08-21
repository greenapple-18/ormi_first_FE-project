document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("top_btn");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");

    handleScroll();

    function handleScroll() {
        const footerArea = footer.getBoundingClientRect();
        const scroll = window.scrollY;

        if (scroll > 0) {
            header.style.position = "fixed";
        } else {
            header.style.position = "static";
        }

        if (scroll > 300) {
            topBtn.style.display = "block";

            if (footerArea.top < window.innerHeight) {
                topBtn.style.bottom = `${
                    window.innerHeight - footerArea.top + 19
                }px`;
            } else {
                topBtn.style.bottom = "19px";
            }
        } else {
            topBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
