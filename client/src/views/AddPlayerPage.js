import React , {useState} from "react"
import axios from "axios"
import Form from "../components/Form"
import { navigate } from "@reach/router"

export default(props)=>{
    const [errors ,setErrors] = useState([]);
    const styles = {
        
        "padding": "10px",
        "margin-top": "40px",
        "border": "solid 2px gray",
        "margin-bottom":"40px",
    
}

    const createPlayer = ({name , position})=> {
        axios.post("http://localhost:8000/players/addplayer" , {name , position })
        .then(player => {
            console.log(player)
            navigate("/players/list")
        } )
        .catch(err => { 
            const errRes = err.response.data.errors;
            const errArr = [];
            for(const key of Object.keys(errRes)){
                errArr.push(errRes[key].message);

            }
            setErrors(errArr);
    })
}
    const displayValidator = errors.map((error,i)=>{
        return(
            <p className="alert alert-warning alert-dismissible fade show" key={i}>{error}</p>
        )
    })
    return (
        <div className="container w-50" style={styles}>
            {displayValidator}
        <Form initialName="" initialProcess="" onSuccess={createPlayer} />
        </div>
    )
}
