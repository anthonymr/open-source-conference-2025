const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

const projectWrapper = document.querySelector('#works-wrapper');

const projects = [
  {
    id: 1,
    name: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'tonic1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'multi-post1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'tonic2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'multi-post2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: '#',
    source: '#',
  },
];

projects.forEach(project => {
  const article = document.createElement('article');
  article.classList.add('work-card');

  let technologies = project.technologies.reduce((acc, cur) => acc += '<li class="tag">' + cur + '</li>', '');
  let buttonId = 'see-project-' + project.id;

  article.innerHTML = `
  <div class="work-card_picture">
    <img src="img/posts/${project.featuredImage}" alt="Tonic" />
  </div>
  <div class="work-card_elements">
    <h3 class="work-card_title">${project.name}</h3>
    <div class="work-card_specs">
      <div class="specs_client">${project.company}</div>
      <div class="dot"></div>
      <div class="specs_role">${project.position}</div>
      <div class="dot"></div>
      <div class="specs_year">${project.year}</div>
    </div>
    <p class="work-card_description">${project.shortDescription}</p>
    <ul class="work-card_techs">
      ${technologies}
    </ul>
    <button class="work-card_button" id="${buttonId}">See Project</button>
  </div>
  `;

  projectWrapper.appendChild(article);
});

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

