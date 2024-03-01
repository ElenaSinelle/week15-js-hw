'use strict'
//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
  console.log('Задание 1: число ' + i);
}

//или так
// let i = 1;
// while(i <= 10) {
//   console.log('Задание 1: число ' + i);
//   i++;
// }

//-----------------------------------------

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log('Задание 2: чётное число ' + i);
  }
}

// или так:
// for (let i = 1; i <= 20; i++) {
//   if(i % 2) continue;
//   console.log('Задание 2: чётное число ' + i);
// }

//-----------------------------------------

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
  console.log('Задание 3: число ' + i);
}

//или так:
// let j = 10;
// while(j) {
//   console.log('Задание 3: число ' + j);
//   j--;
// }

//-----------------------------------------

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
  let mult = 5;
  console.log(`Задание 4: ${i} * ${mult} = ${i * mult}`);
}

//-----------------------------------------

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
function sum(n, m) {
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
}
console.log('Задание 5: ' + sum(1, 100));

//или так
// function sum2(n, m) {
//   return n === m ? n : n + sum2(n + 1, m);
// }
// console.log('Задание 5: ' + sum2(1, 100));

//-----------------------------------------

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let item of array) {
  console.log('Задание 6: значение массива ' + item);
}
//или так
// for (let i = 0; i < array.length; i++) {
//   console.log('Задание 6: значение массива ' + array[i]);
// }

//или так
// array.forEach(item => console.log('Задание 6: значение массива ' + item));

//-----------------------------------------

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
function sumArr(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

console.log('Задание 7: сумма чисел массива = ' + sumArr(numbers));

//-----------------------------------------

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + ' - прекрасное животное';
}
console.log('Задание 8: ' + animals);

// метод, который не изменяет массив, а делает новый:
// let awsomeAnimals = animals.map(animal => animal + ' - прекрасное животное');
// console.log(awsomeAnimals);

//-----------------------------------------

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
function splitStr(string) {
  for (let letter of string) {
    console.log('Задание 9: ' + letter);
  }
}
splitStr(str);

//-----------------------------------------

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
function showElements(arr) {
  for (let element of arr) {
    console.log('Задание 10: ' + element);
  }
}
showElements(array);

//-----------------------------------------

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
function showWords(arr) {
 return arr.flatMap(item => item.split(' ')).forEach(word => console.log('Задание 11: ' + word));
}
showWords(sentences);

// или вот так с удалением знаков препинания и каждое слово с маленькой буквы
// function showWords2(arr) {
//   return arr.join(' ').split(' ').forEach(word => /[?,!]/.test(word) ? console.log('Задание 11: ' + word.slice(0, -1).toLowerCase()) : console.log('Задание 11: ' + word.toLowerCase()));
//  }
//  showWords2(sentences);

//-----------------------------------------

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
function sumElems(arr) {
  let sum = 0;
  for (let elem of arr) {
    if (typeof elem === 'number') {
      sum += elem;
    } else {
      sum += +elem;
    }
  }
  return sum;
}
console.log('Задание 12: ' + sumElems(numbers));

//-----------------------------------------

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
function elemLength(arr) {
  return arr.map(elem => typeof elem === 'string' ? elem.length : String(elem).length);
}
console.log('Задание 13: ' + elemLength(list));

// или так
// function elemLength2(arr) {
//   let lengths = [];
//   for (let elem of arr) {
//     typeof elem === 'string' ? lengths.push(elem.length) : lengths.push(String(elem).length);
//   }
//   return lengths;
// }
// console.log('Задание 13: ' + elemLength2(numbers));

//-----------------------------------------

//Задание 14
// Преобразуйте каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].toUpperCase();
}
console.log('Задание 14: ' + words);

//-----------------------------------------

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letter of greeting) {
  if (vowels.includes(letter)) vowelCount++;
}
console.log('Задание 15: ' + vowelCount);

// или так
// function findVowels(str) {
//   return str.split('').filter(letter => /[aeiou]/.test(letter)).length;
// }
// console.log('Задание 15: ' + findVowels(greeting));

//-----------------------------------------

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words2 = ['Hello', 'world', '!'];
function joinArr(arr) {
  return arr.join(' ');
}
console.log('Задание 16: ' + joinArr(words2));

//-----------------------------------------

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let k = 1;
while(k <= 10) {
  console.log('Задание 17: число ' + k);
  k++;
}

//-----------------------------------------

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let l = 10;
while(l) {
  console.log('Задание 18: число ' + l);
  l--;
}

//-----------------------------------------

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
function checkPositive(arr) {
  let allPositive = true;
  let i = arr[0];
  while (i < arr.length) {
    if (arr[i] <= 0) {
      allPositive = false;
      break;
    }
    i++;
  }
  return allPositive;
}
console.log('Задание 19: ' + checkPositive(allNumbers));

//или так
// function checkPositive2(arr) {
//   let falseNum = arr.filter(n => n <= 0);
//   return falseNum.length ? false : true;
// }
// console.log('Задание 19: ' + checkPositive2(allNumbers));

//-----------------------------------------

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let w = 0;
do {
  console.log('Задание 20: ' + random[w]);
  w++;
} while (random[w] >= 0);

//-----------------------------------------

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

// с помощью цикла do...while выведется только 1 и 2:
// let v = 1;
// do {
//   console.log('Задание 21: ' + v);
//   v++;
// } while (!(v % 3 === 0));

// а вот так будет как нам надо
for (let i = 1; i <=100; i++) {
  if (i % 3 === 0) continue;
  console.log('Задание 21: число, не кратное 3 - ' + i);
}

//-----------------------------------------

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
function askNum () {
  let totalSum = 0;
  while(totalSum < 100) {
    let num = +prompt('Введите число', 0);
    if (typeof num === 'number' && !isNaN(num)) {
      totalSum += num;
    } else {
      alert('Вы ввели не число, необходимо ввести число');
      continue;
    }
  }
  console.log('Задание 22: сумма введённых чисел = ' + totalSum);
}

const askBtn = document.querySelector('.ask-num');
askBtn.addEventListener('click', askNum);

//-----------------------------------------

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
// function addColor() {
//   const titles4 = document.querySelectorAll('h4');
//   if(titles4.length) titles4.forEach(item => item.style.backgroundColor = 'blue');
// }

function addColor2() {
  const titles4 = document.querySelectorAll('h4');
  if(titles4.length) titles4.forEach(item => item.classList.toggle('blue'));
}

const colorBtn = document.querySelector('.ask-color');
colorBtn.addEventListener('click', addColor2);

//-----------------------------------------

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

const stringBtn = document.querySelector('.ask-string');
const stringLine = document.querySelector('.string');

function getRandString() {
  let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
    let n = Math.round(Math.random()*(alphabet.length-1));
    randomString += alphabet[n];
  }
  stringLine.textContent = randomString;
}

stringBtn.addEventListener('click', getRandString);