
// task 7

function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let res = tomorrow - date;
    return Math.round(res / 1000); 
}

console.log(getSecondsToTomorrow())

