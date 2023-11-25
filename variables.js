/*
1. Variables are containers to store some data or value.
2. Null means empty not Zero
3. Undefined means value is not defined.
4. JavaScript is Dynammically typed. means specifiying datatype is not needed.
5. Varaible names are case sensitive.
6. Letter, digits , _ , $ is allowed only (no space)
7. digits must not be first letter.
8. cases:  camelCase , snake_case, kabab-case , PascalCase (js convention is to use camelCase)

*/

// const age = 24;
let age = 24;
// let age = 26; give me error because let wont allow to re declare.
// age =23; give error when used age is declared with const.
firstName = "Tarun";
lastName= "Goyal";
weight= 67.2;
console.log(firstName, lastName, "Age is",age,"weight is",weight);

/*
let,const & var
es6
let->Variable cannot be redeclared but can be updated. A block scope variable.
const->Variable cannot be redeclared or updated. A block scope variable.
var->Variable can be redeclared & and updated. A global scope variable.

*/

/*
Datatypes
use typeOf(variable) to know type of varible
Primitive :
Number
String
Boolean
Undefined
Null
BigInt  (valuen) n is the last of bigInt
Symbol


Non-primitive
objects-> Arrays and funtions
ojects are collection of values
objects store Key:Value pair

for accessing specific key
obj.key
obj["key"]

*/

const student = {//key:value
    fullName : "tarun Goyal",
    age : 20,
    cgpa : 9.3,
    isPass : true
};
console.log("age of student is",student.age)
console.log(student["fullName"])
student.age= student.age+1;
console.log(student.age)

const product={
    productName : "Parker pen",
    sellingPrice: 270,
    mrp: 285,
    discount: 5,
    rating: 5,
    isDeal: true
};
console.log(product);