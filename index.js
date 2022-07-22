
console.log("Hello World");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let reset = document.getElementById('reset');
// let selectBox = document.getElementById('select-box').value;
// console.log(selectBox);
let isGameOver = false;

 const selection = () => {
  let selectBox = document.getElementById('select-box').value


  if(selectBox === 'pl'){
    console.log("Hello");
  }else{
    console.log("Hello in else");
  }
  // console.log(selection);
 }

 selection();
 


let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxTexts = document.querySelectorAll('.box-text')
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1 , 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.forEach(e => {
    if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")){
      document.getElementsByClassName('info')[0].innerText = boxTexts[e[0]].innerText + " WON"
    isGameOver = true;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px"
    }
  })
};
// music.play();
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelectorAll(".box-text");
  element.addEventListener("click", (e) => {
    if (boxText[0].innerText === "") {
      boxText[0].innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if(!isGameOver){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  });
});


reset.addEventListener('click' , () => {
  let boxText = document.querySelectorAll(".box-text")
  Array.from(boxText).forEach(element => {
    element.innerText = "";
  })
  turn = "X";
  isGameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"
})
























// textArea.addEventListener('keyup', (e) => {
//   createTags(e.target.value);
//   if(e.key === 'Enter'){
//     setTimeout(() => {
//     e.target.value;
//     },10)
//     randomSelect();
//   }
//   })