"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('tests/t1.txt', 'utf-8');
var letters = Array.from(input);
for (var i = 3; i < letters.length; i++) {
    var marker = letters.slice(i - 4, i);
    var listOfChars = new Set(marker);
    if (listOfChars.size == 4) {
        console.log(letters[i], i);
        break;
    }
}
