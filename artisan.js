const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')
const dashBoard = document.querySelector('.dashboards')

openMenu.addEventListener('click', ()=>{
    dashBoard.classList.add('dashboards_show')
})

closeMenu.addEventListener('click', ()=>{
    dashBoard.classList.remove('dashboards_show')
})