import { useState } from "react";
import styled from "styled-components";
import Settings from "./components/settings";
import GameMode from "./components/gameMode";
import ResetModal from "./components/resetModal";
import RulesModal from "./components/rulesModal";
import Title from "./components/title";
import AppBar from "./components/app-bar";
import Toast from "./components/toast";

const testPlayers = [
  { id: 0, name: "Antoine", hp: 12 },
  { id: 1, name: "Sacha", hp: 12 },
  { id: 2, name: "François", hp: 12 },
  { id: 3, name: "Baptiste", hp: 12 },
  { id: 4, name: "Adrien", hp: 12 },
];

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
  overflow: none;
`;

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

const GAMES = { jipsy: { startingHp: 12 }, 421: { startingHp: 0 } };

function App() {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) ?? testPlayers
  );
  const [showResetModal, setShowResetModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  const [isSettingPanelOpen, setSettingPanelOpen] = useState(false);

  const [option, setOption] = useState(
    JSON.parse(localStorage.getItem("option")) ?? {
      gridLayout: false,
      isPandaMode: false,
      isToasterEnable: true,
      is421Mode: false,
      is421NoLimitMode: false,
    }
  );

  const GAME = option.is421Mode ? "421" : "jipsy";

  const startingHp = GAMES[GAME].startingHp;

  const resetPlayers = () => {
    const resetPlayers = players.reduce((acc, cur) => {
      return [...acc, { ...cur, hp: startingHp }];
    }, []);

    setPlayers(resetPlayers);
    localStorage.setItem("players", JSON.stringify(resetPlayers));
  };

  return (
    <StyledMain>
      <Toast />
      <Title is421Mode={option.is421Mode} />
      <StyledContainer>
        <ScrollPanel>
          {isSettingPanelOpen ? (
            <Settings
              onQuestionClick={() =>
                setShowInstructionModal(!showInstructionModal)
              }
              {...{
                option,
                setOption,
              }}
            />
          ) : (
            <GameMode
              {...{
                players,
                setPlayers,
                option,
              }}
            />
          )}
        </ScrollPanel>
      </StyledContainer>
      <AppBar
        {...{
          option,
          players,
          setPlayers,
          isSettingPanelOpen,
          setSettingPanelOpen,
          showResetModal,
          setShowResetModal,
          startingHp,
        }}
      />
      <ResetModal {...{ showResetModal, setShowResetModal, resetPlayers }} />
      <RulesModal
        {...{ showInstructionModal, setShowInstructionModal }}
        is421Mode={option.is421Mode}
      />
    </StyledMain>
  );
}

export default App;
