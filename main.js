let hamburger = document.querySelector('#hamburger');
let closeMenu = document.querySelector('#close-img');
let mobileMenu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu(){
    mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
})