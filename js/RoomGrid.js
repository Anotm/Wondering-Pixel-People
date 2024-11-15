const wallDefault = new Block(0,0,0,-16);
const floorDefault = new Floor(0,0);

let grid10x10 = [];
let template = [
	["block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default", "floor_default", "floor_default", "block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default"],
	["block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default", "floor_default", "floor_default", "block_wall_default", "block_wall_default", "block_wall_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "block_table_votestationR", "floor_default", "floor_default", "floor_default", "floor_default", "block_table_votebox", "floor_default", "block_wall_default"],
	["floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default"],
	["floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_table_default", "floor_default", "floor_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_table_default", "block_table_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "floor_default", "block_wall_default"],
	["block_wall_default", "block_wall_window", "block_wall_window", "block_wall_default", "floor_default", "floor_default", "block_wall_default", "block_wall_window", "block_wall_window", "block_wall_default"]
];

for (var y=0; y<GRID_HEIGHT; y++) {
	row = [];
	for (var x=0; x<GRID_WIDTH; x++) {
		str = template[y][x];
		if (str.includes("block_")) {
			if (str.includes("_wall_default") || str.includes("_wall_window")) {
				xOffset = 0;
				yOffset = -16;
			} else if  (str.includes("_table_default") || str.includes("_table_votestationL") || str.includes("_table_votestationR") || str.includes("_table_votestationU")) {
				xOffset = 0;
				yOffset = -6;
			} else if  (str.includes("_table_votebox")) {
				xOffset = 0;
				yOffset = -7;
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