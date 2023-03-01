
// task 2

function sortArr() {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    let obj = {};

    for(let i = 0; i< arr.length; i++) {
        let sortWord = arr[i].toLowerCase().split('').sort().join('');
        console.log(sortWord)
        obj[sortWord] = arr[i]

    }    
        console.log( Object.values(obj));
    }
sortArr()
