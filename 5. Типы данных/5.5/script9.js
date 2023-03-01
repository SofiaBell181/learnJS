// task 9 

function sortByAge() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    
    let arr = [ vasya, petya, masha ];

    let sortAge = arr.sort((a, b) => a.age > b.age ? 1 : -1);
    return sortAge
}

console.log(sortByAge());



