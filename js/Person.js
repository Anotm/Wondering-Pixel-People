class Person {
	constructor(isComp, personType, cellX, cellY) {
		this.isComp = isComp;
		this.personType = personType;

		this.targetX = 0;
		this.targetY = 0;
		this.destSet = false;

		this.dir = 0; // 0-Down 1-Left 2-Right 3-UP
		this.sprite = new Image();
		this.sprite.src = "./img/person/" + personType + ".png";
		this.frameCount = 4;
		this.currentFrame = 0;
		this.frameWidth = 16;
		this.frameHeight = 25;

		this.x = cellX * CELL_WIDTH;
		this.y = cellY * CELL_WIDTH;
		this.dx = CELL_WIDTH / 4;
		this.dy = CELL_WIDTH / 4;

		this.xOffset = 0;
		this.yOffset = this.frameHeight-CELL_WIDTH;
	}

	draw() {
		// ctx.beginPath();
		// ctx.rect(this.x, this.y, CELL_WIDTH, CELL_WIDTH);
		// ctx.fillStyle = "#FF0000";
		// ctx.fill();
		// ctx.closePath();

		ctx.drawImage(
			this.sprite,
			this.currentFrame*this.frameWidth, // x of frame in sprite
			this.dir*this.frameHeight, // y of frame in sprite
			this.frameWidth, // width of frame in sprite
			this.frameHeight, // height of frame in sprite
			this.x, // x-coordinates of image on canvas
			this.y-(this.yOffset), // y-coordinates of image on canvas
			this.frameWidth, // width of image on canvas
			this.frameHeight // height of image on canvas
		)
	}

	move() {
		if (this.x != this.targetX && this.destSet) {
			const unit_vector = (this.targetX - this.x) / Math.abs(this.targetX - this.x)
			this.x += this.dx * unit_vector;
			if (unit_vector == -1) {
				this.dir = 1
			} else {
				this.dir = 2
			}
			this.currentFrame = (this.currentFrame + 1) % this.frameCount;
		} else if (this.y != this.targetY && this.destSet) {
			const unit_vector = (this.targetY - this.y) / Math.abs(this.targetY - this.y)
			this.y += this.dy * unit_vector;
			if (unit_vector == -1) {
				this.dir = 3
			} else {
				this.dir = 0
			}
			this.currentFrame = (this.currentFrame + 1) % this.frameCount;
		}

		if (this.x == this.targetX && this.y == this.targetY && this.destSet) {
			this.destSet = false;
		}

	}

	moveCell(cellX, cellY) {
		this.targetX = cellX * CELL_WIDTH;
		this.targetY = cellY * CELL_WIDTH;
		this.destSet = true;
	}

	face(dir) {
		// 0-Down 1-Left 2-Right 3-UP
		this.dir = dir;
		this.draw();
	}
}