/**
 * Document Object Manipulation
 * 
 * WINDOW OBJECT
 * autommatically created by browser 
 * 
 * What is DOM?
 * html ko javascript se accses krne ka trika hai DOM
 * window->object->html
 * console.dir(window.do cument)//print properties of document
 */

// alert("tarun")
// console.log("Print")
// window.console.log("print1")//same as console.log but wont work in node command
// console.log(window)
// console.log(document.body)//this print code of body
// console.dir(document.body)//this print propeties of body
// document.body.style.background='green';//change bgcolor to green
// document.body.childNodes[5].innerText="abcd";//chnage first child node of body childnodes work in odd numbers


/**
 * DOM Manipulation
 * 1. select by id // it will return id
 * document.getElementById("id")
 * 2. select by class //it will return html collection
 * document.getElementsByClassName("class")
 * 3. select by tag
 * document.getElementByTagName("tag")//h1,h2,p,etc
 * 4. Query Selector
 * document.querySelector("#id/.class/tag") //return first element
 * document.querySelectorAll("#id/.class/tag")//return node list
 * NODE:
 * 1. Text node
 * 2. Comment node
 * 3. Element node
 */


// let heading=document.getElementsByClassName("heading")
// console.dir(heading)
// // heading.innerText="tarun"
// let button = document.getElementById("button1")
// console.dir(button)
// let paras = document.getElementsByTagName("p")
// console.dir(paras)


// let elements = document.querySelector("p")
// console.dir(elements)
// let elements1 = document.querySelectorAll("p")
// console.dir(elements1)
// let headings = document.querySelector(".heading")
// console.dir(headings)
// let headingsall = document.querySelectorAll(".heading")
// console.dir(headingsall)


/**
 * PROPERTIES
 * tagName: returns tag for element nodes
 * innerText: returns the text content of the element and all its children
 * innerHTML: returns the plain text or HTML contents in the element
 * textContent : returns textual content even for hidden elements
 */
// console.log(elements.textContent)
// console.log(headings.tagName)
// console.log(headingsall[0].innerText)
// console.log(headingsall[2].innerText)
// console.log(document.body.children)//return all the children

// let div = document.querySelector("div")
// console.dir(div)
// let it = div.innerText
// console.log(it) 
// let ih = div.innerHTML
// // div.innerHTML="<h1>Tarun</h1>"//setting value
// console.log(ih)
// let tc = div.textContent
// console.log(tc)


let h2 = document.querySelector("h2")
h2.innerText+=" from Tarun Goyal";

// let div = document.querySelectorAll(".box")
// div[0].innerText="div1 tarun"
// div[1].innerText="div2 anand"
// div[2].innerText="div3 goyal"

// for(i of div){
//     i.innerText="tarun"
// }
// for(i in div){
//     div[i].innerText=`div ${i}`
// }

// for(let i=0;i<div.length;i++){
//     div[i].innerText=`tarun ${i}`
// }



/**
 * ATTRIBUTES (id/class/src/ref: additionla information in tag)
 * getAttribute(attr) //to get the attribute value
 * setAttribute(attr,value) //to set the attribute value
 * 
 * STYLE
 * node.style 
 */

let div = document.querySelectorAll("div")
console.log(div)
// let div = document.querySelector("div")
// console.log(div)
let clas = div[1].getAttribute("class")
console.log(clas)
// div.setAttribute("class","tarun")
// let clas = div.getAttribute("class")
// console.log(clas)

let d =1;
for(i of div){
i.style.height="100px"
i.style.width="100px"
i.style.background="green"
i.style.color="white"
i.innerHTML=`<h1> div ${d} </h1>`
d++;
}
div[1].style.visibility="hidden"

/**
 * INSERT ELEMENTS
 * let el = document.createElement("div")
 * node.append(el) //adds at the end of the node(inside)
 * node.prepend(el) //adds at the start of the node(inside)
 * node.befoer(el)// adds before the nodes outside
 * node.after(el)// adds after the nodes outside
 * //each element only one time
 * DELETE ELEMENTS
 * node.remove() //remove the node
 * 
 * appendChild()
 * removeChild()
 * 
 * CLASSLIST
 */
// div[2].remove()

let newbtn = document.createElement("button")
newbtn.innerText="cllick me";
div[2].append(newbtn);
let ul = document.createElement("ul")
ul.innerHTML="<li> Taurn </li>"
ul.style.color="black"

div[3].append(ul)

let newHeading =  document.createElement("h1")
newHeading.innerText="Hello"
document.querySelector("body").prepend(newHeading)
newHeading.remove()

//practice

let newbtn1 = document.createElement("button")
newbtn1.innerText="Click Me!"
newbtn1.style.backgroundColor="red"
newbtn1.style.color="white"
document.querySelector("body").prepend(newbtn1)

let para = document.querySelector("p")
//  para.setAttribute("class","new")//this will chnage the class name and remove the styling
//so i use classList
para.classList.add("new")
