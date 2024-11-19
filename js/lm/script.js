function setConvasDim() {
	console.log(CANVAS_WIDTH, CANVAS_HEIGHT);
	canvas.attr("width", CANVAS_WIDTH);
	canvas.attr("height", CANVAS_HEIGHT);
}

setConvasDim();

$('input#cellNumX').on('input',function(e) {
	const newWidth = $(this).val();
	GRID_WIDTH = newWidth;
	CANVAS_WIDTH = GRID_WIDTH * CELL_WIDTH;
	setConvasDim();
});

$('input#cellNumY').on('input',function(e) {
	const newHeight = $(this).val();
	GRID_HEIGHT = newHeight;
	CANVAS_HEIGHT = GRID_HEIGHT * CELL_WIDTH;
	setConvasDim();
});