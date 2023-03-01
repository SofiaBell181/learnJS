// task 10

function shuffle(arr){
	let a, num;

	for(let i = arr.length - 1; i > 0; i--){
		a = Math.floor(Math.random() * (i + 1));
		num = arr[a];
		arr[a] = arr[i];
		arr[i] = num;
	}
	return arr;
}

console.log(shuffle( [1, 2, 3]))


