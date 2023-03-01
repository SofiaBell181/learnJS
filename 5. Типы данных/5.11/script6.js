// task 6

function getSecondsToday() {
    let date = new Date();
    let hours = date.getHours() * 3600;
    let minutes = date.getMinutes() * 60;
    let seconds = date.getSeconds();

    return (hours + minutes + seconds);
}
console.log(getSecondsToday())
