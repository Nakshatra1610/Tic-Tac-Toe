let btns = document.querySelectorAll(".btns");
let p1 = true;
let h1 = document.querySelector("h1");
let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

function checkwinner() {
  for (let arra of arr) {
    let btn1 = btns[arra[0]].innerText;
    let btn2 = btns[arra[1]].innerText;
    let btn3 = btns[arra[2]].innerText;
    if (btn1 !== "" && btn2 !== "" && btn3 !== "") {
      if (btn1 === btn2 && btn2 === btn3) return true;
    }
  }
  return false;
}

function handlebuttonclick() {
  if (p1) {
    this.style.color = "white";
    this.innerText = "O";
    p1 = false;
  } else {
    this.style.color = "#000";
    this.innerText = "X";
    p1 = true;
  }
  this.disabled = true;

  if (checkwinner()) {
    for (const btn of btns) {
      btn.disabled = true;
    }
    h1.innerHTML = p1 ? 
      "P2 has won the game. <a onclick='restart()'>Want to restart?</a>" : 
      "P1 has won the game. <a onclick='restart()'>Want to restart?</a>";
  } else if (Array.from(btns).every(btn => btn.innerText !== "")) {
    h1.innerHTML = "The game ended in a draw. <a onclick='restart()'>Want to restart?</a>";
  }
}

function start() {
  btns.forEach((btn) => {
    btn.addEventListener("click", handlebuttonclick);
  });
}

function restart() {
  p1 = true;
  h1.innerHTML = "Welcome to the Tic-Tac-Toe game";
  for (const btn of btns) {
    btn.innerText = "";
    btn.disabled = false;
    btn.removeEventListener("click", handlebuttonclick);
  }
  start();
}

start();

task03.js