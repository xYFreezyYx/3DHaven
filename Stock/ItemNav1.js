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

let PhoneHNameIMGs = ['../Photos/Phone-Holder-Tow.png', '../Photos/Phone-Holder-Name-Phone.png', '../Photos/Phone-Holder-Front.png', '../Photos/Phone-Holder-Front-Phone.png'];
let PhoneHIMGs = ['../Photos/Phone-Holder-Front.png', '../Photos/Phone-Holder-Front-Phone.png'];
let CostumIMGs = ['../Photos/Robo-Arm.png', '../Photos/Dog.png', '../Photos/Benchy.png'];

function IMGLeft(){
    if(ItemNameLbl.innerHTML === "Personalizēts telefona turētājs"){
        lastIMG = PhoneHNameIMGs.length -1;
        currentIMG--;
        if(currentIMG <= firstIMG){
            currentIMG = 0;
        }
        IMG.src = PhoneHNameIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/4";
    }else if(ItemNameLbl.innerHTML === "Telefona turētājs"){
        lastIMG = PhoneHIMGs.length -1;
        currentIMG--;
        if(currentIMG <= firstIMG){
            currentIMG = 0;
        }
        IMG.src = PhoneHIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/2";
    }else if(ItemNameLbl.innerHTML === "Specializēts pasūtījums"){
        lastIMG = CostumIMGs.length -1;
        currentIMG--;
        if(currentIMG <= firstIMG){
            currentIMG = 0;
        }
        IMG.src = CostumIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/3";

        let ComentSpecial = document.querySelector(".ComentSpecial");
        if(IMGCounter.innerHTML === "1/3"){
            ComentSpecial.innerHTML = "Pirkstu protēze";
        }else if(IMGCounter.innerHTML === "2/3"){
            ComentSpecial.innerHTML = "Suņa figūriņa";
        }else if(IMGCounter.innerHTML === "3/3"){
            ComentSpecial.innerHTML = "Laiviņas figūriņa";
        }
    }
}

function IMGRight(){
    if(ItemNameLbl.innerHTML === "Personalizēts telefona turētājs"){
        lastIMG = PhoneHNameIMGs.length -1;
        currentIMG++;
        if(currentIMG >= lastIMG){
            currentIMG = 3;
        }
        IMG.src = PhoneHNameIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/4";
    }else if(ItemNameLbl.innerHTML === "Telefona turētājs"){
        lastIMG = PhoneHIMGs.length -1;
        currentIMG++;
        if(currentIMG >= lastIMG){
            currentIMG = 1;
        }
        IMG.src = PhoneHIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/2";
    }else if(ItemNameLbl.innerHTML === "Specializēts pasūtījums"){
        lastIMG = CostumIMGs.length -1;
        currentIMG++;
        if(currentIMG >= lastIMG){
            currentIMG = 2;
        }
        IMG.src = CostumIMGs[currentIMG];
        IMGCounter.innerHTML = (currentIMG +1) + "/3";

        let ComentSpecial = document.querySelector(".ComentSpecial");
        if(IMGCounter.innerHTML === "1/3"){
            ComentSpecial.innerHTML = "Pirkstu protēze";
        }else if(IMGCounter.innerHTML === "2/3"){
            ComentSpecial.innerHTML = "Suņa figūriņa";
        }else if(IMGCounter.innerHTML === "3/3"){
            ComentSpecial.innerHTML = "Laiviņas figūriņa";
        }
    }
}

function Buy(){
    Form.style.display = "flex";
    Info.style.display = "none";
    BackButton.style.display = "flex";
}

function Back(){
    document.location.reload();
}