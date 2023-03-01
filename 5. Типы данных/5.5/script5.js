// task 5

function copySorted(arr2) {
    return arr2.slice().sort();

}

let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
console.log(sorted);
console.log(arr2)

