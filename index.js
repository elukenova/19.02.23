// example1
function myName(name, surname) {
  console.log("My name is " + name + surname);
}

myName("Aijanyl ", "Elukenova");

pi = 3.14;
function areaReg(h, r) {
  let result = (3 / 1) * pi * r ** r * h;
  console.log("Объем конуса " + result);
}
areaReg(3, 2);

function Lengthstr(str) {
  console.log("Длина словы " + str + " - " + str.length);
}
Lengthstr("Kyrgyzstan");


function printEvenAndOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " - Even ");
  }
  else{
    console.log(num + ' - Odd');
  }
}
printEvenAndOdd(12);


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