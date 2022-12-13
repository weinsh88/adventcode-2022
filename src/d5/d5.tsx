import { readFileSync } from 'fs';

export {};

const input = readFileSync('./input.txt', 'utf-8');

const [crates, moves] = input.split('\n\n');

const stacks: string[][] = [];

const addToStack = crates.split('\n').reverse().slice(1);

for (let i = 0; i < (addToStack[0].length + 1) / 4; i++) {
	stacks.push(
		addToStack.map((r) => r.slice(i * 4, i * 4 + 3)).filter((x) => x !== '   ')
	);
}

const listOfMoves = moves.split('\n');

// For each line in list of moves, if character is a digit
// 1) add list of digits, where 0 pos represents number of moves,
// 	  pos1 represents the stack from which to pop the elsement
// 	  pos2 is the dest of the element
// 2) Pop num moves top() elements from stack at pos1 and push on pos2
// 2) repeat 1) and 2) n-times corresponding to n-moves

listOfMoves.forEach((move) => {
	const pattern = /move (\d+) from (\d+) to (\d+)/;
	const match = pattern.exec(move);
	if (match === null) throw new Error(`Unexpected string format: '${move}'`);

	let [, qty, from, to]: string[] = match;
	let cnt = parseInt(qty);
	let src = parseInt(from) - 1;
	let dest = parseInt(to) - 1;

	let contents = stacks[src].splice(-cnt);

	stacks[dest].push(...contents.reverse());
});

let ans = stacks.map((s) => s.at(-1)).join('');
console.log(ans);
