
// task 4

function random(min,max) {
    res = 0;
    do {
        res = Math.random() * max;
    } while (res < min)

    return res
}

console.log(random(1, 5))