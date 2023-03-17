// TASK 1

function sum(a) {
		return function (b) {
			console.log(a + b)
		}
	}
	
sum(1)(2)