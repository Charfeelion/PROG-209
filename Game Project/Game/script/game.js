//
//
//
//
//
//
//
//
//
//

//---Globals---\\
let view = document.getElementById("game");
let enter = document.getElementById("play");
let save = document.getElementById("save");
let load = document.getElementById("load");
let userInput = document.getElementById("input");
userInput = "";

//---Objects---\\
var player = {
    commands: ["left", "right", "scale in", "scale out", "learn", "create"],
    learned: [],
    currentRoom: ""

}

//---Functions---\\

function render() {
    
    view.style.background = "black";
}

function saveGame() {
    if (confirm("Warning! Saving will overwrite data. Continue?")) {
        localStorage.clear();
        localStorage.setItem("learned", JSON.stringify(player.learned));
    }
    else {
        //do nothing
    }
}

function loadGame() {
    player.learned = JSON.parse(localStorage.getItem("learned"));
    render();
}

function clearSave() {
    localStorage.clear();
}

//---Events---\\

enter.addEventListener("click", render, false);
save.addEventListener("click", saveGame, false);
load.addEventListener("click", loadGame, false);
clear.addEventListener("click", clearSave, false);