const body = document.querySelector('body');
const header = document.querySelector('header');
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
const section5_textbox = document.querySelectorAll('.section5_textbox');
const section5_img_wrapper_img = document.querySelectorAll('.section5_img_wrapper>img');
const section6_textbox1 = document.querySelectorAll('.section6_textbox1');
const section6_textbox2_description = document.querySelector('.section6_textbox2_description');
const section6_textbox2_name = document.querySelector('.section6_textbox2_name');
const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const top_btn = document.querySelector('.top_btn');

//mobile menu controll
mobile_nav_icon.addEventListener('click', function(){
    mobile_nav_wapper.classList.add('show');
    body.classList.add('lock');
});
close_btn.addEventListener('click', function(){
    mobile_nav_wapper.classList.remove('show');
    body.classList.remove('lock');
});

//intro text show
setTimeout(function(){
    intro_text.classList.add('opacity');
}, 2500);
setTimeout(function(){
    intro_button.classList.add('opacity');
}, 3500);

//scroll animation controll
window.addEventListener('scroll', function(){
    if( document.documentElement.scrollTop > 0 )
        top_btn_wrapper.classList.add('show');
    else
        top_btn_wrapper.classList.remove('show');
    if( document.documentElement.scrollTop >= 55 ){
        nav_bg.classList.add('fixed');
    }
    else
        nav_bg.classList.remove('fixed');

    if( document.documentElement.scrollTop >= 300 ){
        section1_textbox_title.classList.add('show_text');
        section1_textbox_description.classList.add('show_text');

        setTimeout(function(){
            section1_textbox_title.classList.add('opacity');
        },1000);
        setTimeout(function(){
            section1_textbox_description.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 650 ){
        section1_list_li[0].classList.add('show_text');
        section1_list_li[1].classList.add('show_text');
        section1_list_li[2].classList.add('show_text');

        setTimeout(function(){
            section1_list_li[0].classList.add('opacity');
        },1000);
        setTimeout(function(){
            section1_list_li[1].classList.add('opacity');
        },1500);
        setTimeout(function(){
            section1_list_li[2].classList.add('opacity');
        },2000);
    }
    if( document.documentElement.scrollTop >= 1200 ){
        section2_textobx_title.classList.add('show_text');
        section2_textbox_description.classList.add('show_text');

        setTimeout(function(){
            section2_textobx_title.classList.add('opacity');
        } ,1000);
        setTimeout(function(){
            section2_textbox_description.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 1500 ){
        for( i = 0 ; i < section2_list_li.length; i++ ){
            section2_list_li[i].classList.add('show_list');
        }

        setTimeout(function(){
            section2_list_li[0].classList.add('opacity');
        },1000);
        setTimeout(function(){
            section2_list_li[1].classList.add('opacity');
        },1500);
        setTimeout(function(){
            section2_list_li[2].classList.add('opacity');
        },2000);
        setTimeout(function(){
            section2_list_li[3].classList.add('opacity');
        },2500);
        setTimeout(function(){
            section2_list_li[4].classList.add('opacity');
        },3000);
        setTimeout(function(){
            section2_list_li[5].classList.add('opacity');
        },3500);
    }
    if( document.documentElement.scrollTop >= 2500 ){
        section3_textbox_title.classList.add('show_text');
        if( window.innerWidth <= 768 )
            section3_textbox_description.classList.add('show_text3');
        else
            section3_textbox_description.classList.add('show_text');
        section3_textbox_list.classList.add('show_text');
        section3_icon_list_li[0].classList.add('show_text');
        section3_icon_list_li[1].classList.add('show_text');
        section3_icon_list_li[2].classList.add('show_text');

        setTimeout(function(){
            section3_textbox_title.classList.add('opacity');
        },1000);
        setTimeout(function(){
            section3_textbox_description.classList.add('opacity');
        },1500)
        setTimeout(function(){
            section3_textbox_list.classList.add('opacity');
        },2000)

        setTimeout(function(){
            section3_icon_list_li[0].classList.add('opacity');
        },2500);
        setTimeout(function(){
            section3_icon_list_li[1].classList.add('opacity');
        },3000);
        setTimeout(function(){
            section3_icon_list_li[2].classList.add('opacity');
        },3500);
    }
    if( document.documentElement.scrollTop >= 3400 ){
        section3_textbox2_description.classList.add('show_text');
        section3_textbox2_name.classList.add('show_text');

        setTimeout(function(){
            section3_textbox2_description.classList.add('opacity');
        },1000);
        setTimeout(function(){
            section3_textbox2_name.classList.add('opacity');
        },1500);
    }
    if( document.documentElement.scrollTop >= 3700 ){
        section4_textbox1_title.classList.add('show_text');
        section4_textbox1_description.classList.add('show_text');

        setTimeout(function(){
            section4_textbox1_title.classList.add('opacity');
            section4_textbox1_description.classList.add('opacity');
        },1000);
    }
    if( document.documentElement.scrollTop >= 4200 ){
        section4_textbox2_title.classList.add('show_text');
        section4_textbox2_description.classList.add('show_text');
        section4_textbox2_btn.classList.add('show_text');

        setTimeout(function(){
            section4_textbox2_title.classList.add('opacity');
        },1000);
        setTimeout(function(){
            section4_textbox2_description.classList.add('opacity');
        },1500);
        setTimeout(function(){
            section4_textbox2_btn.classList.add('opacity');
        },2000);
    }
    if( document.documentElement.scrollTop >= 4800 ){
        section5_textbox[0].classList.add('show_text');
        section5_img_wrapper_img[0].classList.add('show_icon');

        setTimeout(function(){
            section5_textbox[0].classList.add('opacity');
            section5_img_wrapper_img[0].classList.add('opacity');
        },1000);
    }
    if( document.documentElement.scrollTop >= 5100 ){
        section5_textbox[1].classList.add('show_text');
        section5_img_wrapper_img[1].classList.add('show_icon');

        setTimeout(function(){
            section5_textbox[1].classList.add('opacity');
            section5_img_wrapper_img[1].classList.add('opacity');
        },1000);
    }
    if( document.documentElement.scrollTop >= 5400 ){
        section5_textbox[2].classList.add('show_text');
        section5_img_wrapper_img[2].classList.add('show_icon');

        setTimeout(function(){
            section5_textbox[2].classList.add('opacity');
            section5_img_wrapper_img[2].classList.add('opacity');
        },1000);
    }
    if( document.documentElement.scrollTop >= 6000 ){
        section6_textbox1[0].classList.add('show_text');
        section6_textbox1[1].classList.add('show_text');
        section6_textbox1[2].classList.add('show_text');

        setTimeout(function(){
            section6_textbox1[0].classList.add('opacity');
        },1000);
        setTimeout(function(){
            section6_textbox1[1].classList.add('opacity');
        },1500);
        setTimeout(function(){
            section6_textbox1[2].classList.add('opacity');
        },2000);
    }
    if( document.documentElement.scrollTop >= 6200 ){
        section6_textbox2_description.classList.add('show_text');
        section6_textbox2_name.classList.add('show_text');

        setTimeout(function(){
            section6_textbox2_description.classList.add('opacity');
        },1000);
        setTimeout(function(){
            section6_textbox2_name.classList.add('opacity');
        },1500);
    }
});

//top buttom controll
top_btn.addEventListener('click', function(){
    header.scrollIntoView({behavior: "smooth"})
});