/**
 * EVENTS IN JAVASCRIPT
 * onclick
 * ondblclick
 * onmouseover
 */
/**
 * priority given to JS over inline event
 * event can handle only once
 */
let div = document.getElementsByClassName("box")
div[0].style.height="100px"
div[0].style.width="100px"
div[0].style.color="white"
div[0].style.backgroundColor="blue"
div[0].innerText="div 1"

console.dir(div)

let button = document.querySelectorAll("button")
// button[0].onclick =()=>{
//     console.log("hello world")
// }
button[1].ondblclick=()=>{
    console.log("dboule clicke!")
}
div[0].onmouseover=()=>{
    console.log("heelo div")
    div[0].style.visibility="hidden"
}

/**
 * EVENT OBJECT
 * it is a special ibject that gas details about the event
 * all event handlers have access to the event object's properties and methods
 * 
 * node.event=(e)=>{ 
 * //handle here
 * }
 * e.target, e.type, e.clientX, e.clientY
 */
button[0].onclick =(e)=>{
    console.log("hello world")
    console.log(e.type)
    console.log(e.target)
    console.log(e)
}
button[0].onclick =(e)=>{ //override the above one
    console.log("hello world")
}


/**
 * EVENT LISTENERS
 * (same event pe multiple action perfrom ho sakte hai)
 * node.addEventListener(event,callback)
 * node.removeEventListner(event,callback)
 * 
 * callback ka refernce same hona chahiye
 */

button[0].addEventListener("click",()=>{
    console.log("click one")
})
const handle2 = ()=>{
    console.log("handler2")
}
button[0].addEventListener("click",handle2)
// button[0].removeEventListener("click",handle2)
