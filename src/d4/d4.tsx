import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf-8');

const lines = input.split('\n').map((line) => line.split(','));

let count = 0;

for (const pair of lines) {
	const left = pair[0].split('-').map((v) => parseInt(v));
	const right = pair[1].split('-').map((v) => parseInt(v));

	const overlap =
		(right[0] <= left[0] && right[1] >= left[1]) ||
		(right[0] >= left[0] && right[1] <= left[1]);
	if (overlap) count++;
}

console.log(count);
