const Player = require("../models/player.model");

module.exports.createPlayer = (req,res)=> {
    const {name , position , gameOneStatus , gameTwoStatus , gameThreeStatus} = req.body ;
    Player.create({
        name,
        position ,
        gameOneStatus , 
        gameTwoStatus ,
        gameThreeStatus,
    })
    .then((player)=> res.json(player))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllPlayers= (req,res)=>{
    Player.find()
    .then(players => res.json(players))
    .catch(err=> res.json(err))
}

module.exports.getOnePlayer = (req,res)=>{
    Player.findById({_id: req.params.id})
    .then(player => res.json(player))
    .catch(err => res.json(err))
}
module.exports.updatePlayer = (req,res)=> {
    //const {name , position , gameOneStatus , gameTwoStatus , gameThreeStatus} = req.body ;
    Player.findByIdAndUpdate({_id:  req.params.id} , req.body ,{new:true , runValidators:true})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
    }

module.exports.deletePlayer = (req,res) => {
    Player.findByIdAndRemove({_id: req.params.id})
    .then(player => res.json(player))
    .catch(err => res.json(err))
}

   
