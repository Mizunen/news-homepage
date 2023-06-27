let menuButton = document.querySelector(".menu-btn");
let mobileNav = document.querySelector(".mobile-nav");
let closeMenuBtn = document.querySelector(".close-btn");
let menuBackdrop = document.querySelector(".backdrop");

function toggleNav (){
    mobileNav.classList.toggle("hide");
    menuBackdrop.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleNav);

closeMenuBtn.addEventListener('click', toggleNav);

menuBackdrop.addEventListener('click', toggleNav);