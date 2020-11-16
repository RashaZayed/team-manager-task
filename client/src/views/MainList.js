import React from "react"
import PlayersList from "../components/PlayersList"
import {Link  ,Router} from "@reach/router"
import AddPlayerPage from "./AddPlayerPage"
import GameStatus from "../components/GameStatus"
import GameOnePage from "./GameOnePage"

export default()=> {
    const styles={
        wrap:{
        "border": "solid 2px gray",
        "margin": "20px",

    },
    span:{
        "margin" : "10px",
    }
}
    return(
        <div className="container" style={styles.wrap}>
            <Link to="/players/list">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" />
            <a class="navbar-brand" href="#">List</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    
            </Link>
            <Link to="/players/addplayer">
            <span>Add Player</span>
            </Link>
            <Link to="/status/game1">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" />
            <a class="navbar-brand" href="#">Players Status</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
            </Link>
        <Router>    
    <PlayersList path="/players/list" className="container"/>
    <AddPlayerPage path="players/addplayer" />
    
    </Router>
   
    </div>
    )
}