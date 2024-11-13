class Block {

	constructor(cellX, cellY, xOffset, yOffset, blockType="default") {
		this.sprite = new Image();
		this.sprite.src = "./img/block/block_" + blockType + ".png";
		this.xOffset = xOffset;
		this.yOffset = yOffset;
		this.x = cellX * CELL_WIDTH + xOffset;
		this.y = cellY * CELL_WIDTH + yOffset;
	}

	setCoord(cellX, cellY) {
		this.x = cellX * CELL_WIDTH + this.xOffset;
		this.y = cellY * CELL_WIDTH + this.yOffset;
	}

	draw() {
		ctx.drawImage(this.sprite, this.x, this.y); 
	}
}