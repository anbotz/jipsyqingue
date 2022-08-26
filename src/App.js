import { useState } from "react";
import styled from "styled-components";
import PlayerCard from "./components/playerCard";
import AddIcon from "./icon/addIcon";

const testPlayers = [
  { name: "Antoine" },
  { name: "Sacha" },
  { name: "François" },
];

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const StyledPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85 vh;
  flex: 1;
`;

const StyledAddCard = styled.div`
  background-color: grey;
  border-radius: 10px 10px 20px 2px;
  color: white;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & input {
    width: 100%;
  }
`;

function App() {
  const [players, setPlayers] = useState(testPlayers);
  const [newName, setNewName] = useState("");

  const deletePlayer = (player) => {
    setPlayers(players.filter((pl) => pl !== player));
  };

  const addPlayer = () => {
    setPlayers([...players, { name: newName }]);
    setNewName("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addPlayer();
      console.log("do validate");
    }
  };

  return (
    <StyledMain>
      <StyledPlayerContainer>
        {players.map((player, i) => (
          <PlayerCard player={player} key={i} deletePlayer={deletePlayer} />
        ))}
      </StyledPlayerContainer>
      <StyledAddCard>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <AddIcon size={40} onClick={() => addPlayer()} />
      </StyledAddCard>
    </StyledMain>
  );
}

export default App;
