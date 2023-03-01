
// task 2

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = 0;

    if (salaries === null) return null;

    else {
        for(const [name, salary] of Object.entries(salaries)) {
            if(salary > maxSalary) {
                maxSalary = salary;
                maxName = name
            }
        }
        return maxName
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(topSalary(salaries))