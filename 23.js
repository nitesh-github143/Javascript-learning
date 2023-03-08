//spread operator

const array1 = [1, 2, 3]
const array2 = [5, 6, 7]

// const newArray = [...array1, ...array2]
const newArray = [...'abcde']

console.log(newArray)

//spread operator in object

const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

const obj2 = {
    key3: 'value3',
    key4: 'value4'
}
const newonj = { ...'abcdefghijklmnop' }
console.log(newonj)