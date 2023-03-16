function myfunc() {
    function hello() {
        console.log('hello')
    }
    return hello
}

const ans = myfunc()
console.log(ans())