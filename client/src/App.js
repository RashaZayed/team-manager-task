
import './App.css';
import React,{useEffect } from "react"
import MainList from "./views/MainList"
import {Router} from "@reach/router"
import PlayerDetail from './components/PlayerDetail';
import UpdatePlayer from './views/UpdatePlayer';
import GameOnePage from "./views/GameOnePage"
import GameTwoPage from "./views/GameTwoPage"
import GameThreePage from "./views/GameThreePage"
import io from "socket.io-client"
import { useState } from 'react';
import cors from "cors"
function App() {
  const [socket] = useState(()=>io(":8000"));
  useEffect(()=>{
    console.log("is this running");
    socket.on("Welcome" , data=> console.log(data))

    return ()=> socket.disconnect(true);
  },[])
  return (
    <div className="App">
      <h1>Socket Test</h1>
      
     <MainList />
     <Router>
     <PlayerDetail path="/players/getOne/:id"/>
     <UpdatePlayer path="/players/update/:id" />
     <GameOnePage path="/status/game1"/>
     <GameTwoPage path="/status/game2"/>
     <GameThreePage path="/status/game3" />
     </Router>
    
     
     
    </div>
  );
}

export default App;
