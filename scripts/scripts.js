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
/*console.log(menuHamb)

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
}*/