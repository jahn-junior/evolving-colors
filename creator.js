class Creator {

  constructor(game) {
    Object.assign(this, {game})
    this.tinyworld = []
    this.baseSelectivity = 50
    
    for (let i = 0; i < PARAMS.dimension; i++) {
      this.tinyworld.push([])
      for (let j = 0; j < PARAMS.dimension; j++) {
        this.tinyworld[i].push(null)
      }
    }
  
  }

  addPlant(x, y, hue) {
    this.tinyworld[y][x] = new Plant(this, x, y, hue)
  }

  addAnimat(x, y, hue) {
    this.game.addEntity(new Animat(this, x, y, hue, this.baseSelectivity))
  }

  update() {
    for (let i = 0; i < PARAMS.dimension; i++) {
      for (let j = 0; j < PARAMS.dimension; j++) {
        if (randomInt(100) == 99) this.tinyworld[i][j] = null
        if (this.tinyworld[i][j]) this.tinyworld[i][j].update()
      }
    }
  }

  draw(ctx) {
    for (let i = 0; i < PARAMS.dimension; i++) {
      for (let j = 0; j < PARAMS.dimension; j++) {
        if (this.tinyworld[i][j]) this.tinyworld[i][j].draw(ctx)
      }
    }
  }

}
