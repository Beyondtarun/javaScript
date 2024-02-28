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
 * callback is an argument to another function, use it without ()..
 *
 */
/**
 * setTimeout(fn, time)// time should be in milliseconds
 */

console.log("one");
console.log("two");
console.log("three");

// function hello(){
//     console.log("hello function after 2 seconds");
// }
// setTimeout(()=>{
//     console.log("hi i am tarun")
// },2000); //this funciton execute hello function after 4s ; 1s = 1000ms

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, fn) {
  //fn is callback
  fn(a, b);
}

calculator(100, 20, (a, b) => {
  console.log(a + b);
});

// setTimeout(()=>{
//     for(var i =0;i<5;i++)
//     {
//         console.log(i)
//     }
// }, 7000);

/**
 * callback hell: nested callbacks stacked below one another forming a pyramid structure
 * Programming becomes difficult to understand
 */

function getData(DataID, getNextData) {
  setTimeout(() => {
    console.log("data", DataID);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

//callback hell  (Pyramid of Doom)
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});

//to overcome this difficulty and management prmomises introduced

/**
 * PROMISES : is for "eventual" completion of task. it is an object in JS.
 * It is a solution to callback hell.
 *
 * let promise = new Promise((resolve, reject) => {.....})
 *
 * Promise is a class; resolve,reject is a function ( call backs  provided by javascript)
 *
 * 3 states:
 * 1. pending : the result is undefined
 * 2. fullfilled : the result is a value
 * 3. reject : the result is an error
 *
 */

let promi = new Promise((resolve, reject) => {
  console.log("i am a promise");
  // resolve("success")  // js automatically create  resolve method
  // reject("error")
});
console.log(promi);

//generaly hum promises create nhi krte. Jab hum kisi API ko request karte hai to wo promise return krti hai.

// let result = getData(123); // get data will return a promise, after said time it return the data and resolve the promise

/*
Ab promise ya to fullfill hpga ya reject hoga pending ka hum kuch kar nhi sakte

to agar resolve hojae to  .then() ka istemal hoga
agar reject hojaye to .catch() ka istemal hoga

pro.then((res)=>{...})
pro.catch((erj)=>{...})
*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am  a orimise");
    resolve("sucess");
    // reject("rejected")
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("prmise resolce", res);
});

promise.catch((rej) => {
  console.log("rejected", rej);
});

/**
 Promise Chain  

 promise1.then(()=>{
    promise2.then()....
 })
 */

function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("sucesss");
    }, 4000);
  });
}
function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("sucesss");
    }, 4000);
  });
}

console.log("fetching data 1........");
let promis = async1();
promis.then((res) => {
  console.log(res);
  console.log("fetching data 2........");

  let p2 = async2();
  p2.then((res) => {
    console.log(res);
  });
});


//actucal syntax of promise chain
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      //reject(error)
    }, 3000);
  });
}

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });


 
