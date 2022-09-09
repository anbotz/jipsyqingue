import { useState } from "react";
import styled from "styled-components";
import Modal from "./components/modal";
import PlayerCard from "./components/playerCard";
import AddIcon from "./icon/addIcon";
import QuestionIcon from "./icon/questionIcon";
import RefreshIcon from "./icon/refreshIcon";

const testPlayers = [
  { name: "Antoine", hp: 12 },
  { name: "Sacha", hp: 12 },
  { name: "François", hp: 12 },
  { name: "Baptiste", hp: 12 },
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
    width: 70%;
  }
`;

function App() {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) || testPlayers
  );
  const [newName, setNewName] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  const deletePlayer = (player) => {
    const updatedPlayers = players.filter((pl) => pl !== player);

    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const addPlayer = () => {
    const updatedPlayers = [...players, { name: newName, hp: 12 }];
    setPlayers(updatedPlayers);
    setNewName("");
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
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

  const resetPlayers = () => {
    const resetPlayers = players.reduce((acc, cur) => {
      return [...acc, { ...cur, hp: 12 }];
    }, []);

    setPlayers(resetPlayers);
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
        <RefreshIcon
          size={40}
          onClick={() => setShowResetModal(!showResetModal)}
        />
        <QuestionIcon
          size={40}
          onClick={() => setShowInstructionModal(!showInstructionModal)}
        />
      </StyledAddCard>
      <Modal
        isShowing={showResetModal}
        cancel={() => setShowResetModal(false)}
        text="Souhaitez vous réinitialiser la partie ?"
        confirm={() => {
          resetPlayers();
          setShowResetModal(false);
        }}
      />

      <Modal
        isShowing={showInstructionModal}
        title="Règles"
        text={
          <>
            <h3>Principes</h3>
            <div>Garder au moins 1 dé par lancer</div>
            <div>
              <b>Objectifs:</b> faire moins de 10 ou plus de 25
            </div>
            <h4>la somme totale des dés est entre 10 et 25 (non compris)</h4>
            <div>
              Le joueur perd un nombre de PV égal à la différence entre la somme
              des 5 dés et l'objectif le plus proche
            </div>
            <hr />
            <i>
              <b>Ex:</b> Titouan fait 23 (6 + 6 + 6 + 2 + 3), il perd 2PV (25 -
              23)
            </i>
            <h4>
              la somme totale des dés est supérieure ou égale à 25 ou inférieur
              ou égale à 10
            </h4>
            <div>
              Le joueur gagne un nombre de PV égal à la différence entre la
              somme des 5 dés et l'objectif le plus proche. Il choisit ensuite
              qui attaquer et lance les dés. Tant qu'il obtient des dés avec le
              résultat obtenu, il les garde et relance les autres. Si il
              n'obtient pas de dé avec le résultat, son attaque s'arrête.
              L'attaqué perd la somme des dés obtenus.
            </div>
            <hr />
            <i>
              <b>Ex:</b> Titouan fait 8 (1 + 2 + 1 + 2 + 2), il gagne 2PV (10 -
              8). Il décide d'attaquer Spiruline. Son premier lancer est (5 + 4
              + 2 + 3 + 4). Il garde alors le (2) et relance les 4 autres dés.
              Il obtient (2 + 4 + 6 + 6). Il garde un (2) supplémentaire et
              relance. Il n'obtient pas de 2 sur son troisième lancer, son
              attaque s'arrête donc et Spiruline perd 4PV (2 x 2).
            </i>
            <hr />
            <i>
              <b>NB:</b> Si Titouan avait réussi à faire 5 dés à 2, il pouvait
              alors continuer à relancer le dernier dé et continuer à enlever
              des PV à Spiruline tant qu'il faisait des 2
            </i>

            <h3>Figures</h3>
            <div>
              <b>Suite sèche:</b> +3PV et attaques aux 3
            </div>
            <div>
              <b>Yams:</b> +5PV et attaques aux 5
            </div>
          </>
        }
        confirm={() => {
          setShowInstructionModal(false);
        }}
      />
    </StyledMain>
  );
}

export default App;
