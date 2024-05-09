import { useState } from "react";
import styled from "styled-components";
import GameMode from "../components/game-mode";
import ResetModal from "../components/reset-modal";
import RulesModal from "../components/rules-modal";
import AppBar from "../components/app-bar";
import { v4 } from "uuid";

const TEST_PLAYERS = [
  { id: "ec7e1d0f-473e-454c-8c24-cbaf7dec728a", name: "Antoine", hp: 12 },
  { id: "23fa3cc0-4b1b-4210-ac15-31d1a2ad3f04", name: "Sacha", hp: 12 },
  { id: "bbf764a3-16b7-4b5a-a78a-a412ce1f6c02", name: "François", hp: 12 },
  { id: "5405ded9-c1d0-4439-903d-db407299cdc9", name: "Baptiste", hp: 12 },
  { id: "210c84d0-0b8b-47b6-8811-423bae2c32fb", name: "Adrien", hp: 12 },
];

const StyledContainer = styled.article`
  display: flex;
  min-height: 0;
  min-width: 0;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
const ScrollPanel = styled.div`
  display: flex;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  flex-direction: column;
  flex: 0 0 100%;
`;

const STARTING_HP = 12;

function JipsyScreen({ option }) {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) ?? TEST_PLAYERS
  );
  const [showResetModal, setShowResetModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  const updatePlayers = (u) => {
    setPlayers(u);
    localStorage.setItem("players", JSON.stringify(u));
  };
  const addPlayer = (newName) => {
    const updatedPlayers = [
      ...players,
      { id: v4(), name: newName, hp: STARTING_HP },
    ];

    updatePlayers(updatedPlayers);
  };

  const deletePlayer = (player) => {
    const updatedPlayers = players.filter((pl) => pl !== player);
    updatePlayers(updatedPlayers);
  };

  const resetPlayers = () => {
    const resetPlayers = players.map((pl) => ({ ...pl, hp: STARTING_HP }));

    updatePlayers(resetPlayers);
  };

  const setHp = (currentPlayer, updatedHp) => {
    const updatedPlayers = players.map((pl) => {
      if (pl.id === currentPlayer.id) {
        return { ...currentPlayer, hp: currentPlayer.hp + updatedHp };
      }
      return pl;
    });

    updatePlayers(updatedPlayers);
  };

  return (
    <>
      <StyledContainer>
        <ScrollPanel>
          <GameMode
            {...{
              players,
              setPlayers,
              option,
              setHp,
              deletePlayer,
            }}
          />
        </ScrollPanel>
      </StyledContainer>
      <AppBar
        {...{
          showResetModal,
          setShowResetModal,
          setShowInstructionModal,
          showInstructionModal,
          addPlayer,
        }}
      />
      <ResetModal {...{ showResetModal, setShowResetModal, resetPlayers }} />
      <RulesModal {...{ showInstructionModal, setShowInstructionModal }} />
    </>
  );
}

export default JipsyScreen;
