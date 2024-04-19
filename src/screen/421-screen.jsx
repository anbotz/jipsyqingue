import { useState } from "react";
import GameMode from "../components/gameMode";
import ResetModal from "../components/resetModal";
import RulesModal from "../components/rulesModal";
import AppBar from "../components/app-bar";
import styled from "styled-components";

const TEST_PLAYERS = [
  { id: "ec7e1d0f-473e-454c-8c24-cbaf7dec728a", name: "Antoine", hp: 0 },
  { id: "23fa3cc0-4b1b-4210-ac15-31d1a2ad3f04", name: "Sacha", hp: 0 },
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

const DECHARGE = {
  name: "Décharge",
  hp: 21,
  isTrash: true,
  id: "32068cd4-fc69-4569-9395-85f1b588b891",
};

const STARTING_HP = 0;

function FourTwentyOneScreen({ option }) {
  const { is421NoLimitMode: noLimit } = option;
  const [decharge, setDecharge] = useState(!noLimit && DECHARGE);
  const [players, setPlayers] = useState(TEST_PLAYERS);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  const addPlayer = (newName) => {
    const updatedPlayers = [
      ...players,
      { id: players.length, name: newName, hp: STARTING_HP },
    ];
    setPlayers(updatedPlayers);
  };

  const deletePlayer = (player) => {
    const updatedPlayers = players.filter((pl) => pl !== player);
    setPlayers(updatedPlayers);
  };

  const resetPlayers = () => {
    const resetPlayers = players.map((pl) => ({ ...pl, hp: STARTING_HP }));

    setPlayers(resetPlayers);
    !noLimit && setDecharge(DECHARGE);
  };

  const setHp = (currentPlayer, updatedHp) => {
    if (updatedHp < 0 && currentPlayer.hp === 0) return;
    if (!noLimit && updatedHp > 0 && decharge.hp === 0) return;

    const updatedPlayers = players.map((pl) => {
      if (pl.id === currentPlayer.id) {
        return { ...currentPlayer, hp: currentPlayer.hp + updatedHp };
      }
      return pl;
    });

    !noLimit && setDecharge((d) => ({ ...d, hp: d.hp - updatedHp }));
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <StyledContainer>
        <ScrollPanel>
          <GameMode
            players={players}
            {...{ decharge, setPlayers, option, setHp, deletePlayer }}
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
      <RulesModal
        {...{ showInstructionModal, setShowInstructionModal }}
        is421Mode
      />
    </>
  );
}

export default FourTwentyOneScreen;
