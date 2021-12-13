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
const section2_textobx_title = document.querySelector('.section2_textobx_title');
const section2_textbox_description = document.querySelector('.section2_textbox_description');
const section2_list_li = document.querySelectorAll('.section2_list>li');
const section3_textbox_title = document.querySelector('.section3_textbox_title');
const section3_textbox_description = document.querySelector('.section3_textbox_description');
const section3_textbox_list = document.querySelector('.section3_textbox_list');
const section3_icon_list_li = document.querySelectorAll('.section3_icon_list>li');
const section3_textbox2_description = document.querySelector('.section3_textbox2_description');
const section3_textbox2_name = document.querySelector('.section3_textbox2_name');
const section4_textbox1_title = document.querySelector('.section4_textbox1_title');
const section4_textbox1_description = document.querySelector('.section4_textbox1_description');
const section4_textbox2_title = document.querySelector('.section4_textbox2_title');
const section4_textbox2_description = document.querySelector('.section4_textbox2_description');
const section4_textbox2_btn = document.querySelector('.section4_textbox2_btn');

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
        section2_textobx_title.classList.add('show_text');
        section2_textbox_description.classList.add('show_text');

        setTimeout(()=>{
            section2_textobx_title.classList.add('opacity');
        } ,1000);
        setTimeout(()=>{
            section2_textbox_description.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 1500 ){
        for( i = 0 ; i < section2_list_li.length; i++ ){
            section2_list_li[i].classList.add('show_list');
        }

        setTimeout(()=>{
            section2_list_li[0].classList.add('opacity');
        },1000);
        setTimeout(()=>{
            section2_list_li[1].classList.add('opacity');
        },1500);
        setTimeout(()=>{
            section2_list_li[2].classList.add('opacity');
        },2000);
        setTimeout(()=>{
            section2_list_li[3].classList.add('opacity');
        },2500);
        setTimeout(()=>{
            section2_list_li[4].classList.add('opacity');
        },3000);
        setTimeout(()=>{
            section2_list_li[5].classList.add('opacity');
        },3500);
    }
    if( document.documentElement.scrollTop >= 2600 ){
        section3_textbox_title.classList.add('show_text');
        section3_textbox_description.classList.add('show_text');
        section3_textbox_list.classList.add('show_text');
        section3_icon_list_li[0].classList.add('show_text');
        section3_icon_list_li[1].classList.add('show_text');
        section3_icon_list_li[2].classList.add('show_text');

        setTimeout(()=>{
            section3_textbox_title.classList.add('opacity');
        },1000);
        setTimeout(()=>{
            section3_textbox_description.classList.add('opacity');
        },1500)
        setTimeout(()=>{
            section3_textbox_list.classList.add('opacity');
        },2000)

        setTimeout(()=>{
            section3_icon_list_li[0].classList.add('opacity');
        },2500);
        setTimeout(()=>{
            section3_icon_list_li[1].classList.add('opacity');
        },3000);
        setTimeout(()=>{
            section3_icon_list_li[2].classList.add('opacity');
        },3500);
    }
    if( document.documentElement.scrollTop >= 3500 ){
        section3_textbox2_description.classList.add('show_text');
        section3_textbox2_name.classList.add('show_text');

        setTimeout(()=>{
            section3_textbox2_description.classList.add('opacity');
        },1000);
        setTimeout(()=>{
            section3_textbox2_name.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 3800 ){
        section4_textbox1_title.classList.add('show_text');
        section4_textbox1_description.classList.add('show_text');

        setTimeout(()=>{
            section4_textbox1_title.classList.add('opacity');
            section4_textbox1_description.classList.add('opacity');
        },1000);
    }
    if( document.documentElement.scrollTop >= 4500 ){
        section4_textbox2_title.classList.add('show_text');
        section4_textbox2_description.classList.add('show_text');
        section4_textbox2_btn.classList.add('show_text');

        setTimeout(()=>{
            section4_textbox2_title.classList.add('opacity');
        },1000);
        setTimeout(()=>{
            section4_textbox2_description.classList.add('opacity');
        },1500);
        setTimeout(()=>{
            section4_textbox2_btn.classList.add('opacity');
        },2000);
    }
});