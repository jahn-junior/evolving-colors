class Animat {
  constructor(creator, x, y, hue, selectivity) {
    Object.assign(this, {creator, x, y, hue, selectivity})
    this.energy = 50
  }

  hueDifference (plant) {
		let diff = plant ? Math.abs(this.hue - plant.hue) : 180;
		if (diff > 180) diff = 360 - diff; // now diff is between 0-180 and wraps 
		return (90 - diff) / 90;
	}
  
  move() {
    // movement is random if there are no adjacent plants
    let newX = (PARAMS.dimension + this.x + randomInt(3) - 1) % PARAMS.dimension
    let newY = (PARAMS.dimension + this.y + randomInt(3) - 1) % PARAMS.dimension
    let bestPlant = Number.MAX_SAFE_INTEGER
    
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i || j) {
          let potentialX = (PARAMS.dimension + this.x + i) % PARAMS.dimension
          let potentialY = (PARAMS.dimension + this.y + j) % PARAMS.dimension
          let potentialPlant = null
          if (this.creator.tinyworld[potentialY][potentialX]) {
            potentialPlant = this.creator.tinyworld[potentialY][potentialX]
            let diff = this.hueDifference(potentialPlant)
            if (diff < bestPlant) {
              bestPlant = diff
              newX = potentialX
              newY = potentialY
            }
          }
        }
      }
    }
    
    this.x = newX
    this.y = newY
  }

  update() {
    if (this.creator.tinyworld[this.y][this.x]) {
      let plant = this.creator.tinyworld[this.y][this.x]
      if (this.hueDifference(plant) < 2 * this.selectivity - 1) {
        this.energy++
        this.creator.tinyworld[this.y][this.x] = null
      } else {
        this.energy--
      }
    }

    if (randomInt(100) == 99 || this.energy == 0) {
      this.removeFromWorld = true
    }

    let colorVariance = 5
    if (this.energy > 75) {
      this.creator.addAnimat(this.x, this.y, (this.hue + randomInt(colorVariance + 1) - 5) % 360)
      this.energy -= 25
    }

    this.move()

  }

  draw(ctx) {
    ctx.fillStyle = hsl(this.hue, 75, 50)
    ctx.strokeStyle = "light gray"
    ctx.beginPath()

    ctx.arc(
      (this.x + 0.5) * PARAMS.size,
      (this.y + 0.5) * PARAMS.size,
      PARAMS.size / 2 - 1,
      0,
      2 * Math.PI
    )

    ctx.fill()
    ctx.stroke()
  }
}
