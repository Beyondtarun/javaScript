/*
collection of similar items(we can add diffrent items)
Array is also a object
*/

let a = [10,20,30];

console.log(a)
console.log("length of array",a.length)
console.log(a[2])
a[2]=90;
console.log("value of last index changesd",a)
console.log("type of array",typeof(a)) // typeof a

//standard for loop
for(let i=0;i<a.length;i++){
    console.log("standard for loop",a[i])
}

//for each loop
a.forEach((i )=> console.log("for each loop", i))

//for of loop
for(let i of a){
    console.log("for of loop",i);
}

//for in loop
for(let i in a){
    console.log("for in loop",a[i])//console.log(i) return indices
}