let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobile = regexp.test(details);
let ItemInfo = document.querySelector(".Item-Info");
let ColorInfo = document.querySelector(".Color-Info"); 
let Colors = document.querySelector(".Colors");
let ItemName = document.querySelector(".Item-Name");


if(isMobile){
    ItemInfo.style.flexDirection = "column";
    ColorInfo.style.flexDirection = "column";
    Colors.style.flexDirection = "column";
    Colors.style.width = "auto";
    Colors.style.height = "auto";
    ItemName.style.marginTop = "20px";
}

function MainPage(){
    location.href='https://3dhaven.pages.dev/';
}

function Contact(){
    location.href='../Contact/Contact.html';
}