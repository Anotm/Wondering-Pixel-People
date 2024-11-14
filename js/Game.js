class Game {

	constructor(roomGrid) {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		// this.drawGrid();
		this.persons = [];
		this.persons.push(new Person(false, "soldier", 5, 5));

		this.roomGrid = roomGrid;

		this.personGrid = [];
		for (var i=0; i<GRID_HEIGHT; i++) {
			var row = [];
			for (var j=0; j<GRID_WIDTH; j++) {
				row.push(null);
			}
			this.personGrid.push(row);
		}

		setInterval(function(){this.draw()}.bind(this), 100);
	}

	drawGrid() {
		for (var x = 0; x < GRID_WIDTH; x++) {
			ctx.beginPath();
			ctx.moveTo(x*CELL_WIDTH, 0);
			ctx.lineTo(x*CELL_WIDTH, CANVAS_HEIGHT);
			ctx.stroke();
		}

		for (var y = 0; y < GRID_HEIGHT; y++) {
			ctx.beginPath();
			ctx.moveTo(0, y*CELL_WIDTH);
			ctx.lineTo(CANVAS_WIDTH, y*CELL_WIDTH);
			ctx.stroke();
		}
	}

	drawRoom() {
		for(const row of this.roomGrid) {
			for (const tile of row) {
				tile.draw();
			}
		}
	}

	async draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// this.drawGrid();

		for(const row of this.roomGrid) {
			for (const tile of row) {
				tile.draw();
			}
		}

		for (const p of this.persons) {
			p.draw();
			let currCellX = Math.floor(p.x / CELL_WIDTH);
			let currCellY = Math.floor(p.y / CELL_WIDTH);
			if (this.roomGrid[currCellY][currCellX-1].constructor.name == "Block") {
				this.roomGrid[currCellY][currCellX-1].draw();
			}
			if (this.roomGrid[currCellY][currCellX].constructor.name == "Block") {
				this.roomGrid[currCellY][currCellX].draw();
			}
			if (this.roomGrid[currCellY][currCellX+1].constructor.name == "Block") {
				this.roomGrid[currCellY][currCellX+1].draw();
			}
			if (this.roomGrid[currCellY+1][currCellX-1].constructor.name == "Block") {
				this.roomGrid[currCellY+1][currCellX-1].draw();
			}
			if (this.roomGrid[currCellY+1][currCellX].constructor.name == "Block") {
				this.roomGrid[currCellY+1][currCellX].draw();
			}
			if (this.roomGrid[currCellY+1][currCellX+1].constructor.name == "Block") {
				this.roomGrid[currCellY+1][currCellX+1].draw();
			}
		}

		for (const p of this.persons) {
			p.move();
		}
	}
}