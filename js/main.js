
"use strict";

const animationLogoEle = document.querySelector(".animation-logo");
const animationOverlay = document.querySelector(".container.center");
const animationLetter = document.querySelector('.animation-logo .letter')


let numberOFLogoAnimation = 8;



function handleAnimationEnd() {
  numberOFLogoAnimation--;

  if (numberOFLogoAnimation === 0) {
    setTimeout(() => {
      animationOverlay.style.opacity = "0";
      setTimeout(() => animationOverlay.remove(), 500);
    }, 1000);
  }
}


animationLogoEle.addEventListener("animationend", () => handleAnimationEnd());


// Set one letter
if (animationLetter.textContent.length !== 1)
  animationLetter.innerHTML = animationLetter.innerHTML.slice(0, 1)



setTimeout(() => animationOverlay.style.filter = "grayscale(0)", 3000);



 let IdIcon = document.getElementById("icon") ;
 let myIdElement = document.getElementById("show_list") ;
 
 IdIcon.onclick = function(){
    myIdElement.classList.toggle("show");
  }

 
 

