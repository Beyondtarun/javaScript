/*
Arithmetic operators
exponent (**)
a**b
uniary operator ++,--
*/
console.log(8 ** 2); //64

let a = "5";
let b = 5;
console.log(a == b); //javascript implicitly convert string into number for comparision
console.log(typeof a);
console.log(a === b);
console.log(2 + 2 + "2" + 2 + 2 + 2); //42222

/*
CONDITIONAL STATEMENTS AND LOOPS
IF-ELSE
SWITCH
TERNARY OPERATOR  CONDITION ? TRUE OUTPUT : FALSE OUTPUT
*/

console.log(5 > 13 ? "true" : "false"); //teranary operator

let c = prompt("enter a number");
if (c % 5 == 0) {
  alert("multiple of 5");
} else {
  alert("no");
}
