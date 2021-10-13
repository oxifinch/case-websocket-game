const websocket = new WebSocket("ws://localhost:8081")

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;

var gameManager = new GameManager(canvas, 3, 10);

// CORE GAME FUNCTIONS
function initGame() {

    gameManager.init();
    document.addEventListener("keydown", (e) => {
        gameManager.playerList[0].move(e.key, deltaTime);
    });

    // Starting the game loop
    gameLoop();
}

function checkCollisions() {
    // Loop through players and check if they collide with mushrooms
    for(let i = 0; i < gameManager.playerList.length; i++) {

        const currentPlayer = gameManager.playerList[i];

        for(let j = 0; j < gameManager.mushroomList.length; j++) {

            const currentMushroom = gameManager.mushroomList[i];

            if (
                currentPlayer.xPos <= (currentMushroom.xPos + currentMushroom.width) &&
                currentMushroom.xPos <= (currentPlayer.xPos + currentPlayer.width) &&
                currentPlayer.yPos <= (currentMushroom.yPos + currentMushroom.height) &&
                currentMushroom.yPos <= (currentPlayer.yPos + currentPlayer.height)
            ) {
                if(currentMushroom.active) {
                    currentMushroom.pickUp(currentPlayer, ctx);
                }
            }
        }
    }
}

var deltaTime = 0;
var lastFrame = 0;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < gameManager.mushroomList.length; i++) {
        const mushroom = gameManager.mushroomList[i];
        mushroom.draw(ctx);
    }

    for(let i = 0; i < gameManager.playerList.length; i++) {
        const playerCharacter = gameManager.playerList[i];
        playerCharacter.draw(ctx);
    }
}

function gameLoop() {
    // Getting/setting deltaTime
    deltaTime = arguments[0] - lastFrame;
    lastFrame = arguments[0]

    render();
    checkCollisions();

    requestAnimationFrame(gameLoop);
}

function cancelGame() {
    cancelAnimationFrame(gameLoop);
}


window.onload = initGame();
