let arr =[1,2,3,4,5,7];
console.log(arr)
console.log(arr.length)

// Arrays are mutable unlike string and data type of array is object 

arr[0]=10;
console.log(arr)

// converting array to string
// console.log(arr.toString())

// console.log(arr.join(" - "))

// array operations

arr.pop()    //push method
console.log(arr)

arr.push(100) //pop method
console.log(arr)

arr.push("Pankaj") //pushing string
console.log(arr)

delete arr[0] //delete method remove element but keeps allocated memory
console.log(arr)

let numbers = [5,2,1,3,4]

numbers.splice(0,1) // splice method delete element from x to y
console.log(numbers)


console.log(numbers.slice(1,2))//slice
console.log(numbers)


console.log(numbers.sort())

// for each loop (arrow function version )

let fruits = ["Apple", "Banana", "Mango", "Graped", "Cherry"]

fruits.forEach((fruit, index ,array) => {
    console.log(index, fruit, array)
    
});

// for in loop in

Object.prototype.d=4; // syntax for global object- it is inherited by every object by default

let obj ={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    // if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];

    console.log(element)
    
}

// for of loop

for (const element of fruits) {
    console.log(element)
}


// map creates a new array by performing some opeartions on existing array

let arr2 = [1,3,5,7,11]

// using conventional for loop

// let arr3 =[]
// arr2.forEach(element => {
//     arr3.push(element**2)
// });
// console.log(arr3)

// using map

let newarr = arr2.map((element)=>{
    return element**2;
});

console.log(newarr)

// filter. example- elements greater than 5 
console.log(arr2.filter((e)=>{
    if(e>5){
        return true
    }
    else return false
}))


// reduce 

let arr3 = [1,2,3,4,5]

const sum =(a,b)=>{
    return a+b;
}

console.log(arr3.reduce(sum))
console.log(sum(5, 4))

// Array.from function can create array from different objects like string

console.log(Array.from("Harry"))


