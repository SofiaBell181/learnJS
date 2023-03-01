    // task 3

function powNumber() {
    let x = prompt('Введите число', '');
    let n = Number(prompt('Возведение в степень', ''));

    if (n >= 1) {
        let res = Math.pow(x, n);

        return res;
    }

    else {
        return 'n - ненатуральное число, возведение в степень невозможно'
    }
    
}

console.log(powNumber())