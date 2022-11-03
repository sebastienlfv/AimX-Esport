const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')

burgerButton.addEventListener('click', () => {
  if(burgerMenu.style.display == 'none') {
    burgerMenu.style.display = 'block'
  } else {
    burgerMenu.style.display = 'none'
  }
})