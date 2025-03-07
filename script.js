const mobileMenu = document.getElementById('mobile-menu');
const btnToggle = document.getElementById('btn-toggle');

btnToggle.onclick = function () {
    mobileMenu.classList.toggle('active');
}