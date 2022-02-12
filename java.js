const menu = document.querySelector('.liste-nav');
const btnmenu = document.querySelector('.hamburger');


btnmenu.addEventListener('click',function() {
    menu.classList.toggle('active-menu')
})