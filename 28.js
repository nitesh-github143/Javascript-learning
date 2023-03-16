// lexical scope

function myApp() {
    function myFunc() { }
    const myFUnc2 = function () { }
    const myFunc3 = () => { }
    console.log('hi')
}

myApp()