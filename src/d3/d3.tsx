import { readFileSync } from 'fs';

const input = readFileSync('d3-input.txt', 'utf-8');

const lines = input.split('\n');

let sum = 0;

const letterToIndex = (letter: string): number => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.indexOf(letter) + 1;
};

lines.forEach((line) => {
  let sz = line.length / 2;
  const c1 = new Set(Array.from(line.slice(0, sz)).map((l) => letterToIndex(l)));
  const c2 = Array.from(line.slice(sz)).map((l) => letterToIndex(l));

  let val = 0;
  c2.forEach((num) => {
    if (c1.has(num)) val = num;
  });

  sum += val;
});

console.log(sum);
