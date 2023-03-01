// task 1 

let calculator = {

    read() {
        this.a = +prompt('Введите число a, "10"');
        this.b = +prompt('Введите число b, "10"')
    },

    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    }
  };

  console.log(calculator)
  calculator.read()
  console.log(calculator.sum());
  console.log( calculator.mul());


