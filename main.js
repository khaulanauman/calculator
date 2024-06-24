"use strict"
const container=document.querySelector(".container");

window.onload=makeButt();
function makeButt(){
    var numberButtons=Array();
    for(let i=0;i<10;i++){
        const button=document.createElement("button");
        numberButtons[i]=button;
        button.textContent=i;
        button.style.backgroundColor="#505050";
        button.style.color="white";
        container.appendChild(button);
    }
}
let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let divide=(a,b)=>{
    return a/b;
}
let multiply=(a,b)=>{
    return a*b;
}
/* let a=Number(prompt("Enter number 1"));
let b = Number(prompt("Enter number 2"));
let operator =prompt("click 1 to add 2 to subtract 3 to multiply and 4 to divide"); */
let operate = (operator,a,b)=>{
    if (operator=="+"){
        console.log(add(a,b));
     }
     else if(operator=="-"){
         console.log(subtract(a,b));
     }
     else if(operator=="*"){
         console.log(multiply(a,b));
     }
     else if(operator=="/") {
         console.log(divide(a,b));
     }
     else{
          alert("Please enter a valid choice");
     }
}
/* operate(operator,a,b); */
//one array for number buttons
//one array for function buttons
//declare each function





