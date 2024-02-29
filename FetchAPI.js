/*
Fetch API provides an interface for fetching (sending/receiving resource).

it use Request and Response objects
The Fetch() method is used to fetch a resource(data).


let promise = fetch ( url , [options]);
 

*/
const url = "https://cat-fact.herokuapp.com/facts";

// let data = fetch(url);
// data.then((res)=>{
//     console.log(res)
// })
const para = document.querySelectorAll(".box");
// const factBtn = document.querySelector(".factbtn")
const factBtn = document.getElementById("btn")

const getFacts = async ()=>{
    console.log("fetching data");
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();
console.log(data)
    for( let i  in data)
    para[i].innerHTML=data[i].text;
}
// factBtn.addEventListener("click", getFacts)
factBtn.onclick=()=>{
    getFacts();
}
// (async ()=>{
//     console.log("fetching data");
//     let response = await fetch(url);
//     console.log(response)
//     let data = await response.json();
//     console.log(data)
// })(); IIEF 

/*
GET request : wo request jo kuch data lane ka kaam kregi
by default fetchAPI get request bhejega


*/