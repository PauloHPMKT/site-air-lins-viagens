const destinationList = [
    {
        destination: './assents/lisbon.png',
        text: 'Lisboa - Portugal',
    },
    {
        destination: './assents/faro-algarve.png',
        text: 'Faro - Portugal',
    },
    {
        destination: './assents/porto-portugal.png',
        text: 'Porto - Portugal',
    },
    {
        destination: './assents/recife.png',
        text: 'Recife - Brasil',
    },
    {
        destination: './assents/fortaleza.jpg',
        text: 'Fortaleza - Brasil',
    },
    {
        destination: './assents/rio-de-janeiro.jpg',
        text: 'Rio de Janeiro - Brasil',
    },
    
]

//id identification for generate photo-carrousel only
const carrouselList = document.querySelector('#img')

destinationList.map(item => {
    carrouselList.innerHTML += `
    <div class="box-destin">
        <img src="${item.destination}">
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

function carrousel () {
    idx++

    if(idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 165}px)`
}

setInterval(carrousel, 2100);