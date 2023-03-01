// task 2

function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ',  'ПТ', 'СБ' ];
    let day = week[date.getDay()]
    console.log(day);
}
 let date = new Date(2014, 0, 3);
getWeekDay(date)



