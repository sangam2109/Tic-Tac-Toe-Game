let moves = 0;
let visited = [];
const arrx = [];
const arro = [];
const box0 = document.getElementById("demo0").textContent;
const box1 = document.getElementById("demo1").textContent;
const box2 = document.getElementById("demo2").textContent;
const box3 = document.getElementById("demo3").textContent;
const box4 = document.getElementById("demo4").textContent;
const box5 = document.getElementById("demo5").textContent;
const box6 = document.getElementById("demo6").textContent;
const box7 = document.getElementById("demo7").textContent;
const box8 = document.getElementById("demo8").textContent;
const reset=document.getElementById("reset");
let music = document.getElementById('music.mp3');

const table=document.getElementsByTagName("table");

function playAudio() {
    const audio = new Audio("ting.mp3");
    audio.play();
}
function handleClick(number) {
        
  
        if (visited[number] == true) {
            return
        }

        else {

            if (moves == 8) {
                alert("Game Over , Nobody Wins");
                location.reload();
            }
            else if (moves % 2 == 0) {
                document.getElementById("demo" + number).innerHTML = 'X';
                arrx.push(number);
                document.getElementById("box" + number).style.backgroundColor = "#ff6b6b";
            }
            else {
                document.getElementById("demo" + number).innerHTML = 'O';
                arro.push(number);
                document.getElementById("box" + number).style.backgroundColor = "#67c7eb";
            }
            moves++;
            visited[number] = true;
            
            var result = checkwinner();

            if (result) {
                const message = document.querySelector(".message");
                var answer = "Player " + result + " won the game";
       
                alert(answer);
                moves = 0
                location.reload();
            }

        }
    }
function checkwinner() {
        const winnerCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let combo of winnerCombos) {
            const [a, b, c] = combo;
            if (arrx.includes(a) && arrx.includes(b) && arrx.includes(c)) {
                return 'X';
            }
            if (arro.includes(a) && arro.includes(b) && arro.includes(c)) {
                return 'O';
            }
        }

        return null;
    }
