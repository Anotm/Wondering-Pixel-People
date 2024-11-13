class Game {

	constructor() {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		this.drawGrid();
		this.person = new Person(false, "bob", 5, 5, "./img/person/soldier.png");

		this.gameGrid = [];

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

	async draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		this.drawGrid();
		this.person.draw();
		this.person.move();
	}
}