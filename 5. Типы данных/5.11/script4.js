// task 4

function getDateAgo(date3, days) {
    currentDate = new Date(date3);
    currentDate.setDate(date3.getDate() - days);
 //    console.log(currentDate)
 }
 
 let date3 = new Date(2015, 0, 2);
 getDateAgo(date3, 1);
 getDateAgo(date3, 2);
 getDateAgo(date3, 365)
 
 