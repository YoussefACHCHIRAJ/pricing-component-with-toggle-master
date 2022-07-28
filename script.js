const button =document.querySelector(".btn");
const circle =document.querySelector(".circle");
const basicPrice =document.querySelector(".pricebasic");
const profPrice =document.querySelector(".priceprof");
const masterPrice =document.querySelector(".pricemaster");

let moode = "Monthly";
button.addEventListener("click" , e=>{
    switch (moode){
        case "Monthly":
            circle.style.transform = "translateX(-100%)";
            moode = "Annually";
            basicPrice.innerHTML = "199.99";
            profPrice.innerHTML = "249.99";
            masterPrice.innerHTML = "399.99";
            break;
        case "Annually":
            circle.style.transform = "translateX(0)";
            moode = "Monthly";
            basicPrice.innerHTML = "19.99";
            profPrice.innerHTML = "24.99";
            masterPrice.innerHTML = "39.99";
            break;
    }
})