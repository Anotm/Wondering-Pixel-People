class Block {

	constructor(cellX, cellY, xOffset, yOffset, blockType="wall_default") {
		this.sprite = new Image();
		this.sprite.src = "./img/block/block_" + blockType + ".png";
		this.blockType = blockType;
		this.xOffset = xOffset;
		this.yOffset = yOffset;
		this.x = cellX * CELL_WIDTH;
		this.y = cellY * CELL_WIDTH;
	}

	setCoord(cellX, cellY) {
		this.x = cellX * CELL_WIDTH;
		this.y = cellY * CELL_WIDTH;
	}

	draw() {
		ctx.drawImage(this.sprite, this.x + this.xOffset , this.y + this.yOffset); 
	}
}