console.log("Hello")

let boxes = document.getElementsByClassName("box") // getElementsByClassName

console.log(boxes)




// boxes.style.backgroundColor = "red"

boxes[1].style.backgroundColor = "blue"


document.getElementById("green").style.backgroundColor = "green" //getElementById

// Query selector selects the first element of that selector

document.querySelector(".box").style.backgroundColor="red"

// querySelectorAll return a whole collection that matches the selector

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})

// let e = document.querySelectorAll(".box")

// for(let i=0; i<e.length;i++){
//     e[i].style.backgroundColor="green"
// }

let tag =(document.getElementsByTagName("div")) // getElementsByTagName
console.log(tag)

// matches, closest methods

console.log(tag[3].matches("#green"))//matches

console.log(tag[6].closest(".container")) // closest

console.log(document.querySelector(".container").contains(tag[2])) //contains

