let Stock = document.querySelector(".Stock");
let ContactMe = document.querySelector(".Contact");
let PerPhoneHolderDiv = document.querySelector("#PerPhoneHolderDiv");
let PhoneHolderDiv = document.querySelector("#PhoneHolderDiv");
let LitofanijaDiv = document.querySelector("#LitofanijaDiv");

function ReloadPage(){
    document.location.reload();
}

function Contact(){
    ContactMe.style.display = "flex";
    Stock.style.display = "none";
    PerPhoneHolderDiv.style.display = "none";
    PhoneHolderDiv.style.display = "none";
    LitofanijaDiv.style.display = "none";
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