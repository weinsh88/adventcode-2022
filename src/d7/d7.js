"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var lines = input.split('\n');
var head = { files: {}, folders: {} };
var current = head;
// 1) iterate through each line of input
// 2) Build n-ary tree where each node represents a directory which consists of a list of file.
// 3) User a bottom up approach (dfs) to count the number of directories with files which have a total size < 100k
// Build the N-ary tree
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var _a = line.split(' '), pref = _a[0], other = _a.slice(1);
    if (pref == '$') {
        if (other[0] === 'cd') {
            var dir = other[1];
            if (dir === '..')
                current = current.parent;
            else if (dir === '/')
                current = head;
            else {
                if (!current.folders[dir]) {
                    current.folders[dir] = { parent: current, files: {}, folders: {} };
                }
                current = current.folders[dir];
            }
        }
    }
    else if (pref !== 'dir') {
        current.files[other[0]] = parseInt(pref);
    }
}
var getDirSize = function (dir) {
    var total = Object.values(dir.files).reduce(function (a, b) { return a + b; }, 0);
    return total;
};
var folderSizes = [];
// Traverse N-ary tree
var dfs = function (root) {
    var size = getDirSize(root);
    for (var folder in root.folders) {
        var subFolder = dfs(root.folders[folder]);
        size += subFolder;
        folderSizes.push(subFolder);
    }
    return size;
};
dfs(head);
var ans = folderSizes.filter(function (val) { return val <= 100000; }).reduce(function (a, b) { return a + b; }, 0);
console.log(ans);
