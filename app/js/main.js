"use strict";

const randomPinDisplay = document.querySelector('#random-pin-display');
const pinGenerateBtn = document.querySelector('.btn-pin-generator');
let pin ;
let inputPin;
let count = 0;

// Getting pin from this function 
function getPin () {
  function getDigit () {
    let digit = Math.round(Math.random()*9).toString();
    return digit;
  };

  const pins = [];
  for ( let i = 1; i < 5; i++) {
    let digit = getDigit();
    pins.push(digit);
  }
  
  let pinNumber = '';
  for (const pin of pins) {
    pinNumber = pinNumber + pin;
  }
  return pinNumber;
}


  // showing pin in display 
pinGenerateBtn.addEventListener('click', ()=>{
  pin = getPin();
  randomPinDisplay.innerText = pin;

})

// calculator functionality
const inputDisplay = document.querySelector('#input-display');
const keyPad = document.querySelector('.keypad');
let display = '';
let keyNumbers = [];

keyPad.addEventListener('click', (e)=>{

  if (e.target == keyPad) {
    return;
  }
  if (e.target.innerText == 'x') {
    keyNumbers.pop();
  }
  else if (e.target.innerText == 'xx') {
    keyNumbers = [];
  }

  else if (keyNumbers.length < 4) {
    keyNumbers.push(e.target.innerText);
  }
  else {
    console.log('you riched 4 digit');
  }

  inputPin = '';
  for (const key of keyNumbers ){
    inputPin = inputPin + key;
  }
  inputDisplay.innerText = inputPin;
  // console.log(inputPin, typeof inputPin);
})


// checking functionality
const checkBtn = document.querySelector('#checker');

checkBtn.addEventListener('click', ()=>{
// debugger;
  if (pin === inputPin ) {
    checkBtn.style.backgroundColor = 'white';
    return;
  }
  else{
    checkBtn.style.backgroundColor = 'coral';
    count = count + 1;
  }
  
});


// remain time functionality
const remainTimeBox = document.querySelector('#remain-time');
checkBtn.addEventListener('click', ()=>{
  if (pin === inputPin ) {
    remainTimeBox.innerText = 'success'
    randomPinDisplay.value = '';
    inputDisplay.value = '';
    
  }
  else if ( count < 4) {
    remainTimeBox.innerText = 'You have ' + (4 - count) + ' left'; 
  }
  else {
    remainTimeBox.className = "color-red";
    remainTimeBox.innerText = "You are blocked";
    checkBtn.setAttribute('disabled', true);
    checkBtn.style.backgroundColor = 'red';
  }
})

keyPad.addEventListener('click', (e)=>{
  
})
