"use strict";

class Player {
    constructor(speed, canFlyUpto, restPeriod) {
          //in km/s
        this.speed = parseInt(speed);

        //time period till it can fly before resting
        this.canFlyUpto = parseInt(canFlyUpto);

        //rest period
        this.restPeriod = parseInt(restPeriod);
    }

    distanceTravelled(totalTimeInSec) {
        var distInOneLap = this.speed * this.canFlyUpto
        var totalTimeInOneLap = this.canFlyUpto + this.restPeriod;

        var numberOfSlots = parseInt(totalTimeInSec / totalTimeInOneLap);
        var numberOfTime =  totalTimeInSec % totalTimeInOneLap;

        //if time is left and less than the time it can fly 
        //than tim left * speed else distance in one lap
        //covered
        var totalDistance = distInOneLap * numberOfSlots 
                            + ((numberOfTime <= this.canFlyUpto) 
                                ? numberOfTime  * this.speed: distInOneLap);
  
        return totalDistance;    
    }
 }

 var fs = require('fs');
 const INPUT = fs.readFileSync('c://Users/tgoel/Documents/docs/java-script/advent-of-code/adventOfCode/2015/day14/input.txt', 'utf-8').split('\n');
 const NUM_REGEX = /[0-9]+/g;

 var distances = INPUT
                .map(line => line.match(NUM_REGEX))
                .map(data => new Player(data[0], data[1], data[2]))
                .map(player => player.distanceTravelled(2503))
                .sort();
console.log(distances.slice(-1));

