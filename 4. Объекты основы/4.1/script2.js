// task 2
let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(schedule) {

    for(let key in schedule) {
        return  false
    }

    return true;
}

console.log(isEmpty(schedule));