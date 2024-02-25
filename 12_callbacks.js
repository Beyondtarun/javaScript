/**
 * Asynchronous programming: Due to Sync programming sometimes imp instructions get blocked due to some previous insturctions, which cause a delay in the UI. Asynchronous code execution allows to excute next instructions immediately and doesn't block the flow.
 * Synchronous programming: means the code runs in a particular sequence of instrutions given in the programme. Each instruction wiats for the previous instructions to complete its execution.
 *  
 */
/**
 * CallBacks Promises & Async Await
 *
 * async await >> promise chains >> callback hell
 */

/**
 * CALL BACK
 * 
 */
/**
 * setTimeout(fn, time)// time should be in milliseconds
 */

console.log("one")
console.log("two")
console.log("three")

// function hello(){
//     console.log("hello function after 2 seconds");
// }
setTimeout(()=>{
    console.log("hi i am tarun")
},2000); //this funciton execute hello function after 4s ; 1s = 1000ms
