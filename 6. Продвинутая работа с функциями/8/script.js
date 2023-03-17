
function printNumbers(from, to) {
 let start = from;

setTimeout(function time() {	
	console.log(start);

	if(start < to) {
		setTimeout(time,1000)
	}
	start++;
	
 }, 1000)
}

// printNumbers(5, 10);


function printNumbers(from, to) {
	let start = from;
   
	let time = setInterval(() => {	
	   console.log(start);
   
	   if(start == to) {
		   clearInterval(time)
	   }
	   start++;
	   
	}, 1000)
   }
   
   printNumbers(5, 10);