let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgame = document.querySelector("#newbtn");
let msgContaner = document.querySelector(".msg-contaner");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = 'blue';
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = 'green';
        }
        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
             showwinner(pos1val);
            };
        };
    };
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContaner.classList.remove("hide");
    disablebtn();
};

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const resetgame = () => {
    turnO = true;
    enablebtn();
    msgContaner.classList.add("hide");
}

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

