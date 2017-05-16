//0 = empty, 1 = coin, 2 = wall, 3 = cherry
var world = [
            [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2],
            [2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2],
            [2,3,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,3,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
            [1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
            [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
            [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
            [2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
            [2,3,2,2,2,2,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,2,2,2,2,3,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2]
            ];

var score = 0;

var pacman = {
    x: 1,
    y: 1
};

var ghost = {
    x: 14,
    y: 14
}

var movement;
var ghostmove;

function displayWorld(){
    var output = '';

    // console.log("dipslaying world");
    // console.log(document.getElementById('world'));
    for (var i=0; i < world.length; i++){
        output += "<div class='row'>";
        for (var j=0; j < world[i].length; j++){
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] === 0)
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayGhost() {
    document.getElementById('ghost').style.top = ghost.y*20+"px";
    document.getElementById('ghost').style.left = ghost.x*20+"px";
}

function moveGhost(){
    var direction = Math.floor(Math.random() * 4);
    // 0 = up, 1 = right, 2 = down, 3 = left
    console.log(direction);

    if (direction == 3){
        //left
        // $('#ghost').css("transform","rotate(0deg)");
        
        if(world[ghost.y][ghost.x-1] != 2){
            ghost.x--;
            console.log("ghost going left");

            if(ghost.x==-1){
                ghost.x = world[ghost.y].length-1;
            }
        }
        else {
            moveGhost();
        }
    }
    else if(direction == 1){
        //right
        // $('#ghost').css("transform","rotate(deg)");
        if(world[ghost.y][ghost.x+1] != 2){
            console.log("ghost going right");
            ghost.x++;
            if(ghost.x==world[ghost.y].length){
                ghost.x = 0;
            }
        }
        else {
            moveGhost();
        }
    }
    else if(direction == 0){
        //up
        console.log("ghost going up");
        if(ghost.y==0){
            ghost.y = world.length-1;
        }else if(world[ghost.y-1][ghost.x] != 2){
            ghost.y--;
        }
        else {
            moveGhost();
        }
    }
    else if(direction == 2){
        //down
        console.log("ghost going down");
        if(ghost.y==world.length-1){
            ghost.y = 0;
        }else if(world[ghost.y+1][ghost.x] != 2){
            ghost.y++;
        }
        else {
            moveGhost();
        }
    }
    
    displayGhost();
    // if (world[pacman.y][pacman.x] == 1){
    //     world[pacman.y][pacman.x] = 0;
    //     score+=10;
    //     displayWorld();
    //     displayScore();
    // }else if(world[pacman.y][pacman.x] == 3){
    //     world[pacman.y][pacman.x] = 0;
    //     score+=100;
    //     displayWorld();
    //     displayScore();
    // }
}

function movePacman(e){
    if (e.keyCode == 37){
        //left
        $('#pacman').css("transform","rotate(180deg)");
        if(world[pacman.y][pacman.x-1] != 2){
            pacman.x--;
            // console.log(pacman.x);
            if(pacman.x==-1){
                pacman.x = world[pacman.y].length-1;
            }
        }
    }
    else if(e.keyCode == 39){
        //right
        $('#pacman').css("transform","rotate(0deg)");
        if(world[pacman.y][pacman.x+1] != 2){
            pacman.x++;
            if(pacman.x==world[pacman.y].length){
                pacman.x = 0;
            }
        }
    }
    else if(e.keyCode == 38){
        //up
        $('#pacman').css("transform","rotate(270deg)");
        if(pacman.y==0){
            pacman.y = world.length-1;
        }else if(world[pacman.y-1][pacman.x] != 2){
            pacman.y--;
        }
    }
    else if(e.keyCode == 40){
        //down
        $('#pacman').css("transform","rotate(90deg)");
        if(pacman.y==world.length-1){
            pacman.y = 0;
        }else if(world[pacman.y+1][pacman.x] != 2){
            pacman.y++;
        }
    }
    
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }else if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=100;
        displayWorld();
        displayScore();
    }

    displayPacman();
}

document.onkeydown = function(e){
    clearInterval(movement);
    movePacman(e);
    movement = setInterval(function(){
        movePacman(e);
    },400);
};

$(document).ready(function(){
    
    displayWorld();
    displayPacman();
    displayGhost();
    setInterval(moveGhost, 400);
    displayScore();
    
});