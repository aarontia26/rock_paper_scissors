
let username, computerPick, userCounter = 0, computerCounter = 0;
var start_ = 0;
picksArray = ["rock", "paper", "scissors"];
function start() {
    do {
        //console.log("HEHE" + username)
        username = prompt("Enter your username");
    } while (username==""||username==null);
    document.getElementById("username").innerHTML = username.toUpperCase() + ": ";
    document.getElementById("computer").innerHTML = "COMPUTER: ";
    document.getElementById("playButton").style.display = "none";
    start_ = 1;
    //document.getElementById("insideContainerID").style.display = "block";
}
document.querySelectorAll(".playerPick").forEach(item =>{
    item.addEventListener('click', ()=>{
        console.log(start_)
        if (start_ == 1) {
            console.log("ITEM " + item.id)
            computerPick = Math.floor(Math.random() * 3);
            document.getElementById("userPick").innerHTML = "Pick: " + item.id.toUpperCase();
            document.getElementById("computerPick").innerHTML = "Pick: " + picksArray[computerPick].toUpperCase();
            if (item.id == picksArray[0]) {
                switch (computerPick) {
                    case 0:
                        console.log("DRAW");
                        document.getElementById("userPick").style.color = "gray"
                        document.getElementById("computerPick").style.color = "gray"
                        //document.getElementById("result").innerHTML = "it's a draw :|";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[0] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 1:
                        console.log("LOST");
                        document.getElementById("userPick").style.color = "red"
                        document.getElementById("computerPick").style.color = "green"
                        //computerCounter++;
                        //console.log("COMPUTER: " + computerCounter++)
                        document.getElementById("computer").innerHTML = "COMPUTER: " + ++computerCounter;
                        //document.getElementById("result").innerHTML = "you lost :(";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[0] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 2:
                        console.log("WIN");
                        document.getElementById("userPick").style.color = "green"
                        document.getElementById("computerPick").style.color = "red"
                        //userCounter++;
                        document.getElementById("username").innerHTML = username.toUpperCase() + ": " + ++userCounter;
                        //document.getElementById("result").innerHTML = "you won! :)";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[0] + " ---- computer: " + picksArray[computerPick];
                        break;
                    default:
                        break;
                }
            } else if (item.id == picksArray[1]){
                switch (computerPick) {
                    case 0:
                        console.log("WIN");
                        document.getElementById("userPick").style.color = "green"
                        document.getElementById("computerPick").style.color = "red"
                        document.getElementById("username").innerHTML = username.toUpperCase() + ": " + ++userCounter;
                        //document.getElementById("result").innerHTML = "you won! :)";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[1] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 1:
                        console.log("DRAW");
                        document.getElementById("userPick").style.color = "gray"
                        document.getElementById("computerPick").style.color = "gray"
                        //document.getElementById("result").innerHTML = "it's a draw :|";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[1] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 2:
                        console.log("LOST");
                        document.getElementById("userPick").style.color = "red"
                        document.getElementById("computerPick").style.color = "green"
                        document.getElementById("computer").innerHTML = "COMPUTER: " + ++computerCounter;
                        //document.getElementById("result").innerHTML = "you lost :)";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[1] + " ---- computer: " + picksArray[computerPick];
                        break;
                    default:
                        break;
                }
            } else if (item.id == picksArray[2]) {
                switch (computerPick) {
                    case 0:
                        console.log("LOST");
                        document.getElementById("userPick").style.color = "red"
                        document.getElementById("computerPick").style.color = "green"
                        document.getElementById("computer").innerHTML = "COMPUTER: " + ++computerCounter;
                        //document.getElementById("result").innerHTML = "you lost :(";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[2] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 1:
                        console.log("WIN");
                        document.getElementById("userPick").style.color = "green"
                        document.getElementById("computerPick").style.color = "red"
                        document.getElementById("username").innerHTML = username.toUpperCase() + ": " + ++userCounter;
                        //document.getElementById("result").innerHTML = "you won! :)";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[2] + " ---- computer: " + picksArray[computerPick];
                        break;
                    case 2:
                        console.log("DRAW");
                        document.getElementById("userPick").style.color = "gray"
                        document.getElementById("computerPick").style.color = "gray"
                        //document.getElementById("result").innerHTML = "it's a draw :|";
                        //document.getElementById("resultDetails").innerHTML = "you pick: " + picksArray[2] + " ---- computer: " + picksArray[computerPick];
                        break;
                    default:
                        break;
                }
            }     
        }
        //document.getElementById("resultContainerID").style.display = "block";
    })
})