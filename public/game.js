const websocket = new WebSocket("ws://localhost:8081")

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;

var currentFrame = new Date();
const player = new PlayerCharacter(50, 50, 100, 100, "./witch_placeholder.png", 1, "Joseph", null);

// CORE GAME FUNCTIONS
function initGame() {

    // Starting the game loop
    gameLoop();
}

var deltaTime = 0;
var lastFrame = 0;
document.addEventListener("keydown", (e) => {
    player.move(e.key, deltaTime);
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Getting/setting deltaTime
    deltaTime = arguments[0] - lastFrame;
    lastFrame = arguments[0]

    // TODO: All moving sprites should be grouped in an array and have their
    // draw methods called together
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

function cancelGame() {
    cancelAnimationFrame(gameLoop);
}


window.onload = initGame();
