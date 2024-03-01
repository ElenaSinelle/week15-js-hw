'use strict'
//create empty array
let numbers = [];
console.log(`Empty array: [${numbers}]`);

//fill array with numbers from -10 to 10
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}
console.log(`Filled in array: [${numbers}]`);

//-------------------------------------------------

//operation applied to array numbers using array methods (array numbers stays unchanged)
//delete all negative numbers
let notNegativeArr = numbers.filter(num => !(num < 0));
console.log(`Array with not negative numbers: [${notNegativeArr}]`);

//square items in array
let squareArr = numbers.map(num => num ** 2);
console.log(`Array 'numbers' with squared numbers: [${squareArr}]`);

//sort in descending order
let decreaseArr = [...numbers].sort((a, b) => b - a);
console.log(`Array 'numbers' sorted in descending order: [${decreaseArr}]`);

//-------------------------------------------------

//operations applied to array numbers using cycles (array numbers is modified):
//delete all negative numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
    i--;
  }
}

//square items in array
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

//sort in descending order
for (let i = 0; i < numbers.length; i++) {
  for (let j = i; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(`Modified array 'numbers' after all operations using cycles: [${numbers}]`);