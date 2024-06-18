function calNums(s) {
    let sum = 0;
    for (let i = 0; i <= s; i++) {
        sum += i;
    }
    return sum;
}

console.log(calNums(3))