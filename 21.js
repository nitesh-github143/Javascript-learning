const person = {
    name: 'Nitesh',
    age: 22,
    hobbies: ['guitar', 'reading']
}

//for in loop

// for (let key in person) {
//     console.log(key, ':', person[key])
// }

//object keys

console.log(Object.keys(person))

for (let key of Object.keys(person)) {
    console.log(person[key])
}

