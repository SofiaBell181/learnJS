// TASK 4
let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		value: 3,
		next: {
		  value: 4,
		  next: null
		}
	  }
	}
  };

function printList(list) {
	let arr = [list.value];
	while(list.next !== null) {
		list = list.next;
		arr.push(list.value)
	}
	arr.sort().map(item => console.log(item));
}
// printList(list);


function printList2(list) {	
	// console.log(list.value);
	if(list.next) {
		printList2(list.next);
	}
}
// printList2(list)


function printList3(list) {
	let arr = [list.value];
	while(list.next) {
		list = list.next;
		arr.push(list.value)
	}
	arr.reverse().map(item => console.log(item));
}

// printList3(list);


function printList4(list) {	
	let arr = [];

	for(let i = 0; list; i++) {
		arr[i] = list.value;
		list = list.next;
	}
	arr.reverse().map((item) => console.log(item));
}
printList4(list)

