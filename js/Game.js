class Game {
	constructor() {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		// this.drawGrid();
		this.person = new Person(false, "bob", 5, 5, "./img/person/soldier.png");

		this.roomGrid = [];
		for (var i=0; i<GRID_HEIGHT; i++) {
			var row = [];
			for (var j=0; j<GRID_WIDTH; j++) {
				row.push(new Floor(j,i));
			}
			this.roomGrid.push(row);
		}

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
		this.drawRoom();
		this.person.draw();
		this.person.move();
	}
}