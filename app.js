let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
const msg=document.getElementById("msg");
const msgCon = document.querySelector(".msg-con");
const newGameBtn=document.getElementById("new");
const ResetGameBtn=document.getElementById("res");
const icon = document.getElementById("image")
const winptn=[
[0,1,2],
[0,3,6],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWin=(winner)=>{
    msg.innerText=`${winner} is the Winner!`;
    msgCon.classList.remove("hide"); 
    disableBoxes(); 
}

function checkWinner(){
    for(let pattern of winptn){
        let p1V=boxes[pattern[0]].innerText;
        let p2V=boxes[pattern[1]].innerText;
        let p3V=boxes[pattern[2]].innerText;

        if(p1V!="" && p2V!="" && p3V!="" && p1V===p2V && p2V===p3V & p3V===p1V){
            console.log("Winner is: ",p1V);
            showWin(p1V);
        }
    }
}

function resetGame(){
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
ResetGameBtn.addEventListener("click", resetGame);
var islight = true;
icon.addEventListener('click',()=>{
    const bod = document.body
    let boxes=document.getElementsByClassName("box");
    if(islight){
        bod.style.backgroundColor = "#142020"
        bod.style.color = "#ffffff"
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "#474747";
        }
        icon.src = "dark-mode.png"
        islight = false;
    }else{
        bod.style.backgroundColor = "#548687"
        bod.style.color = "black"
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "#ffffc7";
        }
        icon.src = "light-mode.png"
        islight = true;
    }
})