// task 1

function unique(arr) {
  let array = Array.from(new Set(arr));
  return array
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))




