import { useState } from "react";
import styled from "styled-components";
import PlayerCard from "./components/playerCard";

const testPlayers = [
  { name: "Antoine", hp: 12 },
  { name: "Sacha", hp: -5 },
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

// const StyledHead = styled.div`
//   height: 5vh;
// `;

const StyledAddCard = styled.div`
  background-color: grey;
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

  return (
    <StyledMain>
      {/* <StyledHead>JIPSY QUINGUE</StyledHead> */}
      <StyledPlayerContainer>
        {players.map((player, i) => (
          <PlayerCard player={player} key={i} deletePlayer={deletePlayer} />
        ))}
      </StyledPlayerContainer>
      <StyledAddCard>
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button
          onClick={() => {
            setPlayers([...players, { name: newName }]);
            setNewName("");
          }}
        >
          Ajouter
        </button>
      </StyledAddCard>
    </StyledMain>
  );
}

export default App;
