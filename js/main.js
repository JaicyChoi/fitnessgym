const body = document.querySelector('body');
const nav_bg = document.querySelector('.nav_bg');
const mobile_nav_icon = document.querySelector('.mobile_nav_icon');
const mobile_nav_wapper = document.querySelector('.mobile_nav_wapper');
const close_btn = document.querySelector('.close_btn');
const intro_text = document.querySelector('.intro_text');
const intro_button = document.querySelector('.intro_button');
const section1_textbox_title = document.querySelector('.section1_textbox_title');
const section1_textbox_description = document.querySelector('.section1_textbox_description');
const section1_list_li = document.querySelectorAll('.section1_list li');

mobile_nav_icon.addEventListener('click', () => {
    mobile_nav_wapper.classList.add('show');
    body.classList.add('lock');
});
close_btn.addEventListener('click', () => {
    mobile_nav_wapper.classList.remove('show');
    body.classList.remove('lock');
});

setTimeout(() => {
    intro_text.classList.add('opacity');
}, 2500);
setTimeout(() => {
    intro_button.classList.add('opacity');
}, 3500);

window.addEventListener('scroll', () => {
    if( document.documentElement.scrollTop >= 55 ){
        nav_bg.classList.add('fixed');
    }
    else
        nav_bg.classList.remove('fixed');

    if( document.documentElement.scrollTop >= 300 ){
        section1_textbox_title.classList.add('show_text');
        section1_textbox_description.classList.add('show_text');

        setTimeout(() => {
            section1_textbox_title.classList.add('opacity');
        },1000);
        setTimeout(() => {
            section1_textbox_description.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 650 ){
        section1_list_li[0].classList.add('show_text');
        section1_list_li[1].classList.add('show_text');
        section1_list_li[2].classList.add('show_text');

        setTimeout(() => {
            section1_list_li[0].classList.add('opacity');
        },1000);
        setTimeout(() => {
            section1_list_li[1].classList.add('opacity');
        },1500);
        setTimeout(() => {
            section1_list_li[2].classList.add('opacity');
        },2000);
    }
    if( document.documentElement.scrollTop >= 1200 ){

    }
});