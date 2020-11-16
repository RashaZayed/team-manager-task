import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import {Link} from "@reach/router"

export default () => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/players/list")
      .then((players) => {
        console.log(players.data);
        setPlayers(players.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterPlayer = (playerId) => {
    setPlayers(
      players.filter((player) => {
        return player._id != playerId;
      })
    );
  };

  const display = players.map((player) => (
    <tr>
        <Link to={"/players/getOne/"+ player._id}>
      <td>{player.name}</td>
      </Link>
      <td>{player.position}</td>
      <td>
        <DeleteButton playerId={player._id} onSuccess={() => {filterPlayer(player._id)}} />
      </td>
    </tr>
  ));

  const tableDisplay = () => {
    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Preferred Position</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>{display}</tbody>
      </table>
    );
  };

  //   console.log(players);
  return <div className="container">{loaded && tableDisplay()}</div>;
};
