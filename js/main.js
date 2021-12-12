const body = document.querySelector('body');
const nav_bg = document.querySelector('.nav_bg');
const mobile_nav_icon = document.querySelector('.mobile_nav_icon');
const mobile_nav_wapper = document.querySelector('.mobile_nav_wapper');
const close_btn = document.querySelector('.close_btn');

mobile_nav_icon.addEventListener('click', () => {
    mobile_nav_wapper.classList.add('show');
    body.classList.add('lock');
});
close_btn.addEventListener('click', () => {
    mobile_nav_wapper.classList.remove('show');
    body.classList.remove('lock');
});

window.addEventListener('scroll', () => {
    if( document.documentElement.scrollTop >= 55 ){
        nav_bg.classList.add('fixed');
    }
    else
        nav_bg.classList.remove('fixed');
});