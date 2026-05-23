console.log("Hi im loops");

// for loop

for(let i=1;i<=100;i++){
    console.log(i);
}

let obj={

    a:1,
    b:2,
    c:3
         
};

// for in loop - used for object

for (const key in obj) {
    
    
    const element = obj[key];
    console.log(key,element)
    
    
}
// for of loop - mostly used for arrays

for (let c of "Pankaj") {
     console.log(c);    
}


// while loop

let i =0;
while(i<5){
    console.log("Hello");
    i++;
}


// do while loop
let j=0
do{

    console.log(j);
    j++;
}while(j<5);