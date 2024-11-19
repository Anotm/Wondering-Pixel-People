class Game {

	constructor(roomGrid) {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		// this.drawGrid();

		this.roomGrid = roomGrid;

		setInterval(function(){this.run()}.bind(this), 100);
	}

	mouseClick(e) {
		const rect = canvas[0].getBoundingClientRect()
	    const cursorX = e.clientX - rect.left
	    const cursorY = e.clientY - rect.top

	    const cellX = Math.floor(cursorX / CELL_WIDTH);
	    const cellY = Math.floor(cursorY / CELL_WIDTH);
	    template[cellY][cellX] = $("input[type='radio'][name='tile']:checked").val();
	    makeRoomGrid();
	}

	setRoomGrid(roomGrid) {
		this.roomGrid = roomGrid;
	}

	draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// this.drawGrid();

		for(const row of this.roomGrid) {
			for (const tile of row) {
				tile.draw();
			}
		}
	}

	run() {
		this.draw();
	}
}