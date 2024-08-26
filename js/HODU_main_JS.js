document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.getElementById("subscribe-button");
    const emailInput = document.getElementById("email-input");
    const modal = document.getElementById("modal");
    const modalOkButton = document.getElementById("modal-ok-button");
    const menuButton = document.getElementById("menu-button");
    const sideMenu = document.getElementById("side-menu");

    subscribeButton.addEventListener("click", clickSubscribe);
    modalOkButton.addEventListener("click", closeModal);
    window.addEventListener("click", clickOutside);
    window.addEventListener("keydown", keydown);
    menuButton.addEventListener("click", toggleSideMenu);

    function clickSubscribe() {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("올바른 이메일 형식으로 입력해주세요.\n(ex. abcd@abcd.abc)");
            return;
        }

        openModal();
        emailInput.value = "";
    }

    function openModal() {
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    function clickOutside(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    function keydown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    function toggleSideMenu() {
        sideMenu.classList.toggle("active");
    }
});
