console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turnOf = "X";

const changeTurn = ()=>{
    return turnOf === "X"? "0":"X";
}

//function to check win
const checkWin = ()=>{

}
// game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turnOf;
            turnOf = changeTurn();
            turn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn For" + turnOf;
        }
    })
})

