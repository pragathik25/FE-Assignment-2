const headerElement = document.querySelector(".header");
const navbarMenuElement = document.querySelector(".navbar-menu");
const logoContainerElement = document.querySelector(".logo-container");
const hamburgerElement = document.querySelector(".hamburger");

hamburgerElement.addEventListener("click", function () {
    this.classList.toggle("active");
    navbarMenuElement.classList.toggle("active");
    logoContainerElement.classList.toggle("hide");
    headerElement.classList.toggle("active");
});

const dropdownItemElements = document.querySelectorAll(".navbar-dropdown-item");

dropdownItemElements.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.toggle("open");
        const dropdownMenu = this.querySelector(".navbar-dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("show");
        }
    });
});
