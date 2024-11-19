class Game {

	constructor(roomGrid) {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		// this.drawGrid();

		this.persons = [];
		this.persons.push(new Person(true, "recep1", 8, 5, 1));
		this.persons.push(new Person(true, "soldier", 5, 5));
		this.persons.push(new Person(true, "voter1", 4, 11));
		this.persons.push(new Person(false, "voter1", 5, 5));

		this.instructions = [];
		this.instructions.push(new Instructions("WONDER", this.persons[1]));
		this.instructions.push(new Instructions("VOTE_3_3_R", this.persons[2]));

		this.roomGrid = roomGrid;

		$(document).keydown(function(e) {
			let dir = 0;
			switch (e.keyCode) {
				case 87:
					// UP
					// console.log("Up");
					upKeyDown = true;
					break;
				case 65:
					// LEFT
					// console.log("Left");
					leftKeyDown = true;
					break;
				case 83:
					// DOWN
					// console.log("Down");
					downKeyDown = true;
					break;
				case 68:
					// RIGHT
					// console.log("Right");
					rightKeyDown = true;
					break;
				default:
					break;
			}
		});

		$(document).keyup(function(e) {
			let dir = 0;
			switch (e.keyCode) {
				case 87:
					// UP
					upKeyDown = false;
					break;
				case 65:
					// LEFT
					leftKeyDown = false;
					break;
				case 83:
					// DOWN
					downKeyDown = false;
					break;
				case 68:
					// RIGHT
					rightKeyDown = false;
					break;
				default:
					break;
			}
		});

		setInterval(function(){this.run()}.bind(this), 100);
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

	drawDown(p) {
		let cellX = Math.floor(p.x / CELL_WIDTH);
		let cellY = Math.floor(p.y / CELL_WIDTH);

		for (var y=cellY; y<GRID_HEIGHT; y++) {
			for (var x=Math.max(cellX-1,0); x<GRID_WIDTH; x++) {
				if (this.roomGrid[y][x].constructor.name == "Block") {
					ctx.clearRect(x*CELL_WIDTH, y*CELL_WIDTH, CELL_WIDTH, CELL_WIDTH);
					this.roomGrid[y][x].draw();
				}
			}
		}
	}

	draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// this.drawGrid();

		for(const row of this.roomGrid) {
			for (const tile of row) {
				tile.draw();
			}
		}

		for (const p of this.persons) {
			p.draw()
			this.drawDown(p);
		}
	}

	run() {
		if (upKeyDown) {
			for (const p of this.persons) {
				if (!p.isComp) {
					p.moveDir(3);
				}
			}
		}
		if (leftKeyDown) {
			for (const p of this.persons) {
				if (!p.isComp) {
					p.moveDir(1);
				}
			}
		}
		if (rightKeyDown) {
			for (const p of this.persons) {
				if (!p.isComp) {
					p.moveDir(2);
				}
			}
		}
		if (downKeyDown) {
			for (const p of this.persons) {
				if (!p.isComp) {
					p.moveDir(0);
				}
			}
		}

		for (const p of this.persons) {
			if (!p.isComp) {
				p.move();
			}
		}

		for (const i of this.instructions) {
			i.move();
		}

		this.draw();
	}
}