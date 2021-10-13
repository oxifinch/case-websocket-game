class GameObject {
    constructor(xPos, yPos, width, height, sprite) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.active = true;

        // Create an Image object from the sprite path before assigning it
        const sourceSprite = new Image(this.width, this.height);
        sourceSprite.src = sprite;
        this.sprite = sourceSprite;
    }

    draw(ctx) {
        ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
        ctx.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
    }

    hide(ctx) {
        ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
        this.active = false;
    }
}

class PlayerCharacter extends GameObject {
    constructor(xPos, yPos, width, height, sprite, speed, name, controller) {
        super(xPos, yPos, width, height, sprite);
        this.speed = speed;
        this.name = name;
        this.controller = controller;
        this.score = 0;
    }

    move(key, deltaTime) {
       switch (key) {
           case "ArrowLeft":
               this.xPos -= this.speed * deltaTime;
               break;
           case "ArrowRight": 
               this.xPos += this.speed * deltaTime;
               break;
           case "ArrowUp":
               this.yPos -= this.speed * deltaTime;
               break;
           case "ArrowDown":
               this.yPos += this.speed * deltaTime;
               break;
           default:
               break;
       } 
    }
}

class Mushroom extends GameObject {
    constructor(xPos, yPos, width, height, sprite, scoreValue) {
        super(xPos, yPos, width, height, sprite);
        this.scoreValue = scoreValue;
    }

    pickUp(player, ctx) {
        this.active = false;
        player.score += this.scoreValue;
        console.log("SCOOOORE!", player.score);
    }
}