class Floor {

	constructor(cell_x, cell_y, floor_type="default") {
		this.sprite = new Image();
		this.sprite.src = "./img/floor/floor_" + floor_type + ".png";
		this.x = cell_x * CELL_WIDTH;
		this.y = cell_y * CELL_WIDTH;
	}

	draw() {
		ctx.drawImage(this.sprite, this.x, this.y); 
	}
}