const hamburguerIcon = document.querySelector('.hamburguer-menu-icon');
const floatingMenu = document.querySelector('.floating-menu');
const body = document.querySelector('body');

hamburguerIcon.addEventListener('click', () => {
  window.scrollTo(0, 0);
  body.classList.toggle('no-scroll');
  hamburguerIcon.classList.toggle('active-menu');
  floatingMenu.classList.toggle('show-menu');
});