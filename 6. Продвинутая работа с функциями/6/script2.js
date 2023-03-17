let sum = function (a) {

	sum.toString = function() {
	let res = sum.res;
	sum.res = 0;
	return res;
	};
	
	if (sum.res) {
		sum.res += a;
	} 
	else {
		sum.res = a;
	}
	
	return sum;
	}


console.log( sum(5)(10)(3) );