let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let divCont = document.getElementsByClassName("container");
let turnO = true; //for tracking turn
let newBtn = document.createElement("button"); // adding button for new game
newBtn.innerText = "New Game";
newBtn.classList.add("reset");

let msg = document.createElement("h2"); //adding winning msg
msg.style.marginTop = "10px";
msg.style.color = "red";

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btn.forEach((val) => {
  val.addEventListener("click", () => {
    if (turnO) {
      val.innerText = "O";
      turnO = false;
    } else {
      val.innerText = "X";
      turnO = true;
    }
    val.disabled = true;
    checkWinner();
  });
});


const disableBtn = () => {
  btn.forEach((val) => {
    val.disabled = true;
  });
};


const EnableBtn = () => {
  btn.forEach((val) => {
    val.disabled = false;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}!!!`;
  divCont[0].before(msg);
  resetBtn.before(newBtn);
  resetBtn.style.visibility = "hidden";
};

const checkWinner = () => {
  for (let pattern of patterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   btn[pattern[0]].innerText,
    //   btn[pattern[1]].innerText,
    //   btn[pattern[2]].innerText
    // );
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        disableBtn();
        showWinner(pos1);
      }
    }
  }
};
// for(let i=0; i<btn.length;i++){
//     btn[i].addEventListener("click",()=>{
//         if(turnO){
//             btn[i].innerText="O"
//             turnO=false
//         }else{
//             btn[i].innerText="X"
//             turnO=true
//         }
//       btn[i].disabled=true
//     })
// }

const resetGame = () => {
  turnO = true;
  btn.forEach((val) => {
    val.innerText = "";
  });
  resetBtn.style.visibility = "visible";
  msg.remove();
  newBtn.remove();
  EnableBtn();
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
