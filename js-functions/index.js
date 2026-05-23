function nice(name){
    console.log(`Hey ${name} you are nice`);
    console.log(`Hey ${name} you are good`);
    console.log(`Hey ${name} you are excellent`);
    console.log(`Hey ${name} your tshirt is nice`);
    console.log(`Hey ${name} you are a nice programmer`);

    
}
nice("Pankaj")


// function with default parameters

function sum(a,b, c=3){
    return a+b+c;
}
console.log("Sum is:"+sum(5,3));

// Arrow function- 

const func1 =(x)=>{
    console.log("Arrow function "+x)

}
func1(5)