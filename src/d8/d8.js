"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var forest = input.split('\n').map(function (line) { return Array.from(line.trim()).map(Number); });
// One possible approach is dfs from each position to the edge (O(N4))
// Alternative, use iteration to reach to bound of all 4 sides of the array, terminate if tree greater than the current is reached before the edge of grid
function isVisible(x, y, grid) {
    var tree = grid[x][y];
    var top = true;
    var bottom = true;
    var left = true;
    var right = true;
    for (var j = 0; j < x; j++) {
        if (grid[j][y] >= tree) {
            top = false;
            break;
        }
    }
    for (var k = 0; k < y; k++) {
        if (grid[x][k] >= tree) {
            left = false;
            break;
        }
    }
    for (var b = grid.length - 1; b > x; b--) {
        if (grid[b][y] >= tree) {
            bottom = false;
            break;
        }
    }
    for (var p = grid[0].length - 1; p > y; p--) {
        if (grid[x][p] >= tree) {
            right = false;
            break;
        }
    }
    var isVisible = left || right || top || bottom;
    return isVisible;
}
var countVisible = function (forest) {
    var m = forest.length;
    var n = forest[0].length;
    var cnt = 2 * m + 2 * (n - 2);
    for (var i = 1; i + 1 < m; i++) {
        for (var j = 1; j + 1 < n; j++) {
            if (isVisible(i, j, forest))
                cnt++;
        }
    }
    return cnt;
};
var visible = countVisible(forest);
console.log(visible);
