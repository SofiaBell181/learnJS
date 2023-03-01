
// task 2

function filterRange(array, a, b) {
    let newArr = [];

    for(let i = 0; i <= array.length; i++) {
        if(array[i] >= a && array[i] <= b) {
            newArr.push(array[i]);
        }
    }

    console.log(newArr);
    console.log(array)
}

filterRange([5, 3, 8, 1], 1, 4);


