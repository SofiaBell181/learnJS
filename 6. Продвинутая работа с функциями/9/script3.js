let f = debounce(alert, 1000);


function debounce(f, ms) {
	let lastCall;

	return function (...args) {
	call = new Date();

	if (call - lastCall < ms) {
	return;
	}

	lastCall = call;
	f.apply(this, args);
	
	}
}


f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)