import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf-8');

const letters = Array.from(input) as string[];

for (let i = 3; i < letters.length; i++) {
  const marker = letters.slice(i - 4, i);

  const listOfChars = new Set(marker);

  if (listOfChars.size == 4) {
    console.log(letters[i], i);
    break;
  }
}
