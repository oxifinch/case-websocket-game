class GameObject {
    constructor(xPos, yPos, width, height, sprite) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;

        // Create an Image object from the sprite path before assigning it
        const sourceSprite = new Image(this.width, this.height);
        sourceSprite.src = sprite;
        this.sprite = sourceSprite;
    }

    draw(ctx) {
        ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
        ctx.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
    }
}

class PlayerCharacter extends GameObject {
    constructor(xPos, yPos, width, height, sprite, speed, name, controller) {
        super(xPos, yPos, width, height, sprite);
        this.speed = speed;
        this.name = name;
        this.controller = controller;
    }

    move(key, deltaTime) {
       switch (key) {
           case "ArrowLeft":
               console.log("MOVE LEFT");
               this.xPos -= this.speed * deltaTime;
               break;
           case "ArrowRight": 
               console.log("MOVE RIGHT");
               this.xPos += this.speed * deltaTime;
               break;
           case "ArrowUp":
               console.log("MOVE UP");
               this.yPos -= this.speed * deltaTime;
               break;
           case "ArrowDown":
               console.log("MOVE DOWN");
               this.yPos += this.speed * deltaTime;
               break;
           default:
               break;
       } 
    }
}
