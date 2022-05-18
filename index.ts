#!/usr/bin/env node

const fs = require('fs');
import { Robot, ACTION, FACING } from './robot'
const robot = new Robot();


function runPlace(splitted_line: string): void{
  console.log("Executing PLACE");
  var positionX = Number(splitted_line[1]);
  var positionY = Number(splitted_line[2]);
  var facing = splitted_line[3];
  robot.place({positionX, positionY, facing: FACING[facing]});
}

function runMove(): void {
  if (robot.isInitialized()) {
    robot.move();
  }
}

function runRight(): void {
  if (robot.isInitialized()) {
    robot.right();
  }
}

function runLeft(): void {
  if (robot.isInitialized()) {
    robot.left();
  }
}

function runReport(): void {
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
            default:
              console.log("Action ", splitted_line[0], " not supported");
        }
        
    });
  });