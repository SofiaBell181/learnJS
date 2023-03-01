//task 3

function Accumulator(startingValue) {

    this.value = startingValue

    this.read = function() {
        this.b = +prompt('Введите число, "10"');
        this.value += this.b;
    }

}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);