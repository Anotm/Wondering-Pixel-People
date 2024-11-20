let roomGrid = [];
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

function buildGrid() {
	for (var y=0; y<GRID_HEIGHT; y++) {
		row = [];
		for (var x=0; x<GRID_WIDTH; x++) {
			str = template[y][x];
			if (str.includes("block_")) {
				xOffset = 0;
				yOffset = 0;
				if (str.includes("_wall_default") || str.includes("_wall_window")) {
					yOffset = -16;
				} else if  (str.includes("_table_default") || str.includes("_table_votestationL") || str.includes("_table_votestationR") || str.includes("_table_votestationU")) {
					yOffset = -6;
				} else if  (str.includes("_table_votebox")) {
					yOffset = -7;
				}
				row.push(new Block(x, y, xOffset, yOffset, str.replace("block_", "")));

			} else if (str.includes("floor_")) {
				row.push(new Floor(x, y, str.replace("floor_", "")));
			}
		}
		roomGrid.push(row);
	}
}

async function importTemplate() {
	const response = await fetch('./my_json_file.json');
	template = await response.json();
	buildGrid();
}

function getRoomGrid() {
	return roomGrid;
}

buildGrid();