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


