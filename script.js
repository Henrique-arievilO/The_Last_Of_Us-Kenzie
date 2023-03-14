const episodes = [
  {
    img: './img/episodes/episode01.svg',
    title: "When You're Lost in the Darkness",
    description:
      'In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by a soldier.'
  },
  {
    img: './img/episodes/episode02.svg',
    title: 'Infected',
    description:
      'Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.'
  },
  {
    img: './img/episodes/episode03.svg',
    title: 'Long, Long Time',
    description:
      "Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic."
  },
  {
    img: './img/episodes/episode04.svg',
    title: 'Please Hold to My Hand',
    description:
      'Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.'
  },
  {
    img: './img/episodes/episode01.svg',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores labore voluptatum harum ex optio esse, rerum temporibus facere sint.'
  },
  {
    img: './img/episodes/episode02.svg',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores labore voluptatum harum ex optio esse, rerum temporibus facere sint.'
  },
  {
    img: './img/episodes/episode03.svg',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores labore voluptatum harum ex optio esse, rerum temporibus facere sint.'
  },
  {
    img: './img/episodes/episode04.svg',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores labore voluptatum harum ex optio esse, rerum temporibus facere sint.'
  }
]

// Acessar a lista de items através do DOM
const list = document.querySelector('.epidodesList')

// Criar uma função para percorrer todos os itens do array
function addCard (episodes) {
  for (let i = 0; i < episodes.length; i++) {
    // Criar uma função para renderizar cada episódio
    renderCard(episodes[i])
  }
}

addCard(episodes)

function renderCard (episodes) {
  const listItem = document.createElement('li')
  listItem.classList.add('card')

  listItem.innerHTML = `
    <img src=${episodes.img} alt=${episodes.title}>
    <div class="cardText">
        <h4 class="font3-XS">${episodes.title}</h4>
        <p class="font3-XS">${episodes.description}</p>
    </div>
    `

  list?.appendChild(listItem)
}
