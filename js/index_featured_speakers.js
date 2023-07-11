const speakerList = document.querySelector('.speakers-list');

const featuredSpeakers = [
  {
    name: 'Ellis Scott',
    position: 'Proffessor of Entrepreneurial Legal Studies at Harvard Law School.',
    description: 'Ellis studies commons-based peer production, and published his seminal book The Wealth of Netvmds 2006.',
    picture: '1.jpg',
    mobileDisplay: true,
  },
  {
    name: 'Liam Berry',
    position: 'Liam helped bring the Internet to Asia and is an',
    description: 'outspoken advocate for the open web and digtal commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
    picture: '2.jpg',
    mobileDisplay: true,
  },
  {
    name: 'Ruby Dean',
    position: 'Director of Art Centre Nabi and a board member of CC Korea.',
    description: 'As the main venue for new meda art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    picture: '4.jpg',
    mobileDisplay: false,
  },
  {
    name: 'Eliza Harvey',
    position: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parlament in July.',
    picture: '5.jpg',
    mobileDisplay: false,
  },
  {
    name: 'Eva Knight',
    position: 'Executive Director of the Wikimedia Foundation.',
    description: 'Eva Is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month. ',
    picture: '6.jpg',
    mobileDisplay: false,
  },
  {
    name: 'Finlay Smith',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Finlay had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    picture: '3.jpg',
    mobileDisplay: false,
  },
];

featuredSpeakers.forEach((speaker) => {
  const newSpeaker = document.createElement('div');

  newSpeaker.classList.add('featured-speaker');

  if (!speaker.mobileDisplay) {
    newSpeaker.classList.add('desktop-only', 'hidden-speaker');
  }

  newSpeaker.innerHTML = `
    <div class='featured-speaker__picture'>
      <div class='dark-chess-bg'></div>
      <img src='img/profiles/${speaker.picture}'>
    </div>
    <div class='featured-speaker__info'>
      <h4>${speaker.name}</h4>
      <h5>${speaker.position}</h5>
      <div class='gray-dash'></div>
      <p>${speaker.description}</p>
    </div>
  `;

  speakerList.appendChild(newSpeaker);
});