class Person {
	constructor(isComp, personType, cell_x, cell_y, sprite) {
		this.isComp = isComp;
		this.personType = personType;

		this.x = cell_x * CELL_WIDTH;
		this.y = cell_y * CELL_WIDTH;
		this.dx = CELL_WIDTH / 4;
		this.dy = CELL_WIDTH / 4;

		this.target_x = 0;
		this.target_y = 0;
		this.dest_set = false;

		this.dir = 0; // 0-Down 1-Left 2-Right 3-UP
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.frame_count = 4;
		this.current_frame = 0;
		this.frame_width = 16;
		this.frame_height = 25;
	}

	draw() {
		// ctx.beginPath();
		// ctx.rect(this.x, this.y, CELL_WIDTH, CELL_WIDTH);
		// ctx.fillStyle = "#FF0000";
		// ctx.fill();
		// ctx.closePath();

		ctx.drawImage(
			this.sprite,
			this.current_frame*this.frame_width, // x of frame in sprite
			this.dir*this.frame_height, // y of frame in sprite
			this.frame_width, // width of frame in sprite
			this.frame_height, // height of frame in sprite
			this.x, // x-coordinates of image on canvas
			this.y-(this.frame_height-CELL_WIDTH), // y-coordinates of image on canvas
			this.frame_width, // width of image on canvas
			this.frame_height // height of image on canvas
		)
	}

	move() {
		if (this.x != this.target_x && this.dest_set) {
			const unit_vector = (this.target_x - this.x) / Math.abs(this.target_x - this.x)
			this.x += this.dx * unit_vector;
			if (unit_vector == -1) {
				this.dir = 1
			} else {
				this.dir = 2
			}
			this.current_frame = (this.current_frame + 1) % this.frame_count;
		} else if (this.y != this.target_y && this.dest_set) {
			const unit_vector = (this.target_y - this.y) / Math.abs(this.target_y - this.y)
			this.y += this.dy * unit_vector;
			if (unit_vector == -1) {
				this.dir = 3
			} else {
				this.dir = 0
			}
			this.current_frame = (this.current_frame + 1) % this.frame_count;
		}

		if (this.x == this.target_x && this.y == this.target_y && this.dest_set) {
			this.dest_set = false;
		}

	}

	moveCell(cell_x, cell_y) {
		this.target_x = cell_x * CELL_WIDTH;
		this.target_y = cell_y * CELL_WIDTH;
		this.dest_set = true;
		console.log(this.target_x, this.target_y);
	}
}