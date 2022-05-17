class Robot {
    positionX: number;
    positionY: number;
    facing: string;
    initialized: boolean;

    isValidPosition(positionX: number, positionY: number) {
        return (positionX >= 1 && positionX <= 5 && positionY <= 1 && positionY >= 5);
    }

    place(positionX: number, positionY: number, facing: string) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.facing = facing;
        this.initialized = true;
    }

    isInitialized() {
        return this.initialized;
    }

    move() {
        switch(this.facing) {
            case "NORTH": {
                var next_position = this.positionY + 1;
                if (!this.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                } else {
                    this.positionY = next_position;
                }
                break
            }
            case "SOUTH": {
                var next_position = this.positionY - 1;
                if (!this.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                } else {
                    this.positionY = next_position;
                }
                break
            }
            case "EAST": {
                var next_position = this.positionX + 1;
                if (!this.isValidPosition(next_position, this.positionY)) {
                    console.log("Invalid movement");
                } else {
                    this.positionX = next_position;
                }
                break
            }
            case "WEST": {
                var next_position = this.positionX - 1;
                if (!this.isValidPosition(next_position, this.positionY)) {
                    console.log("Invalid movement");
                } else {
                    this.positionX = next_position;
                }
                break
            }
        }
    }

    left() {
        switch(this.facing) {
            case "NORTH": {
                this.facing = "WEST";
                break
            }
            case "SOUTH": {
                this.facing = "EAST";
                break
            }
            case "EAST": {
                this.facing = "NORTH";
                break
            }
            case "WEST": {
                this.facing = "SOUTH";
                break
            }
        }
    }

    right() {
        switch(this.facing) {
            case "NORTH": {
                this.facing = "EAST";
                break
            }
            case "SOUTH": {
                this.facing = "WEST";
                break
            }
            case "EAST": {
                this.facing = "SOUTH";
                break
            }
            case "WEST": {
                this.facing = "NORTH";
                break
            }
        }
    }

    report() {
        console.log("I'm placed at Position X: ", this.positionX, ", Position Y: ", this.positionY, " , and facing ", this.facing);
    }
}

export { Robot }