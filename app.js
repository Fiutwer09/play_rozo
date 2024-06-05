const btnRock = document.getElementById('btn-rock');
const btnPaper= document.getElementById('btn-paper');
const btnscissor = document.getElementById('btn-Scissor');
const tittleUser = document.getElementById('tittle-User')
const tittleCpu = document.getElementById('tittle-Cpu')
const userChoiceImg = document.getElementById('user-choice-img');
const cpuChoiceImg = document.getElementById('cpu-choice-img');
const userCounter = document.getElementById('user-counter'); 
const cpuCounter = document.getElementById('cpu-counter');
const resultTitle = document.getElementById('result');
const reloadButton = document.getElementById('reload');


let userWins = 0;
let cpuWins = 0;

btnRock.addEventListener("click", userPlayRock);
btnPaper.addEventListener("click", userPlaypaper);
btnscissor.addEventListener("click", userPlayScissor);
reloadButton.addEventListener('click', reset);


function reset(){
    userWins = 0;
    cpuWins = 0;
    
    userCounter.textContent = userWins;
    cpuCounter.textContent = cpuWins;
    resultTitle.textContent = "Game Result";
    tittleUser.textContent = "Here is your choice!";
    tittleCpu.textContent = "The CPU chooses!";
    userChoiceImg.src = "./src/img/Scissors.JPG";
    cpuChoiceImg.src = "./src/img/rock.JPG";
};


function userPlayRock() {
    let userChoice = "rock";
    tittleUser.textContent = "Your choice is rock"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "./src/img/rock.JPG";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);

};

function userPlaypaper() {
    let userChoice = "paper";
    tittleUser.textContent = "Your choice is paper"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "./src/img/paper.JPG";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);

};
function userPlayScissor() {
    let userChoice = "scissors";
    tittleUser.textContent = "Your choice is scissors"
    tittleUser.classList.remove('tittle-User')
    tittleCpu.classList.remove('tittle-Cpu')
    userChoiceImg.src = "./src/img/Scissors.JPG";
    let cpuChoice = updateCpuChoice();
    updateGameResult(userChoice, cpuChoice);
};

function updateCpuChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let cpuChoice;
    if (randomNumber === 0) {
        cpuChoice = "rock";
        tittleCpu.textContent = "The CPU chooses rock";
        cpuChoiceImg.src = "./src/img/rock.JPG";
    } else if (randomNumber === 1) {
        cpuChoice = "paper";
        tittleCpu.textContent = "The CPU chooses paper";
        cpuChoiceImg.src = "./src/img/paper.JPG";
    } else {
        cpuChoice = "scissors";
        tittleCpu.textContent = "The CPU chooses scissors";
        cpuChoiceImg.src = "./src/img/Scissors.JPG";
    }

    return cpuChoice;
};

function updateGameResult(userChoice, cpuChoice) {
    if (userWins < 3 && cpuWins < 3) {
        if (userChoice === cpuChoice) {
            resultTitle.textContent = "¡TIE!";
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {
            resultTitle.textContent = "¡YOU WON!";
            userWins++;
        } else {
            resultTitle.textContent = "¡YOU LOST!";
            cpuWins++;
        }
        userCounter.textContent = userWins;
        cpuCounter.textContent = cpuWins;
    }
    
    if (userWins === 3 || cpuWins === 3) {
        if (userWins === 3) {
            Swal.fire({
                title: "Congratulations :) , !you won!",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
            });
        } else {
            Swal.fire({
                title: " You lost :( , ¡The CPU has won!",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                `
            });
        }

        // userWins = 0;
        // cpuWins = 0;
        // userCounter.textContent = 0;
        // cpuCounter.textContent = 0;
    }
};


function getRandomNumber(min, max) {
  return Math.floor(Math.random) * (max - min + 1) + min;
};

