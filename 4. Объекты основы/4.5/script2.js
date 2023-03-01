//task 2

function Calculator () {

    this.read = function() {
        this.a = +prompt('Введите число a, "10"');
        this.b = +prompt('Введите число b, "10"')
    },

    this.sum = function() {
        return this.a + this.b
    },

    this.mul = function() {
        return this.a * this.b
    }
  };

  let calculator = new Calculator();

calculator.read()

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
