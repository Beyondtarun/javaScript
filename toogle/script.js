let btn = document.getElementById("toggle");
let body = document.getElementsByTagName("body");
btn.innerText = "Click Me!";
btn.style.borderRadius = "10px";

let h1 = document.createElement("h1");
h1.innerText = "Color Changer";
let mode = true;

body[0].prepend(h1);

const chnageColor = () => {
  //     if(mode === "true"){
  //     body[0].style.background="black"
  //     body[0].style.color="white"
  //     mode = "false"
  //     }
  //     else if(mode === "false"){
  //         body[0].style.background="white"
  //         body[0].style.color="black"
  //         mode="true"
  //     }
  body[0].classList.toggle("dark", mode);
  body[0].classList.toggle("light", !mode);
  mode = !mode;
};

btn.addEventListener("click", chnageColor);
