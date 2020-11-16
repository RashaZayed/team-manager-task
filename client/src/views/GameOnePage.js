import React,{useState,useEffect} from"react"
import axios from "axios"
import GameStatus from "../components/GameStatus"
import {Link} from "@reach/router"
export default()=> {
    return(
        <div className="container">
            <Link to="/status/game1">
            Game 1
            </Link>
            <Link to="/status/game2">
            Game 2
            </Link>
            <Link to="/status/game3">
            Game 3
            </Link>
        <GameStatus gameNumber="gameOneStatus" />
        </div>
    )
}