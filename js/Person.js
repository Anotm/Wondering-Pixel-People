class Person {
	constructor(isComp, personType, cell_x, cell_y) {
		this.isComp = isComp;
		this.personType = personType;

		this.x = cell_x * CELL_WIDTH;
		this.y = cell_y * CELL_WIDTH;
		this.dx = 2;
		this.dy = 2;
	}

	draw() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, CELL_WIDTH, CELL_WIDTH);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
	}

	move() {
		this.x += this.dx;
		this.y += this.dy;
	}
}