"use strict";

const fs = require('fs');
const INPUT = fs.readFileSync('input.txt', 'utf-8').split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

const WIRES = new Map();

const BITWISE_METHODS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: a => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b
};

const parseInstruction = instruction => {
    let command = instruction.match(COMMAND_REGEX);
    let args = instruction.match(ARGUMENTS_REGEX);
    let destination = args.pop();

    return {
        //instruction may not have any command
        command: command && command[0],
        args: args.map(arg => isNaN(arg) ? arg : Number(arg)),
        destination: destination
    };
};

const calculateWire = wireName => {
    const wire = WIRES.get(wireName);

    if (typeof wire === 'number') return wire;
    if (typeof wireName === 'number') return wireName;
    if (typeof wire === 'undefined') return undefined;

    if (!wire.command) {
        WIRES.set(wireName, calculateWire(wire.args[0]));
    } else {
        WIRES.set(wireName,
            BITWISE_METHODS[wire.command](
                calculateWire(wire.args[0]), calculateWire(wire.args[1])));
    }

    return WIRES.get(wireName);
};

INPUT
    .map(instruction => parseInstruction(instruction))
    .forEach(parseInstr => 
        WIRES.set(parseInstr.destination,
             { command: parseInstr.command, args: parseInstr.args }));


WIRES.set('b', 956);
let aWire = calculateWire('a')
console.log(aWire);
