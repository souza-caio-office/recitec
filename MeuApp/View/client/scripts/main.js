var menu_enter = document.querySelector('.menu-hamburguer')
var navHover = document.querySelector('.nav-hover');
var links_redirect = document.querySelectorAll('.links-redirect');

links_redirect.forEach(element => {
    element.addEventListener('click', ()=> {
        toggleClass(navHover, 'nav-enter', 'nav-out');    
    })
});
menu_enter.addEventListener('click', () => {
    toggleClass(navHover, 'nav-out', 'nav-enter');

});


function toggleClass(className, classVerify, classAdd) {
    if(className.classList.contains(classVerify)) {
        className.classList.remove(classVerify)
        className.classList.add(classAdd)
    } else {
        className.classList.remove(classAdd)
        className.classList.add(classVerify)
    }
}

