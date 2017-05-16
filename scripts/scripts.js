//0 = empty, 1 = coin, 2 = wall, 3 = cherry
var world = [
            [2,2,2,2,2,2,2,2,2,2],
            [2,0,1,2,1,1,1,1,1,2],
            [2,1,1,2,1,2,2,2,1,2],
            [2,1,1,2,1,2,1,2,1,2],
            [0,1,1,2,3,2,1,2,1,0],
            [2,1,1,2,2,2,1,2,1,2],
            [2,1,1,1,1,1,1,2,1,2],
            [2,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2]
            ];

var score = 0;

var pacman = {
    x: 1,
    y: 1
};

var movement;

function displayWorld(){
    var output = '';

    console.log("dipslaying world");
    console.log(document.getElementById('world'));
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

function movePacman(e){
    if (e.keyCode == 37){
        //left
        $('#pacman').css("transform","rotate(180deg)");
        if(world[pacman.y][pacman.x-1] != 2){
            pacman.x--;
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
        if(world[pacman.y-1][pacman.x] != 2){
            pacman.y--;
        }
    }
    else if(e.keyCode == 40){
        //down
        $('#pacman').css("transform","rotate(90deg)");
        if(world[pacman.y+1][pacman.x] != 2){
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
    displayScore();
    
});