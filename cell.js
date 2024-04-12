class Cell {
  constructor() {
    this.plant = null;
    this.animats = [];
  }

  addAnimat(animat) {
    this.animats.push(animat)
  }
  
  update() {
    this.plant.update()
    for (animat in this.animats) {
      animat.update()
    }
  }

  draw(ctx) {
    this.plant.draw(ctx)
    for (animat in this.animats) {
      animat.draw(ctx)
    }
  }
}
