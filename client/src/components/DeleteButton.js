import React,{useState} from "react"
import axios from "axios"

export default(props)=> {
    const {onSuccess , playerId} = props;
   const onClickHandler = (e)=>{
        e.preventDefault();
        axios.delete("http://localhost:8000/players/"+ playerId)
        .then(player => {
           onSuccess();

        })
    }


return(
    <button type="button" onClick={onClickHandler} class="btn btn-danger">Delete</button>
)

}


