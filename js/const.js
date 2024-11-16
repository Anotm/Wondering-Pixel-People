const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");

CELL_WIDTH = 16 // pixels

GRID_WIDTH = 10; // cells
GRID_HEIGHT = 10; // cells

CANVAS_WIDTH = CELL_WIDTH * GRID_WIDTH; // pixels
CANVAS_HEIGHT = CELL_WIDTH * GRID_HEIGHT; // pixels

leftKeyDown = false;
rightKeyDown = false;
upKeyDown = false;
downKeyDown = false;