//create a business name generator by combining list of adjectives and shop name and another word 

/**
adjectives:
Crazy
Amazing
Fire

shop name:
Engine
Foods
Garments

another word:
bros
limited
hub

 
 */

// let random = Math.random()
// let first, second,third;

// //generating first name
// if(random<0.33){
//     first = "crazy"
// }
// else if(random>=0.33 && random<0.66){
//     first = "Amazing"
// }
// else{
//     first = "Fire"
// }

// // generating second name

// random = Math.random()
// if(random<0.33){
//     second = "Engine"
// }
// else if(random>=0.33 && random<0.66){
//     second = "Foods"
// }
// else{
//     second = "Garments"
// }

// //generating third number 

// random = Math.random()
// if(random<0.33){
//     third = "bros"
// }
// else if(random>=0.33 && random<0.66){
//     third = "limited"
// }
// else{
//     third = "hub"
// }

// console.log(`${first} ${second} ${third}`)

//  better approach using arrays 

// let adjectives = ["Crazy", "Amazing", "Fire"]
// let shopname = ["Engine", "Foods", "Garments"]
// let suffixes = ["Bros", "Limited", "Hub"]

// let first = adjectives[Math.floor(Math.random() * adjectives.length)]

// let second = shopname[Math.floor(Math.random() * shopname.length)]

// let third = suffixes[Math.floor(Math.random() * suffixes.length)]

// console.log(`${first} ${second} ${third}`)

// avoid duplicates using sets. sets automatically remove duplications 

let uniquename = new Set()
while (uniquename.size < 27) {
    let adjectives = ["Crazy", "Amazing", "Fire"]
    let shopname = ["Engine", "Foods", "Garments"]
    let suffixes = ["Bros", "Limited", "Hub"]

    let first = adjectives[Math.floor(Math.random() * adjectives.length)]

    let second = shopname[Math.floor(Math.random() * shopname.length)]

    let third = suffixes[Math.floor(Math.random() * suffixes.length)]

    let businessname=`${first} ${second} ${third}`

    uniquename.add(businessname)

}
console.log(uniquename)