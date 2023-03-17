// TASK 1

function sumTo(n) {
	let sum = 0;
	for(let i =1; i <= n; i++) {
		sum += i
	}
	return sum
}
console.log( sumTo(100) );


function sumTo2(b) {
	if (b == 1) return 1;
	else return b + sumTo(b-1);
}

console.log( sumTo2(100) );


function sumTo3(b) {
	return (b * (b +1 )) / 2;
}

console.log( sumTo3(100) );
