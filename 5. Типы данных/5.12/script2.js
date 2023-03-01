// task 2


let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    if (key == 'place') return value.place;
    else if (key == 'occupiedBy') return value;
    else if (key == 'self') return undefined;
    return value;
  }));
