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

const MIN_POSITION_X = 1;
const MAX_POSITION_X = 5;
const MIN_POSITION_Y = 1;
const MAX_POSITION_Y = 5;
const STEP_SIZE = 1;


class Robot {
    private positionX: number;
    private positionY: number;
    private facing: FACING;
    private initialized: boolean;

    public static isValidPosition(positionX: number, positionY: number) {
        return (positionX >= MIN_POSITION_X && positionX <= MAX_POSITION_X && positionY >= MIN_POSITION_Y && positionY <= MAX_POSITION_Y);
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
                var nextPosition = this.positionY + STEP_SIZE;
                if (!Robot.isValidPosition(this.positionX, nextPosition)) {
                    this.logInvalidMovement(this.positionX, nextPosition);
                } else {
                    this.positionY = nextPosition;
                }
                break
            }
            case FACING.SOUTH: {
                var nextPosition = this.positionY - STEP_SIZE;
                if (!Robot.isValidPosition(this.positionX, nextPosition)) {
                    this.logInvalidMovement(this.positionX, nextPosition);
                } else {
                    this.positionY = nextPosition;
                }
                break
            }
            case FACING.EAST: {
                var nextPosition = this.positionX + STEP_SIZE;
                if (!Robot.isValidPosition(nextPosition, this.positionY)) {
                    this.logInvalidMovement(nextPosition, this.positionY);
                } else {
                    this.positionX = nextPosition;
                }
                break
            }
            case FACING.WEST: {
                var nextPosition = this.positionX - STEP_SIZE;
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