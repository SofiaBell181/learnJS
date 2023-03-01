// task 3

function filterRangeInPlace(arr, a, b) {
    arr.filter((item, index) => {
        if (!(a >= item && item <= b)) {
            arr.splice(index, 1)
        }
    })

    console.log(arr)
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 


