// create a faulty calculator using javasript
// this faulty calculator does the following 

// 1. it takes two numbers from users 
// 2. it performs wrong operatoins as follows 
// +----> -
// *---->+
// - --->/
// /---->**

// it performs wrong calculations 10% of the times 

let random=Math.random();

console.log(random);
let a = prompt("Enter first number")
let c= prompt("Enter operation")
let b= prompt("Enter second number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
};


if(random>0.1){
    // perform correct calculations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // perform wrong calculations
    c= obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


