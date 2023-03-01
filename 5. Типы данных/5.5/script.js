// task 1

function camelize(text) {
    let res = text.split('-');
    let result = res.map((item,index) => {
        if(index !==0) {
            return item.slice(0,1).toUpperCase()+item.slice(1)
        }

        else {
            return item
        }

    })

    console.log(result.join(''))
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition")









