let IMGCounter = document.querySelector(".IMG-Counter");

let IMGPlaceHolder = ['Photos/Phone-Holder.png', 'Photos/Litofanija-Light.png'];
let currentIMG = 0;
let firstIMG = 0;
let lastIMG = IMGPlaceHolder.length -1;

let PhoneHNameIMG = document.querySelector("#PhoneH-Name-IMG-preview");
let PhoneHNameBuyForm = document.querySelector("#PhoneH-Name-Buy-Form");
let PhoneHNameInfo = document.querySelector("#PhoneH-Name-Item-Info");
let PhoneHNameBackButton = document.querySelector("#PhoneH-Name-Back");
let PhoneHNameIMGs = ['Photos/Phone-Holder-Tow.png', 'Photos/Phone-Holder-Name-Phone.png', 'Photos/Phone-Holder.png'];

let PhoneHIMG = document.querySelector("#PhoneH-IMG-preview");
let PhoneHBuyForm = document.querySelector("#PhoneH-Buy-Form");
let PhoneHInfo = document.querySelector("#PhoneH-Item-Info");
let PhoneHBackButton = document.querySelector("#PhoneH-Back");
let PhoneHIMGs = ['Photos/Phone-Holder.png'];

let LitofanijaIMG1 = document.querySelector("#Litofanija-IMG-preview-1");
let LitofanijaIMG2 = document.querySelector("#Litofanija-IMG-preview-2");
let LitofanijaBuyForm = document.querySelector("#Litofanija-Buy-Form");
let LitofanijaInfo = document.querySelector("#Litofanija-Item-Info");
let LitofanijaBackButton = document.querySelector("#Litofanija-Back");
let LitoIMGCounter1 = document.querySelector("#Lito-IMG-Counter-1");
let LitoIMGCounter2 = document.querySelector("#Lito-IMG-Counter-2");
let LitofanijaIMGs1 = ['Photos/Litofanija-Light.png', 'Photos/Litofanija-NoLight.png'];
let LitofanijaIMGs2 = ['Photos/Litofanija-Light-2.png', 'Photos/Litofanija-NoLight-2.png'];

function IMGLeft(){
    if(PerPhoneHolderDiv.style.display === "flex"){
        lastIMG = PhoneHNameIMGs.length -1;
        currentIMG--;
        if(currentIMG <= firstIMG){
            currentIMG = 0;
        }
        PhoneHNameIMG.src = PhoneHNameIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/3";
    }else if(PhoneHolderDiv.style.display === "flex"){
        lastIMG = PhoneHIMGs.length -1;
        currentIMG--;
        if(currentIMG <= firstIMG){
            currentIMG = 0;
        }
        PhoneHIMG.src = PhoneHIMGs[currentIMG];
        IMGCounter.innerHTML = "1/1";
    }
}

function IMGRight(){
    if(PerPhoneHolderDiv.style.display === "flex"){
        lastIMG = PhoneHNameIMGs.length -1;
        currentIMG++;
        if(currentIMG >= lastIMG){
            currentIMG = 2;
        }
        PhoneHNameIMG.src = PhoneHNameIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/3";
    }else if(PhoneHolderDiv.style.display === "flex"){
        lastIMG = PhoneHIMGs.length -1;
        currentIMG++;
        if(currentIMG >= lastIMG){
            currentIMG = 0;
        }
        PhoneHIMG.src = PhoneHIMGs[currentIMG];
        IMGCounter.innerHTML = "1/1";
    }
}

function Buy(){
    if(PerPhoneHolderDiv.style.display === "flex"){
        PhoneHNameBuyForm.style.display = "flex";
        PhoneHNameInfo.style.display = "none";
        PhoneHNameBackButton.style.display = "flex";
    }else if(PhoneHolderDiv.style.display === "flex"){
        PhoneHBuyForm.style.display = "flex";
        PhoneHInfo.style.display = "none";
        PhoneHBackButton.style.display = "flex";
    }else if(LitofanijaDiv.style.display === "flex"){
        LitofanijaBuyForm.style.display = "flex";
        LitofanijaInfo.style.display = "none";
        LitofanijaBackButton.style.display = "flex";
    }
}

function Back(){
    if(PerPhoneHolderDiv.style.display === "flex"){
        PhoneHNameBuyForm.style.display = "none";
        PhoneHNameInfo.style.display = "flex";
        PhoneHNameBackButton.style.display = "none";
    }else if(PhoneHolderDiv.style.display === "flex"){
        PhoneHBuyForm.style.display = "none";
        PhoneHInfo.style.display = "flex";
        PhoneHBackButton.style.display = "none";
    }else if(LitofanijaDiv.style.display === "flex"){
        LitofanijaBuyForm.style.display = "none";
        LitofanijaInfo.style.display = "flex";
        LitofanijaBackButton.style.display = "none";
    }
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