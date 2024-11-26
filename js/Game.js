class Game {

	constructor(roomGrid, personsList, instructionsList) {
		canvas.attr("width", CANVAS_WIDTH);
		canvas.attr("height", CANVAS_HEIGHT);
		// this.drawGrid();

		this.roomGrid = roomGrid;
		this.persons = personsList;
		this.instructions = instructionsList;

		this.newVoterTimer = Math.floor(Math.random() * 10) + 30;

		this.onlyComp = true;

		for (const p of this.persons) {
			if (!p.isComp) {
				this.onlyComp = false;
				break;
			}
		}

		if (!this.onlyComp) {
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
		}

		setInterval(function(){this.run()}.bind(this), 100);
	}

	mouseClick(e) {
		const rect = canvas[0].getBoundingClientRect()
	    const cursorX = e.clientX - rect.left
	    const cursorY = e.clientY - rect.top

	    const cellX = Math.floor(cursorX / CELL_WIDTH);
	    const cellY = Math.floor(cursorY / CELL_WIDTH);
	    console.log("(",cellX, ", ", cellY, ")");
	}

	advanceVoterQueue() {
		var inEntrance = false;
		for (const p of this.persons) {
			if (Math.floor(p.x / CELL_WIDTH) == 5 && Math.floor(p.y / CELL_WIDTH) == 9) {
				inEntrance = true;
			}
		}

		if (inEntrance) {
			return;
		}

		for (const p of this.persons) {
			if (p.hasInst || !p.personType.includes("voter")) {
				continue;
			}
			p.moveDir(3);
		}
	}

	setNewPersonForInstructions() {
		for (const inst of this.instructions) {

			if (!inst.complete) {
				continue;
			}
			if (this.newVoterTimer > 0) {
				this.newVoterTimer --;
				return;
			}

			var inEntrance = false;
			let newPerson = null;
			for (const p of this.persons) {
				if (Math.floor(p.x / CELL_WIDTH) == 5 && Math.floor(p.y / CELL_WIDTH) == 9) {
					inEntrance = true;
					newPerson = p;
				}
			}

			if (!inEntrance) {
				return;
			}

			inst.setPerson(newPerson);

			this.newVoterTimer = Math.floor(Math.random() * 20) + 30;
			this.persons.push(new Person(true, "voter1", 5, 12, 3));
			break;
		}
	}

	checkInstructionCompletion() {
		for (const inst of this.instructions) {
			if (!inst.complete || inst.person == null) {
				continue;
			}
			const pIndex = this.persons.indexOf(inst.person);
			inst.person = null;
			if (pIndex > -1) {
				this.persons.splice(pIndex, 1);
			}
			console.log(this.persons);
		}
	}

	runPlayerInput() {
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

	draw() {
		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// this.drawGrid();

		// Draw only floor
		for (var y=0; y<GRID_HEIGHT; y++) {
			for (var x=0; x<GRID_WIDTH; x++) {
				if (this.roomGrid[y][x].constructor.name == "Floor" || this.roomGrid[y][x].blockType.includes("barrier")) {
					this.roomGrid[y][x].draw();
				}
			}
		}

		// Draw everything else
		for (var y=0; y<GRID_HEIGHT; y++) {
			for (var x=0; x<GRID_WIDTH; x++) {
				if (this.roomGrid[y][x].constructor.name == "Block" && !this.roomGrid[y][x].blockType.includes("barrier")) {
					this.roomGrid[y][x].draw();
				}
				for (const p of this.persons) {
					let pY = Math.floor(p.y / CELL_WIDTH);
					if (pY == y) {
						p.draw();
					}
				}
			}
		}
	}

	run() {

		this.setNewPersonForInstructions()

		if (!this.onlyComp) {
			this.runPlayerInput();
		}

		this.advanceVoterQueue()

		for (const p of this.persons) {
			if (!p.isComp || !p.hasInst) {
				p.move();
			}
		}

		for (const i of this.instructions) {
			i.move();
		}

		this.checkInstructionCompletion();

		this.draw();
	}
}