import React, {useState , useEffect} from "react"
import axios from "axios"

export default(props)=>{
    const {initialName , initialPosition , onSuccess} = props; 
    const [name, setName] =useState(initialName);
    const [position ,setPosition] = useState(initialPosition);

    const onSubmitHanlder = e => {
        e.preventDefault();
        onSuccess({name , position});

    }


   return(
       <div className="container">
           <form onSubmit={onSubmitHanlder}>
                 <div class="form-group">
                    <label> Player Name: </label> 
                     <input type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)} />
                     {name.length < 3? <p style={{color: "red"}}>Too short!</p> : null} 
                     <small id="emailHelp" class="form-text text-muted">Name must be at least 2 characters in length.</small>
                </div>
                <div class="form-group">
                     <label>Preferred position</label>
                     <input type="text" value={position} class="form-control" onChange={(e)=> setPosition(e.target.value)} />
                     
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </form>

       </div>
   )
}
