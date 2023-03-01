// task 9 

let login = prompt('Введите логин', '')
if (login === 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
        console.log('Здравствуйте!')
    }

    else {
        console.log('Неверный пароль') 
    }
}

else if (login === '' || login === null){
    console.log('Отменено')
}

else {
    console.log('Я вас не знаю')
}