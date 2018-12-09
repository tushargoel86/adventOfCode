"use strict"

const fs = require('fs');
const INPUT = fs.readFileSync('day03-Input.txt').toString();

//to store current position
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var startingPos = new Position(0, 0);

//to store all the positions
var positions = [new Position(0, 0)];

INPUT.split('')
    .map(direction => {
        var allPos = positions;
        var currentPos = startingPos;

        switch (direction) {
            case '^': currentPos.x++; return storePosition(currentPos);
            case 'v': currentPos.x--; return storePosition(currentPos);
            case '>': currentPos.y++; return storePosition(currentPos);
            case '<': currentPos.y--; return storePosition(currentPos);
        }
        
        function storePosition(currPos) {
            //to find if an object already present or not
            let duplicateCounts = allPos
                .filter(pos => (pos.x === currPos.x && pos.y === currPos.y))
                .length;
            //we need to add new object otherwise values will be updated
            if (duplicateCounts == 0) {
                allPos.push(new Position(currPos.x, currPos.y));
            }
            return;
        };
    });

console.log(positions.length)
