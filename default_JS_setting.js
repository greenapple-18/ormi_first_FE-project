document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("top_btn");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");
    const headerAll = document.querySelectorAll("header");
    handleScroll();

    function handleScroll() {
        const footerArea = footer.getBoundingClientRect();
        const headerArea = header.getBoundingClientRect();
        const headerSecondArea = headerAll[1].getBoundingClientRect();
        const scroll = window.scrollY;

        if (headerArea.height > headerSecondArea.bottom) {
            header.style.position = "fixed";
            header.style.transform = "translateY(0)";
            header.style.transition = "ransform 0.3s ease";
        } else {
            header.style.position = "absolute";
        }

        // else if (scroll < headerArea.bottom) {
        //     header.style.top = `${scroll - headerArea.height}px`;
        //     header.style.transform = "translateY(0)";
        // }

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
