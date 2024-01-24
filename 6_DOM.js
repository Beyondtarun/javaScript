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
console.log("Print")
window.console.log("print1")//same as console.log but wont work in node command
console.log(window)
console.log(document.body)//this print code of body
console.dir(document.body)//this print propeties of body
document.body.style.background='green';//change bgcolor to green
document.body.childNodes[5].innerText="abcd";//chnage first child node of body 
/**
 * DOM Manipulation
 */