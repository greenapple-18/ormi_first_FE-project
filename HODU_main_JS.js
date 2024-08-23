document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribeButton");
    const emailInput = document.getElementById("emailInput");
    const modal = document.getElementById("modal");
    const modalOkButton = document.getElementById("modalOkButton");

    modalOkButton.addEventListener("click", () => {
        closeModal();
    });

    subscribeButton.addEventListener("click", function () {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        } else if (!emailPattern.test(email)) {
            alert("올바른 이메일 형식으로 입력해주세요.\n(ex. abcd@abcd.abc)");
            return;
        } else {
            modal.style.display = "flex";
            document.body.classList.add("modal-open");
            emailInput.value = "";
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // 스크롤 해제
    }

    const menuButton = document.getElementById("menu_button");
    const sideMenu = document.getElementById("side_menu");

    menuButton.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
    });
});
