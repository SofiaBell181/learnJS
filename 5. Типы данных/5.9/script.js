let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// console.log( Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2])))


// task 1

function sumSalaries(salaries) {
    let salar = Object.values(salaries);
    sum = 0;

    for(el of salar) {
        if(el == '') {
            return 0
        }
        else {
            sum += el
        }
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log( sumSalaries(salaries));




 