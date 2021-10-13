class GameManager {
    constructor(canvas, mushroomCount, startingTime) {
        this.canvas = canvas;
        this.playerList = [];
        this.mushroomList = [];

        this.mushroomCount = mushroomCount;
        this.startingTime = startingTime;
    }

    init() {
        // Add mushrooms and randomize their positions
        for(let i = 0; i < this.mushroomCount; i++) {
            this.mushroomList.push(new Mushroom(0, 0, 50, 50, "./mushroom_placeholder.png", 50));
            this.randomizeMushrooms();
        }

        // TODO: Placeholder: Adding one player
        this.playerList.push(new PlayerCharacter(50, 50, 100, 100, "./witch_placeholder.png", 0.2, "Joseph", null));
        this.resetPlayerPositions();

    }

    // TODO: This doesn't seem to do anything.
    randomizeMushrooms() {
        for(let i = 0; i < this.mushroomList; i++) {
            const currentMushroom = this.mushroomList[i];
            currentMushroom.xPos = 32 + (Math.random() * (this.canvas.width - 64));
            currentMushroom.yPos = 32 + (Math.random() * (this.canvas.height - 64));
    
        }
    }

    resetPlayerPositions() {
        // Reset PLAYER positions
        for(let i = 0; i < this.playerList.length; i++) {
            this.playerList[i].xPos = canvas.width / 2;
            this.playerList[i].yPos = canvas.height / 2;
        }
    }
}
