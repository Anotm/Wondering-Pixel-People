class Floor {

	constructor(cellX, cellY, floorType="default") {
		this.sprite = new Image();
		this.sprite.src = "./img/floor/floor_" + floorType + ".png";
		this.x = cellX * CELL_WIDTH;
		this.y = cellY * CELL_WIDTH;
	}

	setCoord(cellX, cellY) {
		this.x = cellX * CELL_WIDTH;
		this.y = cellY * CELL_WIDTH;
	}

	draw() {
		ctx.drawImage(this.sprite, this.x, this.y); 
	}
}