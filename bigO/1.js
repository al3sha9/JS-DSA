// how to calculate sum upto a given number

// technique 1 =>   complexity = O(N)
function calNums(s) {
    let sum = 0;
    for (let i = 0; i <= s; i++) {
        sum += i;
    }
    return sum;
}



let t1 = performance.now();
console.log(`For Loop method: ${calNums(10000000)}`);

let t2 = performance.now();
console.log(`for loop method took time of: ${(t2 - t1) / 1000}seconds`);


console.log('\n');
// technique 2 => complexity = O(1)

function UptoN(s) {
    return s * (s + 1) / 2;
}



let t3 = performance.now();
console.log(`No For Loop method: ${UptoN(10000000)}`);
let t4 = performance.now();
console.log(`No for loop method took time of: ${(t4 - t3) / 1000}seconds`);