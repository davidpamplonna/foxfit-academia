document.addEventListener("DOMContentLoaded", () => {
    const menuMobile = document.querySelector(".menu-mobile i");
    const navbar = document.querySelector(".navbar");

    menuMobile.addEventListener("click", () => {
        // Alterna a classe "show" na navbar
        navbar.classList.toggle("show");

        // Verifica e alterna entre os ícones
        if (menuMobile.classList.contains("bx-menu-alt-right")) {
            menuMobile.classList.replace("bx-menu-alt-right", "bx-menu-alt-left"); // Alterna para "X"
        } else {
            menuMobile.classList.replace("bx-menu-alt-left", "bx-menu-alt-right"); // Alterna para "Menu"
        }
    });
});
