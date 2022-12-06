import { readFileSync } from 'fs';
export {};

let input = readFileSync('./input.txt', 'utf-8');

const groups = input.split('\n\n');

const sums = groups.map((group: string) => {
	const numbers = group.split('\n').map((s: string) => parseInt(s, 10));

	return numbers.reduce((a: number, b: number) => a + b, 0);
});

const max = Math.max(...sums);

console.log(max);
