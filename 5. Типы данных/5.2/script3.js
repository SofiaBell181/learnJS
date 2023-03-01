
// task 3

function readNumber() {
    let a = prompt('Ввелите число a', '');

    if(a === '' || a === null) {
        return null
    }

    else if(isFinite(a)) {
       return +a
    }

    else {
        return readNumber()
    }
}

console.log(readNumber())