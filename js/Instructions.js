class Instructions {
	WONDER = [
		[this.moveCell, [1,7]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,2]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,7]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,2]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,7]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,2]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,7]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15],
		[this.moveCell, [1,2]],
		[this.sleep, 15],
		[this.face, 2],
		[this.sleep, 15]
	];

	constructor (list, person) {
		switch (list) {
			case "WONDER":
				this.list = this.WONDER;
				break;
			default:
				this.list = this.WONDER;
		}
		this.index = 0;
		this.person = person;
	}

	moveCell(coord, obj) {
		console.log("moveCell");
		if (coord[0] * CELL_WIDTH == obj.person.x && coord[1] * CELL_WIDTH == obj.person.y) {
			obj.index++;
		} else if (obj.person.destSet == false) {
			obj.person.moveCell(coord[0], coord[1]);
		}
	}

	face(dir, obj) {
		console.log("face");
		obj.person.face(dir);
		obj.index++;
	}

	sleep(n, obj) {
		console.log("sleep");
		if (obj.person.sleepCounter == 0) {
			obj.person.sleep(n);
		} else if (obj.person.sleepCounter == 1) {
			obj.person.sleepCounter = 0;
			obj.index ++;
		}
	}

	toggleObject(obj) {
		console.log("toggleObject");
		obj.person.toggleObject();
		obj.index ++;
	}

	move() {
		if (this.index >= this.list.length) {
			return;
		}
		this.list[this.index][0](this.list[this.index][1], this);
		this.person.move();
	}
}