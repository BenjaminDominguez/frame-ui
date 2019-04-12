//Focus state for input forms icons
const inputs = document.querySelectorAll('.focus-input')

inputs.forEach((input) => {
    const icon = input.nextElementSibling;
    input.addEventListener('focus', () => {
        icon.classList.add('focus-icon');
    })
    input.addEventListener('blur', () => {
        icon.classList.remove('focus-icon');
    })
});

//Hamburger navbar

const hamburgerMenuItems = document.querySelector('.nav-hamburger-toggle');
const theHamburger = document.querySelector('.hamburger');
const theWidth = 900;

window.addEventListener('resize', () => {

    let width = document.documentElement.clientWidth;
    if (width < theWidth){
        hamburgerMenuItems.classList.add('nav-hamburger-toggle-hidden');
        theHamburger.classList.remove('hamburger-hidden');
    } else {
        hamburgerMenuItems.classList.remove('nav-hamburger-toggle-hidden');
        theHamburger.classList.add('hamburger-hidden');
    }
})

theHamburger.addEventListener("click", () => {
    let classList = hamburgerMenuItems.classList
    if (classList.contains("nav-hamburger-toggle-hidden")){
        classList.remove('nav-hamburger-toggle-hidden');
    } else {
        classList.add('nav-hamburger-toggle-hidden');
    }
})