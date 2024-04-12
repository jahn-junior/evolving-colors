const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

  let creator = new Creator(gameEngine)
  gameEngine.addEntity(creator);

  document.getElementById("addplant").onclick = e => {creator.addPlant()}
  document.getElementById("addanimat").onclick = e => {creator.addAnimat()}

	gameEngine.init(ctx);
	gameEngine.start();
});
