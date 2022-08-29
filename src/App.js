import { useState } from "react";
import styled from "styled-components";
import PlayerCard from "./components/playerCard";
import AddIcon from "./icon/addIcon";

const testPlayers = [
  { name: "Antoine", hp: 12 },
  { name: "Sacha", hp: 12 },
  { name: "François", hp: 12 },
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
    setPlayers([...players, { name: newName, hp: 12 }]);
    setNewName("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addPlayer();
    }
  };

  const setHp = (player, updatedHp) => {

    const updatedPlayers = players.reduce((acc, cur) => {
      if (cur === player) {
        return [...acc, { ...player, hp: updatedHp }];
      }
      return [...acc, cur];
    }, []);

    setPlayers(updatedPlayers);
  };

  return (
    <StyledMain>
      <StyledPlayerContainer>
        {players.map((player, i) => (
          <PlayerCard
            player={player}
            key={i}
            deletePlayer={deletePlayer}
            setHp={setHp}
          />
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
