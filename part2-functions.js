// 1. Dog Age Converter

function dogToHumanYears(dogAge){
    let humanAge = 0;
    if (dogAge === 1) {
        humanAge = 15;
    } else if (dogAge === 2) {
        humanAge = 24;
    } else {
        humanAge = 24 + (dogAge - 2) * 5;
    }
    return humanAge;
}
console.log(`The dog's age in human years is ${humanAge}.`);
    
    



  


2. //Tip Calculator

function calculateTip(total, percentage) {
    let tip = total
    * (percentage / 100);
    let totalAmount = total + tip;
    return {
        tip: tip,
        totalAmount: totalAmount
    }   
  }

3. //Even or Odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
  
}