/**
 * EVENTS IN JAVASCRIPT
 * 
 */
let div = document.getElementsByClassName("box")
div[0].style.height="100px"
div[0].style.width="100px"
div[0].style.color="white"
div[0].style.backgroundColor="blue"
div[0].innerText="div 1"

console.dir(div)

let button = document.querySelectorAll("button")
button[0].onclick =()=>{
    console.log("hello world")
}
button[1].ondblclick=()=>{
    console.log("dboule clicke!")
}


