
// task 2

function sumInput() {
    let arr = [];
    let sum = 0;
    let a = 0;

    while (isFinite(a) && a !== '' && a !== null) {
        a = prompt('Введите число', 10); 
    
    if (isFinite(a) && a !== '' && a !== null) arr.push(+a)

    }
    
    for(a of arr) {
        sum += +a
    }
    console.log(sum)
}

sumInput()