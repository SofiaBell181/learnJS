function f(x) {
	console.log(x)
  }
  
  function throttle(f, ms) {
		let timer = 0;
		func = null;

		return function() {
			func = () => f.apply(this, arguments);
			if(timer == 0) step();
			
		function step() {
		  if(func === null) {
			timer = 0;
			return;
		  }
		  
		  func();
		  func = null;
		  
		  timer = setTimeout(step, ms);
		}
	  };
  }

  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
  
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано