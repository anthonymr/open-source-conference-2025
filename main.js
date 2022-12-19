const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});