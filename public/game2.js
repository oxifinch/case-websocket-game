// load the background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    // visa bakgrundsbild
    bgReady = true;
};
bgImage.src = "";

// load player image

// load mushrooms

//  create game objects
var player1 = {
    speed: 250 //speed in pixels per second
};

// keyboard controls
var keysDown = {};

// check for keys pressed down
addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;

}, false);

addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];

}, false);

// reset the items and players when picked up
var reset = function () {
    player1.x = canvas.width / 2;
    player1.y = canvas.height / 2;

    // place items on canvas random
    mushroom.x = 32 + (Math.random() * (canvas.width - 64));
    mushroom.y = 32 + (Math.random() * (canvas.height - 64));
};

// update game - change player position based on key
var update = function(modifier) {
    if (38 in keysDown) {
        // up key
        player1.y -= player1.speed * modifier;
    }
    if (40 in keysDown) {
        // down key
        player1.y += player1.speed * modifier;
    }
    if (37 in keysDown) {
        // left key
        player1.x -= player1.speed * modifier;
    }
    if (39 in keysDown) {
        // left key
        player1.x -= player1.speed * modifier;
    }

    // check if player pick upp items
    if (
        player1.x <= (mushroom.x + 32) &&
        mushroom.x <= (player1.x + 32) &&
        player1.y <= (mushroom.y + 32) &&
        mushroom.y <= (player1.y + 32)
    ) {
        ++mushroomPicked;
        reset();
    }
};

// draw on canvas
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (player1Ready) {
        ctx.drawImage(player1Image, hero.x, hero.y);
    }
    if (mushroomReady) {
        ctx.drawImage(mushroomImage, mushroom.x, mushroom.y);
    }
}

// score and time
ctx.fillstyle = "rgb(128, 0, 128)";
ctx.font = "24px "