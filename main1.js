let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobile = regexp.test(details);
let PhoneHItemInfo = document.querySelector("#PhoneH-Name-Item-Info");
let PhoneHNameItemInfo = document.querySelector("#PhoneH-Item-Info");
let LitoItemInfo = document.querySelector("#Litofanija-Item-Info");
let LitoItemInfo2 = document.querySelector("#Litofanija-Item-Info-2");
let SpecialItemInfo = document.querySelector("#Costum-Item-Info");
let ItemPhoneHNameName = document.querySelector("#Item-PhoneHName-Name");
let ItemPhoneHName = document.querySelector("#Item-PhoneH-Name");
let ItemLitoName = document.querySelector("#Item-Lito-Name");
let ItemSpecialName = document.querySelector("#Item-Special-Name");
let ColorsPhoneHName = document.querySelector("#Colors-PhoneHName");
let ColorsPhoneH = document.querySelector("#Colors-PhoneH");
let ColorsSpecial = document.querySelector("#Colors-Special");
let ColorsInfoPhoneHName = document.querySelector("#Color-Info-PhoneHName");
let ColorsInfoPhoneH = document.querySelector("#Color-Info-PhoneH");
let ColorsInfoSpecial = document.querySelector("#Color-Info-Special");

if(isMobile){
    PhoneHItemInfo.style.flexDirection = "column";
    PhoneHNameItemInfo.style.flexDirection = "column";
    LitoItemInfo.style.flexDirection = "column";
    LitoItemInfo2.style.flexDirection = "column";
    SpecialItemInfo.style.flexDirection = "column";
    ColorsInfoPhoneHName.style.flexDirection = "column";
    ColorsPhoneHName.style.flexDirection = "column";
    ColorsPhoneHName.style.width = "auto";
    ColorsPhoneHName.style.height = "auto";
    ColorsInfoPhoneH.style.flexDirection = "column";
    ColorsPhoneH.style.flexDirection = "column";
    ColorsPhoneH.style.width = "auto";
    ColorsPhoneH.style.height = "auto";
    ColorsInfoSpecial.style.flexDirection = "column";
    ColorsSpecial.style.flexDirection = "column";
    ColorsSpecial.style.width = "auto";
    ColorsSpecial.style.height = "auto";
    ItemPhoneHNameName.style.marginTop = "20px";
    ItemPhoneHName.style.marginTop = "20px";
    ItemLitoName.style.marginTop = "20px";
    ItemSpecialName.style.marginTop = "20px";
}

let Stock = document.querySelector(".Stock");
let ContactMe = document.querySelector(".Contact");
let PerPhoneHolderDiv = document.querySelector("#PerPhoneHolderDiv");
let PhoneHolderDiv = document.querySelector("#PhoneHolderDiv");
let LitofanijaDiv = document.querySelector("#LitofanijaDiv");
let CostumeDiv = document.querySelector("#CostumDiv");

function ReloadPage(){
    document.location.reload();
}

function Contact(){
    ContactMe.style.display = "flex";
    Stock.style.display = "none";
    PerPhoneHolderDiv.style.display = "none";
    PhoneHolderDiv.style.display = "none";
    LitofanijaDiv.style.display = "none";
    CostumeDiv.style.display = "none";
}

function PerPhoneHolder(){
    PerPhoneHolderDiv.style.display = "flex";
    Stock.style.display = "none";
}

function PhoneHolder(){
    PhoneHolderDiv.style.display = "flex";
    Stock.style.display = "none";
}

function Litofanija(){
    LitofanijaDiv.style.display = "flex";
    Stock.style.display = "none";
}

function Costum(){
    CostumeDiv.style.display = "flex";
    Stock.style.display = "none";
}