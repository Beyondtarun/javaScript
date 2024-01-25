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
 * Properties
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

let div = document.querySelector("div")
console.dir(div)
let it = div.innerText
console.log(it) 
let ih = div.innerHTML
console.log(ih)


