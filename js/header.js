const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");

btnSub.addEventListener("click", () => {
    if (header.className === "header") {
        body.classList.add("fixed");
        header.classList.add("responsive");
    } else {
        header.classList.remove("responsive");
        body.classList.remove("fixed");
    }
})

navLinks.addEventListener("click", () => {
    body.classList.remove("fixed");
    header.classList.remove("responsive");
})