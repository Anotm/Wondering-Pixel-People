let template = [];
let roomGrid = [];
let game = new Game(roomGrid);

async function downloadTemplate() {
	const object = template;
	const filename = "LevelMaker_template.json"

	if(!filename.endsWith('.json')) {
		filename = `${filename}.json`
	}

	const json = JSON.stringify(object)
	const blob = new Blob([json],{ type:'application/json' })
	const href = await URL.createObjectURL(blob)
	const link = document.createElement('a')

	link.href = href
	link.download = filename
	link.position = 'absolute'
	link.left = '200vw'

	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

function makeRoomGrid() {
	roomGrid = [];
	for (var y=0; y<GRID_HEIGHT_LM; y++) {
		row = [];
		for (var x=0; x<GRID_WIDTH_LM; x++) {
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
	game.setRoomGrid(roomGrid);
}

function setConvasDim() {
	// console.log(CANVAS_WIDTH, CANVAS_HEIGHT);
	canvas.attr("width", CANVAS_WIDTH);
	canvas.attr("height", CANVAS_HEIGHT);

	template = [];
	for (var row = 0; row < GRID_HEIGHT_LM; row++) {
		lst = [];
		for (var floor = 0; floor < GRID_WIDTH_LM; floor++) {
			lst.push("floor_default");
		}
		template.push(lst);
	}
	makeRoomGrid();
}

$('input#cellNumX').on('input',function(e) {
	const newWidth = $(this).val();
	GRID_WIDTH_LM = newWidth;
	CANVAS_WIDTH = GRID_WIDTH_LM * CELL_WIDTH;
	setConvasDim();
});
$('input#cellNumX').val("10");

$('input#cellNumY').on('input',function(e) {
	const newHeight = $(this).val();
	GRID_HEIGHT_LM = newHeight;
	CANVAS_HEIGHT = GRID_HEIGHT_LM * CELL_WIDTH;
	setConvasDim();
});
$('input#cellNumY').val("10");

$(canvas).mousedown(function(e){
	game.mouseClick(e)
});

setConvasDim();