// example1
function myName(name, surname) {
  console.log("My name is " + name + surname);
}

myName("Aijanyl ", "Elukenova");

// example 2
pi = 3.14;
function areaReg(h, r) {
  let result = (3 / 1) * pi * r ** r * h;
  console.log("Объем конуса " + result);
}
areaReg(3, 2);

// example 3
function Lengthstr(str) {
  console.log("Длина словы " + str + " - " + str.length);
}
Lengthstr("Kyrgyzstan");

// example 4
function printEvenAndOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " - Even ");
  }
  else{
    console.log(num + ' - Odd');
  }
}
printEvenAndOdd(12);

// example 5
function squareNum(a) {
  return a * a;
}
console.log(squareNum(5));

// example 6
function sqrtNum(x) {
  return Math.sqrt(x);
}
console.log(sqrtNum(81));

// example 7
function rectanglePer(a, b, c, d, e) {
  return 2 * (a + b);
}
console.log(rectanglePer(12, 9));

// example 8
for (let i = 0; i < 33; i+= 3) {
  console.log(i);
  
}

// example 9
let factorial = 1;
for(let i = 1; i <= 8; i++) {
  factorial *= i;
}
console.log(factorial);

// example 10
let sqrt = 1;
for (let i = 1; i <= 10; i++) {
  sqrt = i ** 2;
  console.log(sqrt);
}

// example 11
total = 1;
for (let i = 1; i <= 25; i++) {
  total = total + i;
}
console.log(total);

// example 12
for (let i = 0; i < 20; i = i + 2) {
  console.log(i); 
}

// example 13
for (let i = 1; i < 15; i += 2){
  console.log(i);
}
