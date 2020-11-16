import React,{useState , useEffect} from "react"
import axios from "axios"
import DeleteButton from "./DeleteButton";
import { navigate } from "@reach/router";

export default(props)=> {
    const [player ,setPlayer] = useState("");
    const {id} = props;
    useEffect(()=> {
        axios.get("http://localhost:8000/players/"+ id)
        .then(player => setPlayer({...player.data}))
        .catch(err=> console.log(err))
    })


    return(

        <div className="container w-50">
            <div class="alert alert-primary " role="alert">
             {player.name}</div>
             <div class="alert alert-secondary" role="alert">
            {player.position}</div>
            <div class="alert alert-success" role="alert">
             {player.gameOneStatus}</div>
             <div class="alert alert-warning" role="alert">
             {player.gameTwoStatus}</div>
             <div class="alert alert-info" role="alert">
             {player.gameThreeStatus}</div>
             <button class="btn btn-danger" onClick={()=> navigate("/players/update/"+player._id)}>Edit</button>
             <DeleteButton playerId={id} onSuccess={()=>navigate("/players/list")} />
        </div>

    )
}