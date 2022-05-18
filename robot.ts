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
    facing: FACING;
    initialized: boolean;

    public static isValidPosition(positionX: number, positionY: number) {
        return (positionX >= 1 && positionX <= 5 && positionY >= 1 && positionY <= 5);
    }

    getPositionX(): number {
        return this.positionX;
    }

    getPositionY(): number {
        return this.positionY;
    }

    getFacing(): FACING {
        return this.facing;
    }

    place(data: {positionX: number, positionY: number, facing: FACING}): void {
        if (!Robot.isValidPosition(data.positionX, data.positionY)) {
            console.log("Invalid position");
            return;
        }
        Object.assign(this, data);
        this.initialized = true;
    }

    isInitialized(): boolean {
        return this.initialized;
    }

    logInvalidMovement(positionX: number, positionY: number): void {
        console.log("Invalid movement. Can not go to (", positionX, ", ", positionY, ")");
    }

    move(): void {
        switch(this.facing) {
            case FACING.NORTH: {
                var nextPosition = this.positionY + 1;
                if (!Robot.isValidPosition(this.positionX, nextPosition)) {
                    this.logInvalidMovement(this.positionX, nextPosition);
                } else {
                    this.positionY = nextPosition;
                }
                break
            }
            case FACING.SOUTH: {
                var nextPosition = this.positionY - 1;
                if (!Robot.isValidPosition(this.positionX, nextPosition)) {
                    this.logInvalidMovement(this.positionX, nextPosition);
                } else {
                    this.positionY = nextPosition;
                }
                break
            }
            case FACING.EAST: {
                var nextPosition = this.positionX + 1;
                if (!Robot.isValidPosition(nextPosition, this.positionY)) {
                    this.logInvalidMovement(nextPosition, this.positionY);
                } else {
                    this.positionX = nextPosition;
                }
                break
            }
            case FACING.WEST: {
                var nextPosition = this.positionX - 1;
                if (!Robot.isValidPosition(nextPosition, this.positionY)) {
                    this.logInvalidMovement(nextPosition, this.positionY);
                } else {
                    this.positionX = nextPosition;
                }
                break
            }
        }
    }

    left(): void {
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

    right(): void {
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

    report(): void {
        console.log("I'm placed at Position X: ", this.positionX, ", Position Y: ", this.positionY, " , and facing ", this.facing);
    }
}

export { Robot, ACTION, FACING }