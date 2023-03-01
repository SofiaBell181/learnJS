// task 3

let sum = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSum(salaries) {
    for(let key in salaries) {
        sum += salaries[key];
    }

    return sum
}

console.log(getSum(salaries))