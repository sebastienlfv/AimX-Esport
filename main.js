const teamLink = document.querySelector('.team-link')

teamLink.addEventListener('mouseover', () => {
  const teamMenu = document.querySelector('.team-menu')
  teamLink.style.position = 'relative'
  teamMenu.style.width = '210px'
  teamMenu.style.height = '100px'
  teamMenu.style.backgroundColor = 'white'
  teamMenu.style.position = 'absolute'
  teamMenu.style.top = '35px'
  teamMenu.style.zIndex = '99'
  teamMenu.style.display = 'flex'
  teamLink.appendChild(teamMenu)
})

teamLink.addEventListener('mouseout', () => {
  const teamMenu = document.querySelector('.team-menu')
  teamMenu.style.display = 'none'
})