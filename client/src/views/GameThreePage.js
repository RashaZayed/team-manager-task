import React,{useState,useEffect} from"react"
import axios from "axios"
import {Link} from "@reach/router"
import GameStatus from "../components/GameStatus"

export default(props) => {
    return(
        <div>
             <Link to="/status/game1">
            Game 1
            </Link>
            <Link to="/status/game2">
            Game 2
            </Link>
            <Link to="/status/game3">
            Game 3
            </Link>
            <GameStatus gameNumber="gameThreeStatus"/>
        </div>

    )
}