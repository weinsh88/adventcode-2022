import { readFileSync } from 'fs';

export {};

const input = readFileSync('./input.txt', 'utf-8');

type matrix = number[][];

const forest: matrix = input.split('\n').map((line: string) => Array.from(line.trim()).map(Number));

// One possible approach is dfs from each position to the edge (O(N4))
// Alternative, use iteration to reach to bound of all 4 sides of the array, terminate if tree greater than the current is reached before the edge of grid

function isVisible(x: number, y: number, grid: matrix): boolean {
  let tree = grid[x][y];

  let top = true;
  let bottom = true;
  let left = true;
  let right = true;

  for (let j = 0; j < x; j++) {
    if (grid[j][y] >= tree) {
      top = false;
      break;
    }
  }

  for (let k = 0; k < y; k++) {
    if (grid[x][k] >= tree) {
      left = false;
      break;
    }
  }

  for (let b = grid.length - 1; b > x; b--) {
    if (grid[b][y] >= tree) {
      bottom = false;
      break;
    }
  }

  for (let p = grid[0].length - 1; p > y; p--) {
    if (grid[x][p] >= tree) {
      right = false;
      break;
    }
  }

  const isVisible = left || right || top || bottom;
  return isVisible;
}

const countVisible = (forest: matrix): number => {
  const m = forest.length;
  const n = forest[0].length;

  let cnt = 2 * m + 2 * (n - 2);

  for (let i = 1; i + 1 < m; i++) {
    for (let j = 1; j + 1 < n; j++) {
      if (isVisible(i, j, forest)) cnt++;
    }
  }

  return cnt;
};

let visible = countVisible(forest);

console.log(visible);
