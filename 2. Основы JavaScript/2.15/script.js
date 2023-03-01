// task 1

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?')
}

//   checkAge(19)

function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?')
}

// checkAge(17)





