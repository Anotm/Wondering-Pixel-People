class Instructions {
	R1 = [6,6];
	VS1 = [3,3];
	VB1 = [6,3];

	exit = [-1, 4];

	up = 3;
	down = 0;
	left = 1;
	right = 2;

	WONDER = [
		[this.moveCell, [1,7]],
		[this.sleep, 15],
		[this.face, this.right],
		[this.sleep, 15],
		[this.moveCell, [1,2]],
		[this.sleep, 15],
		[this.face, this.right],
		[this.sleep, 15],
		[this.jump, 0]
	];

	VOTE_3_3_R = [
		[this.moveCell, this.R1],
		[this.face, this.right],
		[this.sleep, 10],
		[this.toggleObject, null],
		[this.sleep, 10],
		[this.moveCell, this.VS1],
		[this.face, this.left],
		[this.sleep, 10],
		[this.moveCell, this.VB1],
		[this.face, this.right],
		[this.sleep, 5],
		[this.toggleObject, null],
		[this.sleep, 5],
		[this.moveCell, this.exit]
	];

	constructor (list, person) {
		switch (list) {
			case "WONDER":
				this.list = this.WONDER;
				break;
			case "VOTE_3_3_R":
				this.list = this.VOTE_3_3_R;
				break;
			default:
				this.list = this.WONDER;
		}
		this.index = 0;
		this.person = person;
		this.complete = false;
	}

	moveCell(coord, obj) {
		// console.log("moveCell");
		if (coord[0] * CELL_WIDTH == obj.person.x && coord[1] * CELL_WIDTH == obj.person.y) {
			obj.index++;
		} else if (obj.person.destSet == false) {
			obj.person.moveCell(coord[0], coord[1]);
		}
	}

	face(dir, obj) {
		// console.log("face");
		obj.person.face(dir);
		obj.index++;
	}

	sleep(n, obj) {
		// console.log("sleep");
		if (obj.person.sleepCounter == 0) {
			obj.person.sleep(n);
		} else if (obj.person.sleepCounter == 1) {
			obj.person.sleepCounter = 0;
			obj.index ++;
		}
	}

	toggleObject(filler, obj) {
		// console.log("toggleObject");
		obj.person.toggleObject();
		obj.index ++;
	}

	jump(i, obj) {
		obj.index = i;
	}

	move() {
		if (this.index >= this.list.length) {
			if (!this.complete) {
				this.complete = true;
			}
			return;
		}
		this.list[this.index][0](this.list[this.index][1], this);
		this.person.move();
	}

}