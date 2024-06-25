"use strict"
const container=document.querySelector(".container");
const buttons = document.querySelectorAll(".click-button");
var textArea = document.querySelector("#input");
//calculator functions
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
//when num buttons and functions are clicked
buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        console.log("i am clicked");
        var buttonText=button.textContent;
        console.log(buttonText);
        textArea.value+=buttonText;
    });
});

//when equal button is clicked
//when operators is clicked






