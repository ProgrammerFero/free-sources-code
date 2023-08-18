let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const t = document.querySelector('title') , w = 'Programmer Fero' , r = 'Programmer' ;
let c = 0;
setInterval(() => {
    c = (c < w.length) ? c + 1 : 0;
    t.textContent = w.slice(0, c);
    if (c === w.length) setTimeout(() => t.textContent += ' Programmer Fero' , 500);
} , 500 );



const currentTitle = document.title;

window.addEventListener("blur" , () => {
    document.title = "Come Back";
});

window.addEventListener("focus" , () => {
    document.title = currentTitle;
});