const mongoose = require ("mongoose");

const PlayerSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true , "Player name is required"],
        minlength:[2 , "Name must be at least 2 characters in length"]
       
    },
    position:{
        type: String,
    },
    gameOneStatus: {
        type: String,
        default: 'undecided'
    },
    gameTwoStatus: {
        type:String,
        default: 'undecided'
    },
    gameThreeStatus: {
        type:String,
        default: 'undecided'
    },

})
 const Player = mongoose.model("Player" , PlayerSchema);
 module.exports = Player ;