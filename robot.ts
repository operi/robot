enum ACTION {
    PLACE = 'PLACE',
    MOVE = 'MOVE',
    RIGHT = 'RIGHT',
    LEFT = 'LEFT',
    REPORT = 'REPORT'
}

enum FACING {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    WEST = 'WEST',
    EAST = 'EAST'
}

class Robot {
    positionX: number;
    positionY: number;
    facing: string;
    initialized: boolean;

    public static isValidPosition(positionX: number, positionY: number) {
        return (positionX >= 1 && positionX <= 5 && positionY >= 1 && positionY <= 5);
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    getFacing() {
        return this.facing;
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
            case FACING.NORTH: {
                var next_position = this.positionY + 1;
                if (!Robot.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                } else {
                    this.positionY = next_position;
                }
                break
            }
            case FACING.SOUTH: {
                var next_position = this.positionY - 1;
                if (!Robot.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                } else {
                    this.positionY = next_position;
                }
                break
            }
            case FACING.EAST: {
                var next_position = this.positionX + 1;
                if (!Robot.isValidPosition(next_position, this.positionY)) {
                    console.log("Invalid movement");
                } else {
                    this.positionX = next_position;
                }
                break
            }
            case FACING.WEST: {
                var next_position = this.positionX - 1;
                if (!Robot.isValidPosition(next_position, this.positionY)) {
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
            case FACING.NORTH: {
                this.facing = FACING.WEST;
                break
            }
            case FACING.SOUTH: {
                this.facing = FACING.EAST;
                break
            }
            case FACING.EAST: {
                this.facing = FACING.NORTH;
                break
            }
            case FACING.WEST: {
                this.facing = FACING.SOUTH;
                break
            }
        }
    }

    right() {
        switch(this.facing) {
            case FACING.NORTH: {
                this.facing = FACING.EAST;
                break
            }
            case FACING.SOUTH: {
                this.facing = FACING.WEST;
                break
            }
            case FACING.EAST: {
                this.facing = FACING.SOUTH;
                break
            }
            case FACING.WEST: {
                this.facing = FACING.NORTH;
                break
            }
        }
    }

    report() {
        console.log("I'm placed at Position X: ", this.positionX, ", Position Y: ", this.positionY, " , and facing ", this.facing);
    }
}

export { Robot, ACTION, FACING }