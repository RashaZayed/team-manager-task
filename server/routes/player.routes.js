const PlayerController =require("../controllers/player.controller")

module.exports = (app)=> {
app.get("/players/list" , PlayerController.getAllPlayers);
app.post("/players/addplayer" ,PlayerController.createPlayer )
app.get("/players/:id" , PlayerController.getOnePlayer)
app.put("/players/:id" , PlayerController.updatePlayer)
app.delete("/players/:id" , PlayerController.deletePlayer)
}

//https://vimeo.com/showcase/7767380
// Password
// codingdojo
