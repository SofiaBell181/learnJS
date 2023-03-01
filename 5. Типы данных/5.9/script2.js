// task 2

function count(user) {
    let key = Object.keys(user);
    return key.length
}

let user = {
    name: 'John',
    age: 30
  };

console.log( count(user) ); 
