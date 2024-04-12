class Creator {

  constructor(game) {
    Object.assign(this, {game})
    this.tinyworld = []
    
    for (let i = 0; i < this.width; i++) {
      this.tinyworld.push([])
      for (let j = 0; j < this.height; j++) {
        this.tinyworld[i][j] = new Cell()
      }
    }
  
  }

  addPlant(x, y, hue) {
    this.tinyworld[y][x].plant = new Plant(x, y, hue)
  }

  addAnimat(x, y, hue, selectivity) {
    this.tinyworld[y][x].addAnimat = new Animat(x, y, hue, selectivity)
  }

  update() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.tinyworld[i][j].update()
      }
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.tinyworld[i][j].draw(ctx)
      }
    }
  }

}
