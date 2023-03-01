// task 8

function formatDate(date) {
    let now = new Date()
    let res = now.getTime() - date.getTime();
    if(res < 1000) return 'прямо сейчас';
    if(res <= 60000) return '30 сек. назад';
    if(res <= 3600000) return '5 мин. назад'

    else {
        return new Date(now - res);
    }
}

console.log( formatDate(new Date(new Date - 1)) ); 
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );