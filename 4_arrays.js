/*
collection of similar items(we can add diffrent items)
Array is also a object

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


*/



/* AVERAGE MARKS 
let marks =[23,34,67,89,90]
let sum =0;
// for(let i of marks)
//  sum+=i;

marks.forEach((i)=>sum+=i)

console.log("Average Marks :",sum/marks.length)
*/

/*
DISCOUNT
let price = [100,300,450,600]
let discout = 10;

for(let i in price){
    price[i]=price[i]-(price[i]*(discout/100))
}
price.forEach((i)=>console.log(i))
*/


/*
ARRAYS METHODS
change orignal array
Push():add to end //retrun updated length
pop():delete from end return deleted item
unshit: add to start
shift:delete from start and return value
splice:(statt, deletecount, new) //return krage value //kisi bhi value ko delete kr sakte or replace bhi


donot change orignal array
toString()
concat : return new array
slice:(start, end)//ending index in non inclusive

*/
let a=[]
console.log(a.length);
console.log(a.push(10))
console.log(a.push(10,20,20))
console.log(a)
console.log(a.pop())
console.log(a.toString())
let b =[1,5,7]
let c =a.concat(b)//a.concat(arr1,arr2,arr3,.....,arrN)
console.log(c)
console.log(c.splice(2,2,101,102))
console.log(c)
console.log(c.slice(2,4))
console.log(c)
c.splice(1,1,30)//replace 1st by 30
c.splice(3,1)//delete 3ed index
c.splice(4,0,9)//add after 4th index
console.log(c)


/**
 * ARRAY METHODS
 * 
 * map
 * arr.map(callBackFn(val,index,array)) //similar to forEach but return a new array
 * 
 * filter
 * if condition is true then return the value
 * 
 * reduce
 * perform some operation & return the array to a single value. it returns that single value. 
 */

//map
display("map")
nums.map((val)=>{
  console.log(val)
})

let newArr = nums.map((val)=> {return val**2})
console.log(newArr)//map return a new array while forEach not
console.log(nums)
 //Filter
 display("filter")
let evenArray = nums.filter((val)=>{
  return val%2===0 //filter nums array ki unn value ka array return krega jispe ye condition true hogi
})
// let filter = nums.map((val)=>{
//   return val%2===0   //yha par map is condition ki true ua false ka new array bandega
// })
console.log(evenArray)
let marks=[78,98,92,40,34,56]
let distinction = marks.filter((val)=>{return val>90})
console.log(distinction)

//reduce
display("reduce ")
let reduceSum = nums.reduce((previousValue,currentValue)=>{return previousValue + currentValue})
display(reduceSum)
let prod = nums.reduce((prev,curr)=>{return prev*curr})
display(prod)
let max = nums.reduce((pre,cur)=>{return pre>cur ? pre :cur;})
display(max)