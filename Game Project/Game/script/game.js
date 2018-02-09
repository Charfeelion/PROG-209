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
let feedback = document.getElementById("feedback");
let newGame = document.getElementById("gameStart");

//---Objects---\\
var player = {
    commands: ["left", "right", "scale in", "scale out", "learn", "create"],
    learned: [],
    currentRoom: "",
    commandCompare: function (compare) {    //compares userInput to commands
        let flag = false;
        console.log(compare == this.commands[0]);
        for (var i = 0; i < this.commands.length; i++) {
            if (compare == this.commands[i]) {
                flag = true;    //comparison has been found!
                break;
            }
        }
        return flag;
    }

}

var map_universe = {
    image: "url('images/universe.png') no-repeat center",
    text: "You are currently observing our universe. Some say it is infinite, while others say it has a boundary...",
    learn: function (){
        player.learned.push("universe");
    },
    left: function(){
        feedback.innerText = "You cannot proceed this way.";
    },
    right: function(){

    },
    scaleIn: function(){

    },
    scaleOut: function(){

    }
    
}

var map_supercluster = {
    image: "url('images/supercluster.jpg') no-repeat center",
    text: ""
}

//---Functions---\\

function render() {
    let input = userInput.value;
    if (player.commandCompare(input)) {
        switch (userInput.value) {
            case "left":
                eval(player.currentRoom).left();
                break;
            case "right":
                break;
            case "scale in":
                eval(player.currentRoom).scaleIn();
                break;
            case "scale out":
                break;
            case "learn":
                eval(player.currentRoom).learn();
                break;
            case "create":
                break;
        }
    }
    feedback.innerText = eval(player.currentRoom).text;
    view.style.background = eval(player.currentRoom).image;
}

function saveGame() {
    if (confirm("Warning! Saving will overwrite data. Continue?")) {
        localStorage.clear();
        localStorage.setItem("learned", JSON.stringify(player.learned));    //save learned items into array
        localStorage.setItem("map", player.currentRoom);
    }
    else {
        //do nothing
    }
}

function loadGame() {
    player.learned = JSON.parse(localStorage.getItem("learned"));
    player.currentRoom = localStorage.getItem("map");

    userInput.value = "";
    render();
}

function clearSave() {
    localStorage.clear();
}

function start() {
    player.currentRoom = "map_universe";
    userInput.value = "";
    render();
}

//---Events---\\
var room = eval(player.currentRoom);
enter.addEventListener("click", render, false);
save.addEventListener("click", saveGame, false);
load.addEventListener("click", loadGame, false);
clear.addEventListener("click", clearSave, false);
newGame.addEventListener("click", start, false);