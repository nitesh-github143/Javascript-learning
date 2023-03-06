let num1 = 6;
let num2 = num1;
console.log(num1, num2)

//reference type

let arr1 = ['i1', 'i2']
// let arr2 = ['i1', 'i2'];
// let arr2 = arr1.slice(0)
let arr2 = [...arr1, 'i3', 'i4']
// let arr2 = [].concat(arr1)
console.log(arr1 === arr2)
console.log(arr1, ' and ', arr2)
// arr2.push('i3')

console.log(arr1, ' and ', arr2)