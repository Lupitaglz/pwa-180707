const pale = document.querySelector('.pale'),
        menu =document.querySelector('.menu-nav');

pale.addEventListener('click',() => {
    menu.classList.toggle('spread');
})

window.addEventListener('clicl', e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target  != pale){
        menu.classList.toggle('spread');
    }
})