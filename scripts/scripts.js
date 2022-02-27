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

btnCallToAction.forEach(button => button.addEventListener('click', showModalLinks))

function showModalLinks() {
    alert('realizando teste de click')
}