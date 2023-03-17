let dictionary = Object.create(null, {
	toString : {
		value: function() {
			return Object.keys(this).join()
		}
	}
	
});


// С помощью Object.defineProperty

// let dictionary = Object.create(null);
// Object.defineProperty(dictionary, 'toString', {
// 	value : function() {
// 			return Object.keys(dictionary).join()
// 	}
// })

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}


// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"