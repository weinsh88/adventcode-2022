import { readFileSync } from 'fs';

export {};

const input = readFileSync('./input.txt', 'utf-8');

const lines = input.split('\n');

type Directory = {
  name?: string;
  parent?: Directory;
  files: { [name: string]: number };
  folders: { [name: string]: Directory };
};

let head: Directory = { files: {}, folders: {} };
let current = head;

// 1) iterate through each line of input
// 2) Build n-ary tree where each node represents a directory which consists of a list of file.
// 3) User a bottom up approach (dfs) to count the number of directories with files which have a total size < 100k

// Build the N-ary tree
for (const line of lines) {
  const [pref, ...other] = line.split(' ');

  if (pref == '$') {
    if (other[0] === 'cd') {
      const dir = other[1];
      if (dir === '..') current = current.parent!;
      else if (dir === '/') current = head;
      else {
        if (!current.folders[dir]) {
          current.folders[dir] = { parent: current, files: {}, folders: {} };
        }

        current = current.folders[dir];
      }
    }
  } else if (pref !== 'dir') {
    current.files[other[0]] = parseInt(pref);
  }
}

const getDirSize = (dir: Directory): number => {
  let total = Object.values(dir.files).reduce((a, b) => a + b, 0);
  return total;
};

let folderSizes: number[] = [];
// Traverse N-ary tree
const dfs = (root: Directory): number => {
  let size = getDirSize(root);

  for (const folder in root.folders) {
    const subFolder = dfs(root.folders[folder]);
    size += subFolder;
    folderSizes.push(subFolder);
  }

  return size;
};

dfs(head);
const ans = folderSizes.filter((val) => val <= 100000).reduce((a, b) => a + b, 0);

console.log(ans);
