
// task 2
function checkSpam(str) {
    let res = str.toLowerCase();

    return res.includes('viagra') || (res.includes('xxx')) ? true : false

}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
