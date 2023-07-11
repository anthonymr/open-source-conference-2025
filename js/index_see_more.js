const hiddenFeaturedSpeakers = document.querySelectorAll('.hidden-speaker');
const showMoreButton = document.querySelector('.show-more');

showMoreButton.addEventListener('click', () => {
  hiddenFeaturedSpeakers.forEach((speaker) => {
    speaker.classList.remove('desktop-only');
  });

  showMoreButton.classList.add('hidden');
});