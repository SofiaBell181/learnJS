
// task 3

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        let start = str.slice(0, maxlength);
        let end = start + '…';
        return end
    }

    else {
        return str
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20))

