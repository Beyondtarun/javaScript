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
*/
let str ="tarun";
for(let i of str){
    console.log(i);
}

let student={
    name:"taurn",
    age:20,
    class: 10,
};
for(let i in student){
    console.log(i,student[i]);
}

let num =  20;
let gameNum = prompt("Enter number");
while(gameNum){
    if(num==gameNum)
    alert("you win");
else
   alert("you loose");
gameNum=prompt("Enter number again:")
}