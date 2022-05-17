#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var fs = require('fs');
var robot_1 = require("./robot");
var robot = new robot_1.Robot();
fs.readFile('./instructions.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    data.split(/\r?\n/).forEach(function (line) {
        var splitted_line = line.split(" ");
        switch (splitted_line[0]) {
            case "PLACE": {
                console.log("Executing PLACE");
                var x_coordinate = Number(splitted_line[1]); // read from line
                var y_coordinate = Number(splitted_line[2]); // read from line
                var facing = splitted_line[3]; // read from line
                robot.place(x_coordinate, y_coordinate, facing);
                break;
            }
            case "MOVE": {
                if (robot.isInitialized()) {
                    console.log("Executing MOVE");
                    robot.move();
                }
                break;
            }
            case "RIGHT": {
                if (robot.isInitialized()) {
                    console.log("Executing RIGHT");
                    robot.right();
                }
                break;
            }
            case "LEFT": {
                if (robot.isInitialized()) {
                    console.log("Executing LEFT");
                    robot.left();
                }
                break;
            }
            case "REPORT": {
                if (robot.isInitialized()) {
                    console.log("Executing REPORT");
                    robot.report();
                }
                break;
            }
        }
    });
});
