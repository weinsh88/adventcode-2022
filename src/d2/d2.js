"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var rounds = (0, fs_1.readFileSync)('d2-input.txt', 'utf-8').split('\n');
var map = {
    X: 'A',
    Y: 'B',
    Z: 'C'
};
var totalScore = 0;
var index = 0;
rounds.forEach(function (round) {
    var _a = round.split(' '), opp = _a[0], you = _a[1];
    var score = 0;
    you = map[you];
    totalScore += game(you, opp);
});
function game(you, opp) {
    var score = 0;
    if (you == 'A')
        score += 1;
    if (you == 'B')
        score += 2;
    if (you == 'C')
        score += 3;
    if (you == opp)
        score += 3;
    if (you === 'B' && opp === 'A')
        score += 6;
    if (you === 'A' && opp === 'C')
        score += 6;
    if (you === 'C' && opp === 'B')
        score += 6;
    return score;
}
// Function that tabulates the score of the game
console.log(totalScore);
