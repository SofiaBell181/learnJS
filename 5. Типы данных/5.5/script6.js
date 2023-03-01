// task 6

function Calculator(str) {

    this.method = {
        '+' : (x, y) => x + y,
        '-' : (x, y) => x - y
    }

    this.calculate = function (str) {
        let string = str.split(' ');
        let x = Number(string[0]);
        let operator = (string[1])
        let y = Number(string[2]);

        if(isNaN(x) || isNaN(y)) {
            return 'Введите верные значения';
        }

        return this.method[operator](x,y)
    }

    this.addMethod = function(name, func) {
        this.method[name] = func
    }
}

let calc = new Calculator;
let powerCalc = new Calculator;

console.log(calc.calculate("5 - 2"));

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (x, y) => x / y);
powerCalc.addMethod("**", (x, y) => x ** y);

console.log( powerCalc.calculate("2 * 3") );