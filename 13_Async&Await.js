/**
 * Async - Await
 * async function myfun(){
 *
 * }
 * async always return a promise
 * await pause the execution of its surrounding async function until the promise is settled.
 * await only use inside a async function
 */

function api(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data", dataid);
      resolve(200);
    }, 2000);
  });
}

async function getData() {
  await api(1); //1ts call
  /*
  jab pehli baar await call hoga to wo saari execution is function ki rok dega
  jab pehli call funfill hogi tab 2nd await ayega;
  */
  let msg = await api(2); //2nd call
  console.log(msg);
}

//IIFE : immediatly invoked funciton expression
/*
jaha likhe jayenge whi execute honge
syntax: (function(){}) ();
*/
(async function () {
  await api(3);
  await api(4);
})();

(async () => {
  await api(5);
  await api(6);
})();
