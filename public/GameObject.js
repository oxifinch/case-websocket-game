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
