class Plant {
  constructor(creator, x, y, hue) {
    Object.assign(this, {creator, x, y, hue})
    this.colorVariance = 20
    this.growth = 0
    this.energy = 0
  }

  mutate() {
    const newX = (this.x + randomInt(3) - 1 + PARAMS.dimension) % PARAMS.dimension
    const newY = (this.y + randomInt(3) - 1 + PARAMS.dimension) % PARAMS.dimension
    const newHue = (this.hue + randomInt(this.colorVariance + 1) - this.colorVariance / 2) % 360
    if (!this.creator.tinyworld[newY][newX]) this.creator.addPlant(newX, newY, newHue)
  }
  
  update() {
    this.colorVariance = parseInt(document.getElementById("plantvariance").value)

    this.growth++
    if (this.energy < 10) {
      this.energy++
    } else {
      this.mutate()
      this.energy = 0
    }
  }

  draw(ctx) {
    ctx.fillStyle = hsl(this.hue, 20 + this.growth, 50);
    ctx.strokeStyle = "dark gray";
    ctx.fillRect(this.x * PARAMS.size, this.y * PARAMS.size, PARAMS.size, PARAMS.size)
    ctx.strokeRect(this.x * PARAMS.size, this.y * PARAMS.size, PARAMS.size, PARAMS.size)
  }
}
