"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('input.txt', 'utf-8');
var lines = input.split('\n').map(function (line) { return line.split(','); });
var count = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var pair = lines_1[_i];
    var left = pair[0].split('-').map(function (v) { return parseInt(v); });
    var right = pair[1].split('-').map(function (v) { return parseInt(v); });
    var overlap = (right[0] <= left[0] && right[1] >= left[1]) ||
        (right[0] >= left[0] && right[1] <= left[1]);
    if (overlap)
        count++;
}
console.log(count);
