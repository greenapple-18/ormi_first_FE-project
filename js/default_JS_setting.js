document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.getElementById("top-btn");
    const footerElement = document.querySelector("footer");
    const headerElement = document.querySelector("header");
    const allHeaderElements = document.querySelectorAll("header");

    handleScroll();

    function handleScroll() {
        adjustHeaderPosition();
        toggleTopButtonVisibility();
    }

    function adjustHeaderPosition() {
        const headerRect = headerElement.getBoundingClientRect();
        const secondHeaderRect = allHeaderElements[1].getBoundingClientRect();

        if (headerRect.height > secondHeaderRect.bottom) {
            headerElement.style.position = "fixed";
        } else {
            headerElement.style.position = "absolute";
        }
    }

    function toggleTopButtonVisibility() {
        const footerRect = footerElement.getBoundingClientRect();
        const scrollPosition = window.scrollY;

        if (scrollPosition > 300) {
            topButton.style.display = "block";

            if (footerRect.top < window.innerHeight) {
                topButton.style.bottom = `${
                    window.innerHeight - footerRect.top + 19
                }px`;
            } else {
                topButton.style.bottom = "19px";
            }
        } else {
            topButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);

    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const openSideMenuButton = document.getElementById("menu-button");
    const sideMenuElement = document.getElementById("side-menu");
    const closeSideMenuButton = document.getElementById("close-menu-button");

    openSideMenuButton.addEventListener("click", () => {
        openSideMenu();
    });

    closeSideMenuButton.addEventListener("click", () => {
        closeSideMenu();
    });

    document.addEventListener("click", (event) => {
        if (
            !sideMenuElement.contains(event.target) &&
            !openSideMenuButton.contains(event.target)
        ) {
            closeSideMenu();
        }
    });

    function openSideMenu() {
        sideMenuElement.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        sideMenuElement.classList.remove("active");
        document.body.style.overflow = "";
    }
});
