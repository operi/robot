"use strict";
exports.__esModule = true;
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.isValidPosition = function (positionX, positionY) {
        return (positionX >= 1 && positionX <= 5 && positionY <= 1 && positionY >= 5);
    };
    Robot.prototype.place = function (positionX, positionY, facing) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.facing = facing;
        this.initialized = true;
    };
    Robot.prototype.isInitialized = function () {
        return this.initialized;
    };
    Robot.prototype.move = function () {
        switch (this.facing) {
            case "NORTH": {
                var next_position = this.positionY + 1;
                if (!this.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                }
                else {
                    this.positionY = next_position;
                }
                break;
            }
            case "SOUTH": {
                var next_position = this.positionY - 1;
                if (!this.isValidPosition(this.positionX, next_position)) {
                    console.log("Invalid movement");
                }
                else {
                    this.positionY = next_position;
                }
                break;
            }
            case "EAST": {
                var next_position = this.positionX + 1;
                if (!this.isValidPosition(next_position, this.positionY)) {
                    console.log("Invalid movement");
                }
                else {
                    this.positionX = next_position;
                }
                break;
            }
            case "WEST": {
                var next_position = this.positionX - 1;
                if (!this.isValidPosition(next_position, this.positionY)) {
                    console.log("Invalid movement");
                }
                else {
                    this.positionX = next_position;
                }
                break;
            }
        }
    };
    Robot.prototype.left = function () {
        switch (this.facing) {
            case "NORTH": {
                this.facing = "WEST";
                break;
            }
            case "SOUTH": {
                this.facing = "EAST";
                break;
            }
            case "EAST": {
                this.facing = "NORTH";
                break;
            }
            case "WEST": {
                this.facing = "SOUTH";
                break;
            }
        }
    };
    Robot.prototype.right = function () {
        switch (this.facing) {
            case "NORTH": {
                this.facing = "EAST";
                break;
            }
            case "SOUTH": {
                this.facing = "WEST";
                break;
            }
            case "EAST": {
                this.facing = "SOUTH";
                break;
            }
            case "WEST": {
                this.facing = "NORTH";
                break;
            }
        }
    };
    Robot.prototype.report = function () {
        console.log("I'm placed at Position X: ", this.positionX, ", Position Y: ", this.positionY, " , and facing ", this.facing);
    };
    return Robot;
}());
exports.Robot = Robot;
