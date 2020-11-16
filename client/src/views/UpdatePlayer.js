import React, {useState , useEffect} from "react"
import Form from "../components/Form"
import axios from "axios"
import {navigate} from "@reach/router"

export default(props)=>{
   const {id}= props;
   const [player , setPlayer] = useState("");
   const [errors, setErrors] = useState([]);
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
    axios
      .get("http://localhost:8000/players/" + id)
      .then((player) => {
        setPlayer(player.data);
       
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const updatePlayer = ({ name , position }) => {
    axios
      .put("http://localhost:8000/players/" + id, { name , position })
      .then((res) => {
        console.log(res);
        navigate("/players/list");
      })
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].messsage);
        }
        console.log(errArr)
        setErrors(errArr);
        
      });
  };
  const displayValidator = errors.map((error, i) => <p key={i}>{error}</p>);




   return(
       <div>
           {displayValidator}
           
     {loaded && <Form initialName={player.name} initialPosition={player.position} onSuccess={updatePlayer} />}
     
     </div>
   )

}