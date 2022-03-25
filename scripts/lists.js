//dynamic exibition service list
const listServices = [
  {title: 'Check-in on-line'},
  {title: 'Emissão de cartões de embarque'},
  {title: 'Preenchimento de Formulários (Imigração)'},
  {title: 'Seguro Viagem'},
  {title: 'Roteiro turístico'}
]

const renderListService = document.querySelector('#render-list')

listServices.map(lista => {
  renderListService.innerHTML += `
    <li>${lista.title}</li>
  `
})

//-----------------------------------------------------------------
// carrousel section destin

const destinationList = [ 
  {
    destination: './images/lisbon.png',
    text: 'Lisboa - Portugal',
    alternative: 'Lisboa - Portugal',
  },
  {
    destination: './images/faro-algarve.png',
    text: 'Faro - Portugal',
    alternative: 'Faro - Portugal',
  },
  {
    destination: './images/porto-portugal.png',
    text: 'Porto - Portugal',
    alternative: 'Porto - Portugal',
  },
  {
    destination: './images/recife.png',
    text: 'Recife - Brasil',
    alternative: 'Recife - Brasil',
  },
  {
    destination: './images/fortaleza.jpg',
    text: 'Fortaleza - Brasil',
    alternative: 'Fortaleza - Brasil',
  },
  {
    destination: './images/rio-de-janeiro.jpg',
    text: 'Rio de Janeiro - Brasil',
    alternative: 'Rio de Janeiro - Brasil',
  },
]

//id identification for generate photo-carrousel only
const carrouselList = document.querySelector('#img')

destinationList.map(item => {
  carrouselList.innerHTML += `
  <div class="box-destin">
      <img src="${item.destination}" alt="${item.alternative}">
      <div class="info-travel">
          <h3>${item.text}</h3>
      </div>
  </div>
  `
})


//selectors to carrousel effect
const imgs = document.querySelector('.container-carrousel')
const img = document.querySelectorAll('.box-destin')

//function to moviment carrousel
let idx = 0

function carrousel() {
  idx++

  if(idx > img.length - 1) {
    idx = 0
  }
  
  imgs.style.transform = `translateX(${-idx * 165}px)`
}

setInterval(carrousel, 2100)


