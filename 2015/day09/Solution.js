"use strict";

const fs = require('fs');
const INPUT = fs.readFileSync('c://Users/tgoel/Documents/docs/java-script/advent-of-code/adventOfCode/2015/day09/input.txt', 'utf-8').split('\n');
const DIRECTION_REGEX = /(\w+) to (\w+) = (\d+)/;

var cities = new Set();
var cityPair = new Map();

INPUT.forEach(line => {
            let city = line.match(DIRECTION_REGEX);
            cities.add(city[1]);      
            cities.add(city[2]);   

            cityPair.set((city[1] + "=>" + city[2]), Number(city[3]));
            cityPair.set((city[2] + "=>" + city[1]), Number(city[3]));
        });

         
function calculateDistance(input) {
    let distance = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let key = input[i] + '=>' + input[i + 1];
        distance += cityPair.get(key);
    }
    return distance;
}

var distances = new Set();

function pair(input, low, high) {
    if (low == high) {
        distances.add(calculateDistance(input));
        return;
    } else {
        for (let i = low; i < high; i++) {
            swap(input, low, i);
            pair(input, low + 1, high);
            swap(input, low, i);
        }
    }       
}

function swap(input, low, high) {
    let temp = input[low];
    input[low] = input[high];
    input[high] = temp;
}

pair([...cities], 0, cities.size);
var sortedDis = Array.of(...distances).sort();
console.log('Part1 solution: ', sortedDis[0]);
console.log('Part2 solution: ', sortedDis.reverse()[0]);

 
  