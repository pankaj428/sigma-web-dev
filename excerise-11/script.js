//  find the factorial using for loop and reduce 


let n = Number(prompt("Enter a number:"))

// using for loop

function facfor(num) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("factorial using for loop: " + fact)
}

// using reduce



function factorial(num) {

    if (num < 0) {
        console.log("Negative numbers are not allowed")
    } else {
        if (num == 0) {
            console.log(1)
        }
        else {
            let arr = Array.from(Array(num + 1).keys())// shortcut for creating array

            arr2 = arr.splice(1)
            console.log(arr2)
            let fact = arr2.reduce((a, b) => { return a * b })
            console.log("factorial: " + fact)
        }
    }
}
factorial(n)
facfor(n)




