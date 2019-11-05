// Selecting html elements with querySelector

const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");
const btn6=document.querySelector("#btn6");
const btn7=document.querySelector("#btn7");
const btn8=document.querySelector("#btn8");
const btn9=document.querySelector("#btn9");
const btn0=document.querySelector("#btn0");
var btnAdd=document.querySelector("#btnAdd");
var btnSubtract=document.querySelector("#btnSubtract");
var btnMultiply=document.querySelector("#btnMultiply");
var btnDivide=document.querySelector("#btnDivide");
var btnEquals=document.querySelector('#btnEquals');
const btnClear=document.querySelector("#btnClear");
let inputData=document.querySelector('input');
/********************************************** */

// initializing the input field element//////////
inputData.value=0;
let index=0;
/****************************************** */

// functions for generating numbers in input field ///////////
function click1(){
    console.log(inputData.value+='1');
}
function click2(){
    console.log(inputData.value+='2');
}function click3(){
    console.log(inputData.value+='3');
}function click4(){
    console.log(inputData.value+='4');
}function click5(){
    console.log(inputData.value+='5');
}function click6(){
    console.log(inputData.value+='6');
}function click7(){
    console.log(inputData.value+='7');
}function click8(){
    console.log(inputData.value+='8');
}function click9(){
    console.log(inputData.value+='9');
}function click0(){
    console.log(inputData.value+='0');
}
/************************************************* */

// declare variable for first inputdata
let firstNumber;
/************************************* */  

// functions for calculation,clear and equals button /////////////////
function clickAdd(){
    //assign input field value to variable and clear
    // content of input field
    index=1; //VARIABLE FOR SELECTING THE TYPE OF OPERATION
    firstNumber=inputData.value;
    inputData.value=0;  
}
function clickSubtract(){
    index=2
    firstNumber=inputData.value;
    inputData.value=0;
}
function clickMultiply(){
    index=3;
    firstNumber=inputData.value;
    inputData.value=0;
}
function clickDivide(){
    index=4;
    firstNumber=inputData.value;
    inputData.value=0;
}
function clickClear(){
    firstNumber=inputData.value;
    inputData.value=0;
}
function clickEquals(){
    if(index===1)
    {
        secondNumber=inputData.value;
        add(firstNumber,secondNumber);   
    }
    if(index===2)
    {
        secondNumber=inputData.value;
        subtract(firstNumber,secondNumber);
    }
    if(index===3)
    {
        secondNumber=inputData.value;
        multiply(firstNumber,secondNumber)
    }
    if(index==4)
    {
        secondNumber=inputData.value;
        divide(firstNumber,secondNumber);
    }
    
}
function add(firstNumber,secondNumber){
    var result=Number(firstNumber)+Number(secondNumber);
    inputData.value=result;
}
function subtract(firstNumber,secondNumber){
    var result=Number(firstNumber)-Number(secondNumber);
    inputData.value=result;
}
function multiply(firstNumber,secondNumber){
    var result=firstNumber*secondNumber;
    inputData.value=result;
}
function divide(firstNumber,secondNumber){
    var result=firstNumber/secondNumber;
    inputData.value=result;
}
/***************************************************** */

// listening to click events for numbers from 0 to 9//////////////
//  and all other buttons/////////////////////////////////
btn1.addEventListener('click',click1);
btn2.addEventListener('click',click2);
btn3.addEventListener('click',click3);
btn4.addEventListener('click',click4);
btn5.addEventListener('click',click5);
btn6.addEventListener('click',click6);
btn7.addEventListener('click',click7);
btn8.addEventListener('click',click8);
btn9.addEventListener('click',click9);
btn0.addEventListener('click',click0);
btnAdd.addEventListener('click',clickAdd);
btnSubtract.addEventListener('click',clickSubtract);
btnMultiply.addEventListener('click',clickMultiply);
btnDivide.addEventListener('click',clickDivide);
btnEquals.addEventListener('click',clickEquals);
btnClear.addEventListener('click',clickClear);
/*************************************************** */



