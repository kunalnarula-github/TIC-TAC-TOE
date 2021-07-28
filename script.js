const b1 = document.getElementById('grid1')
const b2 = document.getElementById('grid2')
const b3 = document.getElementById('grid3')
const b4 = document.getElementById('grid4')
const b5 = document.getElementById('grid5')
const b6 = document.getElementById('grid6')
const b7 = document.getElementById('grid7')
const b8 = document.getElementById('grid8')
const b9 = document.getElementById('grid9')
const all = document.getElementsByClassName('items')
const screen = document.getElementsByClassName('winningScreen')
const refreshButtonWin = document.getElementById('playAgainWin')
const refreshButtonDraw = document.getElementById('playAgainDraw')
const xButton = document.getElementById('x')
const oButton = document.getElementById('o')
const multiplayerButton = document.getElementById('multiplayer')
const singleplayerButton = document.getElementById('singleplayer')


// Boxes Available
let boxes = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

// Declaration and initialisation
let a = 0
let x = 'X'
let o = 'O'

// Selection
xButton.onclick = function changeToX() {
    document.getElementById("symbolselect").setAttribute("hidden",true)
}

oButton.onclick = function changeToO() {
    x = 'O'
    o = 'X'
    document.getElementById("symbolselect").setAttribute("hidden",true)
}

// winner
let winner = []
let draw = []

// Singleplayer
singleplayerButton.onclick = function changeTosingleplayer() {
    document.getElementById("openingScreen").setAttribute("hidden",true);
    document.getElementById("symbolselect").removeAttribute("hidden");
    for(let i = 0; i<boxes.length; i++){
        boxes[i].onclick = function singlePlayerAddSymbol() {
            if (boxes[i].innerText == ''){
                boxes[i].innerText = x;
                draw.push(i)
            }
            else {
                alert('ALREADY A VALUE !')
                return;
            }
            draw.push(i)
            for(let j = 0; j<boxes.length; j++) {
            if (boxes[j].innerText == ''){
                a = Math.trunc(Math.random()*9)
            if (boxes[a].innerText == ''){
                setTimeout(function(){ boxes[a].innerText = o;}, 1000);
            } else {
               do {
                   a = Math.trunc(Math.random()*9)
                } while (boxes[a].innerText != '')
            }
            setTimeout(function(){ boxes[a].innerText = o;}, 1000);
            }
            console.log(draw.length)

            // If X wins the Match
            if ((b1.innerText == x && b2.innerText == x && b3.innerText == x) || (b1.innerText == x && b4.innerText == x && b7.innerText == x) || (b1.innerText == x && b5.innerText == x && b9.innerText == x) || (b2.innerText == x && b5.innerText == x && b8.innerText == x) || (b3.innerText == x && b6.innerText == x && b9.innerText == x) || (b3.innerText == x && b5.innerText == x && b7.innerText == x) || (b4.innerText == x && b5.innerText == x && b6.innerText == x) || (b7.innerText == x && b8.innerText == x && b9.innerText == x) ){
                    document.getElementById("winningScreen").removeAttribute("hidden");
                    return;
            }
            }
            // If the Match draws
            if ((draw.length == 10) && (winner.length == 0)){
                document.getElementById("drawScreen").removeAttribute("hidden");
                return
            }          
        }
    }
}

// Multiplayer
multiplayerButton.onclick = function changeTomultiplayerplayer() {
    document.getElementById("openingScreen").setAttribute("hidden",true);
    document.getElementById("symbolselect").removeAttribute("hidden");
    for(let i = 0; i<boxes.length; i++){
        boxes[i].onclick = function multiPlayerAddSymbol() {
                if ((boxes[i].innerText == '') && (draw.length == 0 || draw.length % 2 ==0) ){
                    boxes[i].innerText = x;
                    draw.push(i);
                }
                else if(boxes[i].innerText == '' && draw.length % 2 != 0){
                    boxes[i].innerText = o;
                    draw.push(i);
                }
                if ((b1.innerText == x && b2.innerText == x && b3.innerText == x) || (b1.innerText == x && b4.innerText == x && b7.innerText == x) || (b1.innerText == x && b5.innerText == x && b9.innerText == x) || (b2.innerText == x && b5.innerText == x && b8.innerText == x) || (b3.innerText == x && b6.innerText == x && b9.innerText == x) || (b3.innerText == x && b5.innerText == x && b7.innerText == x) || (b4.innerText == x && b5.innerText == x && b6.innerText == x) || (b7.innerText == x && b8.innerText == x && b9.innerText == x) || (b1.innerText == o && b2.innerText == o && b3.innerText == o) || (b1.innerText == o && b4.innerText == o && b7.innerText == o) || (b1.innerText == o && b5.innerText == o && b9.innerText == o) || (b2.innerText == o && b5.innerText == o && b8.innerText == o) || (b3.innerText == o && b6.innerText == o && b9.innerText == o) || (b3.innerText == o && b5.innerText == o && b7.innerText == o) || (b4.innerText == o && b5.innerText == o && b6.innerText == o) || (b7.innerText == o && b8.innerText == o && b9.innerText == o) ){
                    document.getElementById("winningScreen").removeAttribute("hidden");
                    return;
                }
                if ((draw.length == 9) && (winner.length == 0)){
                    document.getElementById("drawScreen").removeAttribute("hidden");
                    return
                }
                console.log(draw.length)
            }
}
}
refreshButtonDraw.onclick = function restartDraw() {
    location.reload()
}
refreshButtonWin.onclick = function restartWin() {
    location.reload()
}
