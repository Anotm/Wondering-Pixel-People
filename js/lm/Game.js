class Game {

	constructor(roomGrid) {
		canvas.attr("width", CANVAS_WIDTH_LM);
		canvas.attr("height", CANVAS_HEIGHT_LM);
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
	    str = $("input[type='radio'][name='tile']:checked").val();
	    if (str == "block_barrier") {
	    	str = "block_barrier_debug";
	    }
	    template[cellY][cellX] = str;
	    makeRoomGrid();
	}

	setRoomGrid(roomGrid) {
		this.roomGrid = roomGrid;
	}

	draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH_LM, CANVAS_HEIGHT_LM);
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