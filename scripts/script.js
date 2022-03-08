//defining year website
const year = document.querySelector('#year')

const currentYear = new Date()
year.innerHTML = currentYear.getFullYear()

//---------------------------------------------------------

// evento slidown menu header ---------------------------

const header = document.querySelector('.header')
const logo = document.querySelector('.header img')

console.log(navbar)

window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        header.classList.add('menuColorized')
    } else {
        header.classList.remove('menuColorized')
    }    

})  

//----------------------------------------------------

// evento para scroll suave ---------------------------

const menuHeader = document.querySelectorAll('nav a[href^="#"]')


menuHeader.forEach(item => item.addEventListener('click', scrollOnClick))

function scrollOnClick(e) {
    e.preventDefault()
    const element = e.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop

    window.scroll({
        top: section -80,
        behavior: 'smooth',
    })
}

//--------------------------------------------------------

// evento para btn menu mobile ---------------------------

const menuHamb = document.querySelector('#menu-bars')
const menuCover = document.querySelector('#cover-menu')
const menuClose = document.querySelector('#btn-close')


menuHamb.addEventListener('click', handleMenuOnClick)
menuCover.addEventListener('click', rideMenuOnClick)

function handleMenuOnClick() {
    let open = false

    if(!open) {
        open = true 
        menuCover.classList.add('open')   
    } else {
        open = false 
        rideMenuOnClick()
    }
}

function rideMenuOnClick() {
        menuCover.classList.remove('open')
}

//----------------------------------------------------

// evento para modal link ---------------------------

const btnCallToAction = document.querySelectorAll('.btn-call-to-action')
const boxWindow = document.querySelector('.box-link')
const btnCloseModal = document.querySelector('#btn-close-modal')

btnCallToAction.forEach(button => button.addEventListener('click', showModalLinks))
btnCloseModal.addEventListener('click', removeModalLinks)

function showModalLinks() {
    boxWindow.classList.add('open-modal')
}

function removeModalLinks() {
    boxWindow.classList.remove('open-modal')
}