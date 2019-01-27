"use strict";

//sorted condition to sort an array
const SORT_BY_DISTANCE = (a, b) => {
    return a.distance > b.distance
                    ? -1
                    : (a.distance < b.distance ? 1 : 0);
}

const SORT_BY_PRIZE = (a, b) => {
    return a.prize > b.prize
                    ? -1
                    : (a.prize < b.prize ? 1 : 0);
}

//return fastest player and if more than one player
//has same value than it returns all players
const fastestPlayers = (players) => {  
    var sortedPlayers = players.sort(SORT_BY_DISTANCE);
    return sortedPlayers
                .filter(player => 
                    player.distance === sortedPlayers[0].distance);
} ;


class Player {
    constructor(speed, stamina, restPeriod) {
        this.speed = parseInt(speed);
        this.stamina = parseInt(stamina);
        this.restPeriod = parseInt(restPeriod);

        this.time = stamina;
        this.canMove = true;
        this.distance = 0;
        this.prize = 0;
    }

    move() {
       // move if flytime <= stamina
       if (this.time > 0 && this.canMove) {
           this.distance += this.speed;
           this.time -= 1;
       } else {     
           this.time += 1;
           // if rest period is over than it moves again
           this.canMove = this.time >= this.restPeriod; 
           
           if (this.canMove) {
              this.time = this.stamina;
           }
       }
    }

    updatePrize() {
        this.prize += 1;
    }
}


var fs = require('fs');

const INPUT = fs.readFileSync('c://Users/tgoel/Documents/docs/java-script/advent-of-code/adventOfCode/2015/day14/input.txt', 'utf-8')
                 .split('\n');

const NUMERICAL = /[0-9]+/g;
const players = INPUT.map(line => line.match(NUMERICAL))
                     .map(str => new Player(str[0], str[1], str[2]));

for (var i = 0; i < 2503; i++) {
    //move all player
    players.forEach(player => player.move());

    //find out which player(s) are leading
    var leadingPlayers = fastestPlayers(players);
    
    //update prize for that player(s)
    leadingPlayers.forEach(player => player.updatePrize());
}

players.sort(SORT_BY_PRIZE);

console.log(players[0].prize);



     

