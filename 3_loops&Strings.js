/*
LOOPS:- To execute a piece of code n number of times.
1. for loop
2. while
3. Do While 
do{
    //logic
}while(condition);


4. For of loop // use for string
   for(let var of string)
5. for in loop
  //used for objects
   return all keys of objects.
   object[var]
6. forEach loop
*/
let str = "tarun";
for (let i of str) {
  console.log(i);
}

let student = {
  name: "taurn",
  age: 20,
  class: 10,
};
for (let i in student) {
  console.log(i, student[i]);
}

let num = 20;
let gameNum = prompt("Enter number");
while (num != gameNum) {
  gameNum = prompt("You loose enter number again:");
}
alert("you win");

/*
STRINGS
let str="tarun"
propertes:----
str.length //5
str[1]//a

methods:------
str.toUpperCase() //return new value doesn't change original string
str.toLowerCase()
str.trim()
str.slice(start,end)//last index in exclusive: str.slice(0,3)//tar
str1.concat(str2)
str.replace(search,new)//only replace the first occurence str.replaceAll()
str.charAt(index)

Escape Characters:
\n:-next line
\t:-tab space


Template literals
`string with ${variables}`; //String interpolation

*/

let username="tarun";
username="@".concat(username)+username.length;
console.log(username);