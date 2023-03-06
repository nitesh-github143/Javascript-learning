//falsy values

//false '' null undefined 0

let age = 15;

if (age >= 18) {
    console.log('can play games');
} else {
    console.log('cannot')
}

let num = 15;
if (num % 2 == 0) {
    console.log('even')
} else {
    console.log('odd')
}

//ternary operator

let drink;

let result = age >= 5 ? drink = 'coke' : drink = 'milk';
console.log(result)