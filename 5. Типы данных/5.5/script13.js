// task 13

function groupById(users) {
    return users.reduce((accum, item) => {
        accum[item.id] = item;
        return accum
    },{})
    }
    
    
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
        ];
      
        console.log( groupById(users));
    