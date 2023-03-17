
const inBetween = (a,b) => (item) => item >= a && item <= b;
const inArray = (arr) => (item) => item = arr[item] ;

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10, 3])));

