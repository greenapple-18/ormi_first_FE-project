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

    //-----------------------------------------
    const menuButton = document.getElementById("menu_button");
    const sideMenu = document.getElementById("side_menu");
    const closeMenuButton = document.getElementById("close_menu_button");

    // 메뉴 버튼 클릭 시 사이드 메뉴 열기
    menuButton.addEventListener("click", function () {
        sideMenu.classList.add("active");
        document.body.style.overflow = "hidden"; // 메뉴 열렸을 때 스크롤 방지
    });

    // 사이드 메뉴 닫기 버튼 클릭 시 사이드 메뉴 닫기
    closeMenuButton.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        document.body.style.overflow = ""; // 메뉴 닫았을 때 스크롤 복구
    });

    // 사이드 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener("click", function (event) {
        if (
            !sideMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            sideMenu.classList.remove("active");
            document.body.style.overflow = ""; // 메뉴 닫았을 때 스크롤 복구
        }
    });
});
