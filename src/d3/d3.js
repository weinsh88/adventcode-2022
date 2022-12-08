"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('d3-input.txt', 'utf-8');
var lines = input.split('\n');
var sum = 0;
var letterToIndex = function (letter) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.indexOf(letter) + 1;
};
lines.forEach(function (line) {
    var sz = line.length / 2;
    var c1 = new Set(Array.from(line.slice(0, sz)).map(function (l) { return letterToIndex(l); }));
    var c2 = Array.from(line.slice(sz)).map(function (l) { return letterToIndex(l); });
    var val = 0;
    c2.forEach(function (num) {
        if (c1.has(num))
            val = num;
    });
    sum += val;
});
console.log(sum);
