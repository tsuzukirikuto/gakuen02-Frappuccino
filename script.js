'use strict'
const btn_02 = document.querySelector(".btn_02");
console.log(btn_02)
 
function scrollMenu(){
   
    window.scroll(0,400);
}
 
btn_02.addEventListener("click",scrollMenu);
 