const websocket = new WebSocket("ws://localhost:8081")

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;

var playerList = [new PlayerCharacter(50, 50, 100, 100, "./witch_placeholder.png", 0.2, "Joseph", null)];
var mushroomList = [new Mushroom(100, 100, 50, 50, "./mushroom_placeholder.png", 500)];

// CORE GAME FUNCTIONS
function initGame() {

    // Starting the game loop
    gameLoop();
}

function checkCollisions() {
    // Loop through players and check if they collide with mushrooms
    for(let i = 0; i < playerList.length; i++) {

        const currentPlayer = playerList[i];

        for(let j = 0; j < mushroomList.length; j++) {

            const currentMushroom = mushroomList[i];

            if (
                currentPlayer.xPos <= (currentMushroom.xPos + 32) &&
                currentMushroom.xPos <= (currentPlayer.xPos + 32) &&
                currentPlayer.yPos <= (currentMushroom.yPos + 32) &&
                currentMushroom.yPos <= (currentPlayer.yPos + 32)
            ) {
                if(currentMushroom.active) {
                    currentMushroom.pickUp(currentPlayer, ctx);
                }
            }
        }
        
    }
}

function resetGame() {
    // Reset PLAYER positions
    for(let i = 0; i < playerList.length; i++) {
        playerList[i].xPos = canvas.width / 2;
        playerList[i].yPos = canvas.height / 2;

    }
    
    // Place random MUSHROOMS
    for(let i = 0; i < mushroomList; i++) {
        mushroomList[i].xPos = 32 + (Math.random() * (canvas.width - 64));
        mushroomList[i].yPos = 32 + (Math.random() * (canvas.height - 64));

    }
};

var deltaTime = 0;
var lastFrame = 0;
document.addEventListener("keydown", (e) => {
    playerList[0].move(e.key, deltaTime);
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Getting/setting deltaTime
    deltaTime = arguments[0] - lastFrame;
    lastFrame = arguments[0]

    // TODO: All moving sprites should be grouped in an array and have their
    // draw methods called together
    playerList[0].draw(ctx);
    mushroomList[0].draw(ctx);
    checkCollisions();

    requestAnimationFrame(gameLoop);
}

function cancelGame() {
    cancelAnimationFrame(gameLoop);
}


window.onload = initGame();
