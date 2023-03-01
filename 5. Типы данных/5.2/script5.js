
// task 5
function randomInteger(min, max) {
    min = Math.ceil(min < max ? min : max);
    max = Math.floor(max > min ? max : min);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
console.log(randomInteger(1, 5));