let cells=document.querySelectorAll('.cell');
let resetbtn=document.querySelector('.reset');
let msg_win=document.querySelector('.msg_win');
let new_game=document.querySelector('.new_game');
let msg=document.querySelector('.msg');

let turn0 = true;

const winPatterns=[
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0 = true;
    enableAllCells();
    msg_win.classList.add('hide');
}

const winnerMsg=(winner)=>{
    msg.innerText = `Player ${winner} wins!`;
    msg_win.classList.remove('hide');
}        

const disableAllCells=()=>{
    cells.forEach((cell)=>{
        cell.disabled=true;
    });
}

const enableAllCells = () => {
  for (let cell of cells) {
    cell.disabled = false;
    cell.innerText = "";
  }
};

const draw=()=>{
    msg.innerText = "It's a draw!";
    msg_win.classList.remove('hide');
    disableAllCells();
}

let count=0;
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        console.log("Cell clicked");
        if(turn0)
        {
            cell.innerText="O";
            turn0=false;
        }
        else
        {
            cell.innerText="X";
            turn0=true;
        }
        cell.disabled=true;
        checkWin();
        count++;
        if(count == 9)
        {
            draw();
        }
    });
});

const checkWin=()=>{
    for(let pattern of winPatterns)
    {
        let pos1val=cells[pattern[0]].innerText;
        let pos2val=cells[pattern[1]].innerText;
        let pos3val=cells[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" && pos1val == pos2val && pos2val == pos3val)
        {
            console.log("We have a winner!");
            disableAllCells();
            winnerMsg(pos1val);
        }
    }
}

resetbtn.addEventListener("click",()=>{
    resetGame();
})
new_game.addEventListener("click",()=>{
    resetGame();
})


