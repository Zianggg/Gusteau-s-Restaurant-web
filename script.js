//scroll down will hide navbar.
var last_scroll_top = 0;
var navbar = document.getElementById("navbar")
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYoffset || this.document.documentElement.scrollTop;
    if (scrollTop >= last_scroll_top){
        navbar.style.top= "-120px";
    }else{
        navbar.style.top= "0"
    }
    last_scroll_top = scrollTop
})

//parallax scrolling fx for home.
let food1 = document.getElementById("food1");
let food1nb = document.getElementById("food1nb");
let title = document.getElementById("title");
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    var scaleFactor = 1 + value * 0.0015;
    
    food1.style.transform = "scale(" + scaleFactor + ")";
    food1nb.style.top = value*-0.5 + "px";
    title.style.top = value*1 +"px";
})

//scrollreveal library for the rest of the page.
ScrollReveal({
    reset: true,
});
ScrollReveal().reveal('.title',{delay: 200 ,origin: 'top', distance: '60px',});
ScrollReveal().reveal('.box-area',{delay: 400 ,origin: 'bottom', distance: '60px',});
ScrollReveal().reveal('.chef_img',{delay: 400 ,origin: 'left', distance: '500px',});
ScrollReveal().reveal('.paragraph',{delay: 400 ,origin: 'right', distance: '500px',});
ScrollReveal().reveal('.chef_img2',{delay: 400 ,origin: 'left', distance: '500px',});
ScrollReveal().reveal('.wrapper2 .paragraph',{delay: 600 ,origin: 'right', distance: '500px',});
ScrollReveal().reveal('.wrapper',{delay: 600 ,origin: 'bottom', distance: '60px',interval: 1000});
ScrollReveal().reveal('.wrapper-reservation',{delay: 200 ,origin: 'bottom', distance: '100px', interval:1000});


//sent reservation email using emailjs
function send_mail(){
    var mail ={
        name: document.getElementById("name").value,
        phone_num: document.getElementById("phone_num").value,
        email: document.getElementById("email").value,
        time: document.getElementById("time").value,
        date: document.getElementById("date").value,
    };

    emailjs.send('service_ms7mlle', 'template_mm5r12j', mail)
}


//popup after sent reservation or rejected reservation
let popup = document.getElementById("popup");
let reject_message = document.getElementById("reject_message")

function open_popup(){
    popup.classList.add("open_popup");
    console.log(popup)
}

function close_popup(){
    popup.classList.remove("open_popup")
}

function open_rejected_message(){
    reject_message.classList.add("open_rejected_message");
}

function close_rejected_message(){
    reject_message.classList.remove("open_rejected_message");
}

//reject message when not fill all the information.
function check_valid_reservation(){
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phone_num = document.getElementById("phone_num").value;

    if (date === "" || time === "" || email === "" || name === "" || phone_num === ""){
        open_rejected_message()
    }
    else {
        send_mail();
        open_popup();
    }
};

//preloader for page.
window.addEventListener("load",()=>{
    let preloader = document.getElementById("preloader")
    preloader.classList.add("show_preloader")

    preloader.addEventListener("transitionend",()=>{
        preloader.classList.remove("show_preloader")
    })
});