class Plant {
  constructor(hue) {
    Object.assign(this, {hue})
  }
  
  update() {
    // do something
  }

  draw(ctx) {
    ctx.fillStyle = hsl(this.hue, 20 + this.growth, 50);
    ctx.strokeStyle = "dark gray";
    ctx.fillRect(this.x * PARAMS.size, this.y * PARAMS.size, PARAMS.size, PARAMS.size)
    ctx.strokeRect(this.x * PARAMS.size, this.y * PARAMS.size, PARAMS.size, PARAMS.size)
  }
}
