import { readFileSync } from 'fs';
export {};

let rounds = readFileSync('d2-input.txt', 'utf-8').split('\n');

const map: { [rps: string]: string } = {
	X: 'A',
	Y: 'B',
	Z: 'C',
};

let totalScore = 0;
let index = 0;

rounds.forEach((round) => {
	let [opp, you] = round.split(' ') as [string, string];
	let score = 0;

	you = map[you as 'X' | 'Y' | 'Z'];

	totalScore += game(you, opp);
});

function game(you: string, opp: string): number {
	let score = 0;

	if (you == 'A') score += 1;
	if (you == 'B') score += 2;
	if (you == 'C') score += 3;

	if (you == opp) score += 3;
	if (you === 'B' && opp === 'A') score += 6;
	if (you === 'A' && opp === 'C') score += 6;
	if (you === 'C' && opp === 'B') score += 6;

	return score;
}
// Function that tabulates the score of the game
console.log(totalScore);
