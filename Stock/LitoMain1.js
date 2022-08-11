let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobile = regexp.test(details);
let ItemInfo = document.querySelector(".Item-Info");
let ItemName = document.querySelector(".Item-Name");
let LitoItemInfo = document.querySelector("#Litofanija-Item-Info");
let LitoItemInfo2 = document.querySelector("#Litofanija-Item-Info-2");
let ItemLitoName = document.querySelector("#Item-Lito-Name");

if(isMobile){
    ItemInfo.style.flexDirection = "column";
    ItemName.style.marginTop = "20px";
    LitoItemInfo.style.flexDirection = "column";
    LitoItemInfo2.style.flexDirection = "column";
    ItemLitoName.style.marginTop = "20px";
}

function MainPage(){
    location.href='https://3dheaven.pages.dev/';
}

function Contact(){
    location.href='../Contact/Contact.html';
}

let IMGCounter = document.querySelector(".IMG-Counter");
let IMGPlaceHolder = ['../Photos/Phone-Holder-Front.png', '../Photos/Litofanija-Light.png'];
let currentIMG = 0;
let firstIMG = 0;
let lastIMG = IMGPlaceHolder.length -1;

let ItemNameLbl = document.querySelector(".Item-Name");
let IMG = document.querySelector(".Item-IMG-preview");
let Form = document.querySelector(".Buy-Form");
let Info = document.querySelector(".Item-Info");
let BackButton = document.querySelector(".Back-Button");

let LitofanijaIMG1 = document.querySelector("#Litofanija-IMG-preview-1");
let LitofanijaIMG2 = document.querySelector("#Litofanija-IMG-preview-2");
let LitoIMGCounter1 = document.querySelector("#Lito-IMG-Counter-1");
let LitoIMGCounter2 = document.querySelector("#Lito-IMG-Counter-2");
let LitofanijaIMGs1 = ['../Photos/Litofanija-Light.png', '../Photos/Litofanija-NoLight.png'];
let LitofanijaIMGs2 = ['../Photos/Litofanija-Light-2.png', '../Photos/Litofanija-NoLight-2.png'];

function Buy(){
    Form.style.display = "flex";
    Info.style.display = "none";
    BackButton.style.display = "flex";
}

function Back(){
    document.location.reload();
}

function IMGLeftLito1(){
    lastIMG = LitofanijaIMGs1.length -1;
    currentIMG--;
    if(currentIMG <= firstIMG){
        currentIMG = 0;
    }
    LitofanijaIMG1.src = LitofanijaIMGs1[currentIMG];
    LitoIMGCounter1.innerHTML = (currentIMG +1) + "/2";
}

function IMGRightLito1(){
    lastIMG = LitofanijaIMGs1.length -1;
    currentIMG++;
    if(currentIMG >= lastIMG){
        currentIMG = 1;
    }
    LitofanijaIMG1.src = LitofanijaIMGs1[currentIMG];
    LitoIMGCounter1.innerHTML = (currentIMG +1) + "/2";
}

function IMGLeftLito2(){
    lastIMG = LitofanijaIMGs2.length -1;
    currentIMG--;
    if(currentIMG <= firstIMG){
        currentIMG = 0;
    }
    LitofanijaIMG2.src = LitofanijaIMGs2[currentIMG];
    LitoIMGCounter2.innerHTML = (currentIMG +1) + "/2";
}

function IMGRightLito2(){
    lastIMG = LitofanijaIMGs2.length -1;
    currentIMG++;
    if(currentIMG >= lastIMG){
        currentIMG = 1;
    }
    LitofanijaIMG2.src = LitofanijaIMGs2[currentIMG];
    LitoIMGCounter2.innerHTML = (currentIMG +1) + "/2";
}