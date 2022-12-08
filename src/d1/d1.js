"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('d1-input.txt', 'utf-8');
var groups = input.split('\n\n');
var sums = groups.map(function (group) {
    var numbers = group.split('\n').map(function (s) { return parseInt(s, 10); });
    return numbers.reduce(function (a, b) { return a + b; }, 0);
});
var max = Math.max.apply(Math, sums);
console.log(max);
