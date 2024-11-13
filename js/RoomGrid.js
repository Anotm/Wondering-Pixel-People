const wallDefault = new Block(0,0,0,-16);
const floorDefault = new Floor(0,0);

let grid10x10 = [];
let template = [
	["block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default", "floor_default", "floor_default", "block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default"],
	["floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default", "floor_default", "floor_default", "block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default"]
];


// for (var y=0; y<GRID_HEIGHT; y++) {
// 	row = [];
// 	for (var x=0; x<GRID_WIDTH; x++) {
// 		if (y==0 || y==9) {
// 			row.push(new Block(x,y,0,-16));
// 			continue;
// 		} else if (x==0 || x==9) {
// 			row.push(new Block(x,y,0,-16));
// 		} else {
// 			row.push(new Floor(x,y));
// 		}
// 	}
// 	grid10x10.push(row);
// }

// grid10x10[4][0] = new Floor(0,4);
// grid10x10[5][0] = new Floor(0,5);
// grid10x10[4][9] = new Floor(9,4);
// grid10x10[5][9] = new Floor(9,5);

// grid10x10[0][4] = new Floor(4,0);
// grid10x10[0][5] = new Floor(5,0);
// grid10x10[9][4] = new Floor(4,9);
// grid10x10[9][5] = new Floor(5,9);

for (var y=0; y<GRID_HEIGHT; y++) {
	row = [];
	for (var x=0; x<GRID_WIDTH; x++) {
		str = template[y][x];
		if (str.includes("block_")) {
			if (str.includes("_wall_default")) {
				xOffset = 0;
				yOffset = -16;
			}
			row.push(new Block(x, y, xOffset, yOffset, str.replace("block_", "")));

		} else if (str.includes("floor_")) {
			row.push(new Floor(x, y, str.replace("floor_", "")));
		}
	}
	grid10x10.push(row);
}

function getRoomGrid() {
	return grid10x10;
}