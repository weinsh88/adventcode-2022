"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var _a = input.split('\n\n'), crates = _a[0], moves = _a[1];
var stacks = [];
var addToStack = crates.split('\n').reverse().slice(1);
console.log(crates.split('\n').reverse());
var _loop_1 = function (i) {
    console.log(addToStack[i]);
    stacks.push(addToStack.map(function (r) { return r.slice(i * 4, i * 4 + 3); }).filter(function (x) { return x !== '   '; }));
};
for (var i = 0; i < (addToStack[0].length + 1) / 4; i++) {
    _loop_1(i);
}
var listOfMoves = moves.split('\n');
// For each line in list of moves, if character is a digit
// 1) add list of digits, where 0 pos represents number of moves,
// 	  pos1 represents the stack from which to pop the elsement
// 	  pos2 is the dest of the element
// 2) Pop num moves top() elements from stack at pos1 and push on pos2
// 2) repeat 1) and 2) n-times corresponding to n-moves
listOfMoves.forEach(function (move) {
    var _a;
    var pattern = /move (\d+) from (\d+) to (\d+)/;
    var match = pattern.exec(move);
    if (match === null)
        throw new Error("Unexpected string format: '".concat(move, "'"));
    var qty = match[1], from = match[2], to = match[3];
    var cnt = parseInt(qty);
    var src = parseInt(from) - 1;
    var dest = parseInt(to) - 1;
    var contents = stacks[src].splice(-cnt);
    (_a = stacks[dest]).push.apply(_a, contents.reverse());
});
var ans = stacks.map(function (s) { return s.at(-1); }).join('');
console.log(ans);
