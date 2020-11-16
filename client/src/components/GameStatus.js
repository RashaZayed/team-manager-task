import React, { useState, useEffect } from "react";
import axios from "axios";

export default (props) => {
  const [players, setPlayers] = useState([]);
//   const [gameStatus , setGameStatus ] = useState("");
  const [greenColor, setGreenColor] = useState("gray");
  const [redColor , setRedColor] = useState("gray");
  const [yellowColor , setYellowColor] = useState("gray")
  const { gameNumber } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/players/list")
      .then((players) => setPlayers(players.data))
      .catch((err) => console.log(err));
  }, []);
  const tableDisplay = () => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Status for game 1</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
    );
  };
  const onClickHandler = (playerId, e) => {
    // setGameStatus(e.target.value);
    console.log(e.target.value)
    if ((e.target.value) === "playing"){
        setGreenColor("green")

    }else if((e.target.value) ==="Not playing"){
        setRedColor("red")
    }else {
        setYellowColor("yellow")
    }
    axios
      .put("http://localhost:8000/players/" + playerId, {
        [gameNumber]: e.target.value,
      })
      .then((player) => {
          for (const play of players) {
              if(play.id == playerId) {
                  play[gameNumber] = e.target.value
                  break;
              } 
          }
          console.log(player)
      })
      .catch((err) => console.log(err));
  };
  console.log(redColor)
  const display = players.map((player) => {
     
    
    return (
      <tr>
        <td>{player.name}</td>
        <td>
          <div data-toggle="buttons">
            <label class="btn btn-secondary " style={{backgroundColor: {greenColor}  }}>
              <input
                type="radio"
                name="options"
                value="playing"
                id="option1"
                class={greenColor}
                onClick={(e) => {
                  onClickHandler(player._id, e);
                }}
              />{" "}
              playing
            </label>
            <label class="btn btn-secondary" style={{backgroundColor: {redColor} }}>
              <input
                type="radio"
                name="options"
                value="Not playing"
                id="option2"
                onClick={(e) => {
                  onClickHandler(player._id, e);
                }}
              />{" "}
              Not playing
            </label>
            <label class="btn btn-secondary" style={{backgroundColor: {yellowColor} }}>
              <input
                type="radio"
                name="options"
                value="Undecided"
                id="option3"
                onClick={(e) => {
                  onClickHandler(player._id, e);
                }}
              />{" "}
              Undecided
            </label>
          </div>
        </td>
      </tr>
    );
  });

  return <div>{tableDisplay()}</div>;
};
