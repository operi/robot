#!/usr/bin/env node

const fs = require('fs');
import { Robot } from './robot'
const robot = new Robot();

enum ACTION {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  REPORT = 'REPORT'
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
              console.log("Executing PLACE");
              var x_coordinate = Number(splitted_line[1]);
              var y_coordinate = Number(splitted_line[2]);
              var facing = splitted_line[3];
              robot.place(x_coordinate, y_coordinate, facing);
              break;
            }
            case ACTION.MOVE: {
                if (robot.isInitialized()) {
                    console.log("Executing MOVE");
                    robot.move();
                }
                break;
            }
            case ACTION.RIGHT: {
              if (robot.isInitialized()) {
                console.log("Executing RIGHT");
                robot.right();
              }
              break;
            }
            case ACTION.LEFT: {
                if (robot.isInitialized()) {
                    console.log("Executing LEFT");
                    robot.left();
                }
                break;
            }
            case ACTION.REPORT: {
                if (robot.isInitialized()) {
                    console.log("Executing REPORT");
                    robot.report();
                }
                break;
            }
  
        }
        
    });
  });