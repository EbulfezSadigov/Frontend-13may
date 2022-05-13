"Use strict"

// 2. Bir funksiya yazırsız hansı ki, n qəbul edib n ci fibonaçi rəqəmini qaytarır.
//     let n1=0;
//     let n2=1;
//     let sum=0;
// function fib(n){
//     for (let i = 2; i < n; i++) {
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     return sum;
// }
// console.log(fib(5))


// 3. Prompt ilə istifadəçi n ədədini daxil edir. Proqram n ci fibonaçi rəqəmini alert edir. (Yuxarıdakı funksiyanı çağıraraq)
let a=0;
let b=1;
let sum1=0;
let n=prompt();
function fib(n){
for (let i = 2; i < n; i++) {
    sum1=a+b;
    a=b;
    b=sum1;
}
return sum1;
}
alert("Fibonacci number is "+fib(n))
console.log(fib(n))