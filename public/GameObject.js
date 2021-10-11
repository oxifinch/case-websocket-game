class GameObject {
    constructor(xPos, yPos, width, height, sprite) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
    }

    draw(ctx) {
        ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
        ctx.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
    }
}
