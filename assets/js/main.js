// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");

//     hamburger.addEventListener("click", mobileMenu);

//     function mobileMenu() {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nav-toggle').addEventListener('change', function() {
        if (this.checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
});