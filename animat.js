class Animat {
  constructor(x, y, hue, selectivity) {
    Object.assign(this, {x, y, hue, selectivity})
  }
  
  update() {
    // do something
  }

  draw(ctx) {
    ctx.fillStyle = hsl(this.hue, 75, 50)
    ctx.strokeStyle = "Black"
    cts.beginPath()
    ctx.arc((this.x + 0.5) * PARAMS.size, PARAMS.size / 2 - 1, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
  }
}
