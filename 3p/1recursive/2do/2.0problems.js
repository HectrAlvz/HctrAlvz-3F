//
// SERIES
// recursively
//

// 1. fibonacci
// -> n 
// <- 1,1,2,...,n
//
// call
// fibonacci(5) returns the 5 first numbers of the series

// 2. power
// -> b base
// -> p power
// <- b*b*...b (p times)
//
// call
// power(2,3) returns 8

// 3. factorial
// -> n
// <- 2*3*...*n
//
// call
// factorial(3) returns 6

// 1. fibonacci | fibonacci(5) returns the 5 first numbers of the series
function fibonacci(n) {
if (n === 1) {
        console.log(1)
    } else if (n === 2) {
        console.log(1)
        console.log(1)

    } else {
        console.log(1)
        console.log(1)
        let a = 1
        let b = 1
        for (let i = 3; i <= n; i++) {
            let c = a + b
            console.log(c)
            a = b
            b = c
        }
    }
    return ''
}

console.log("fibonacci")
console.log(fibonacci(5))

console.log(" ")
// 2. power | power(2,3) returns 8
function power(b, p) {
    let c = 1
    for (let i = 1; i <= p; i++) {
        c = c * b
    }
    return c
}

console.log("power")
console.log(power(2, 3))

console.log(" ")

// 3. factorial | factorial(3) returns 6
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("\nfactorial")
console.log(factorial(3))

console.log(" ")