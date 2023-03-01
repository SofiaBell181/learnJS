
// task 3

function getMaxSubSum(arr) {
    let sum = 0;
    let factSum = 0;

    for(num of arr) {
            sum += num;

            if (sum < 0) {
                sum = 0;
                continue;
            }

            if(factSum < sum) {
                factSum = sum
            }
    }

    console.log(factSum)
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]) 
getMaxSubSum([-2, -1, 1, 2]) 
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3]) 
getMaxSubSum([-1, -2, -3])
