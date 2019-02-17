"use strict";

var fs = require('fs');

const INPUT = fs.readFileSync('C:\\Users\\tgoel\\Documents\\docs\\java-script\\advent-of-code\\adventOfCode\\2015\\day13\\input.txt', "utf-8").split('\n');
var attendees = new Set();
var der = {}

INPUT.map(line => line.match(/[\w]+/g))
                  .forEach(data => {
                      attendees.add(data[0]);
                      der[`${data[0]}:${data.slice(-1)}`] = (data[2] === "gain" ? parseInt(data[3]) : parseInt(-data[3]));
                  });

//calculate all permutations using backtracking algorithm
var permute = (data, count, buffer, result, level) => {   
   if (level === buffer.length) { 
       result.push([...buffer]);
       return;
    }

    for (var i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            buffer[level] = data[i];
            count[i] -= 1;
            permute(data, count, buffer, result, level + 1);
            count[i] += 1;
        }
    }
}

attendees.forEach(attendee => {
                der[`${attendee}:Tushar`] = 0;
                der[`Tushar:${attendee}`] = 0;
               });
attendees.add('Tushar');
                        
var count = Array(attendees.size).fill().map((_, i) => 1);
var buffer = Array(attendees.size).fill(null);
var result = [];
var level = 0;

permute([...attendees], count, buffer, result, level);

const totalHappiness =  result.reduce((totalHappiness, permutations) => {
      const total = permutations.reduce((total, person, index, arr) => {
               const leftOne = arr[(index + 1) > arr.length - 1 ? 0 : index + 1];
               const rightOne = arr[(index - 1) < 0 ? arr.length - 1: index - 1];

               total += der[`${person}:${leftOne}`] + der[`${person}:${rightOne}`]
               return total;
          }, 0);
     return total > totalHappiness ? total : totalHappiness;
   }, 0);

totalHappiness
