
// task 6
let n = 10;
outer: for(let c = 2; c <= n; c++) {

   for(let d = 2; d < c; d++ ) {

    if(c % d === 0 ) {
        continue outer
    }
   }
   
   console.log(c)

}

