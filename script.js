// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", generatePassword);



function generatePassword() {
  var length = prompt("How long do you want your password to be? Length must be from 8 to 128 characters")

  if (isNaN(length) || length < 8 || length > 128) {
    alert("INVALID ENTRY - Must be a number greater than or equal to 8 characters") 
  } else {


  var confirmedNum = confirm('Do you want your password to have numbers?')
  var confirmedUpper = confirm('Do you want your password to have uppercase letters?')
  var confirmedLower = confirm('Do you want your password to have lowercase letters?')
  var confirmedSymbol= confirm('Do you want your password to have Symbols?')
   
  }

  if( confirmedNum == 0 && confirmedUpper == 0 && confirmedLower == 0 && confirmedSymbol == 0) {
    alert("INVALID ENTRY - AT LEAST ONE CRITERIA MUST BE SELECTED")
  } 

  function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 48
    return String.fromCharCode(`${randomNumber}`)
  }
  function getRandomUpper() {
    var randomNumber = Math.floor(Math.random() * 26) + 65
    return String.fromCharCode(`${randomNumber}`)
  }
  function getRandomLower() {
    var randomNumber = Math.floor(Math.random() * 26) + 97
    return String.fromCharCode(`${randomNumber}`)
  }
  function getRandomSymbol() {
    var randomNumber = Math.floor(Math.random() * 14) + 33
    return String.fromCharCode(`${randomNumber}`)
  }


  var answer = ''
  for (var i = 0; i < length; i++) {
    if(confirmedLower && answer.length < length){
      answer += getRandomLower()
    }
    if(confirmedNum && answer.length < length){
      answer += getRandomNumber()
    }

    if(confirmedUpper && answer.length < length){
      answer += getRandomUpper()
    }

    if(confirmedSymbol && answer.length < length){
      answer += getRandomSymbol()
    }
  }
  

  var passwordArea = document.querySelector('#password')
  passwordArea.innerText = answer
}