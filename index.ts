#!/usr/bin/env node

const fs = require('fs');
import { Robot, ACTION } from './robot'
const robot = new Robot();


function runPlace(splitted_line: string) {
  console.log("Executing PLACE");
  var x_coordinate = Number(splitted_line[1]);
  var y_coordinate = Number(splitted_line[2]);
  var facing = splitted_line[3];
  robot.place(x_coordinate, y_coordinate, facing);
}

function runMove() {
  if (robot.isInitialized()) {
    robot.move();
  }
}

function runRight() {
  if (robot.isInitialized()) {
    robot.right();
  }
}

function runLeft() {
  if (robot.isInitialized()) {
    robot.left();
  }
}

function runReport() {
  if (robot.isInitialized()) {
    robot.report();
  }
}


fs.readFile('./instructions.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data.split(/\r?\n/).forEach(line =>  {
        var splitted_line = line.split(" ");
        switch(splitted_line[0]) {
            case ACTION.PLACE: {
              runPlace(splitted_line);
              break;
            }
            case ACTION.MOVE: {
                runMove();
                break;
            }
            case ACTION.RIGHT: {
              runRight();
              break;
            }
            case ACTION.LEFT: {
                runLeft();
                break;
            }
            case ACTION.REPORT: {
                runReport();
                break;
            }
  
        }
        
    });
  });