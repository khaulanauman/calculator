"use strict"
const container=document.querySelector(".container");
const buttons = document.querySelectorAll(".click-button");
var textArea = document.querySelector("#input");
const clearBtn=document.querySelector("#clearButton");
const delBtn=document.querySelector("#delButton");
const equalBtn = document.querySelector("#equalButton");
var displayValue="";


//calculator functions
let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let divide=(a,b)=>{
    if(b==0){
        alert("Seriously? Dividing by zero: what are you , 8?");
        return displayValue;
    }
    else{
        return a/b;
    }
    
}
let multiply=(a,b)=>{
    return a*b;
}
/* let a=Number(prompt("Enter number 1"));
let b = Number(prompt("Enter number 2"));
let operator =prompt("click 1 to add 2 to subtract 3 to multiply and 4 to divide"); */
let operate = (operator,a,b)=>{
    if (operator=="+"){
        return(add(a,b));
     }
     else if(operator=="-"){
         return(subtract(a,b));
     }
     else if(operator=="X"){
         return(multiply(a,b));
     }
     else if(operator=="÷") {
         return(divide(a,b));
     }
     else{
          alert("Please enter a valid choice");
          return displayValue;
     }
}
//when num buttons and functions are clicked
buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        console.log("i am clicked");
        var buttonText=button.textContent;
        console.log(buttonText);
        displayValue+=buttonText;
        textArea.value=displayValue;
    });
});
//when clrBtn is clicked
clearBtn.addEventListener("click",()=>{
    console.log("i have cleared");
    displayValue="";
    textArea.value=displayValue;
});
//when dltBtn is clicked
delBtn.addEventListener("click",()=>{
    console.log("i have deleted");
    //slice(where to start, how many you want to remove)
    displayValue=displayValue.slice(0,-1);
    textArea.value=displayValue;
});
//when equal button is clicked
let previousValue;
let currentValue;
let currentOperator;
equalBtn.addEventListener("click",()=>{
    let index;
    var operator;
    for (let i=0;i<displayValue.length;i++){
    if(displayValue.charAt(i)=='+'||displayValue.charAt(i)=='-'||displayValue.charAt(i)=='X'||displayValue.charAt(i)=='÷'){
        index=i;
        operator=displayValue.charAt(i);
        currentOperator=operator;
        break;
        
    }    
}
    let a=parseFloat(displayValue.substring(0,index));
    let b =parseFloat(displayValue.substring(index+1,displayValue.length));
    console.log("i am a"+a);
    console.log("i am b"+b);
    console.log(operator);
    console.log("i have calculated");
    displayValue=operate(operator,a,b);
    textArea.value=displayValue;
    
});
//when operators is clicked
textArea.value="";





