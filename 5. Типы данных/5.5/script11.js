
// task 11

function getAverageAge() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };
    
    let arr = [ vasya, petya, masha ];

    return arr.reduce((accum, item) => accum + item.age, 0) / arr.length

}

console.log(getAverageAge())
