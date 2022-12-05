import { useState } from "react";
import styled from "styled-components";
import AddIcon from "./icon/addIcon";
import RefreshIcon from "./icon/refreshIcon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GearIcon from "./icon/gearIcon";
import Settings from "./components/settings";
import GameMode from "./components/gameMode";
import ResetModal from "./components/resetModal";
import RulesModal from "./components/rulesModal";
import useOnClickOutside from "./hooks/useOnClickOutside";

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
  height: 100vh;
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

const StyledTitle = styled.h4`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  height: 85px;
  margin: 5px;
`;

const StyledDiceOne = styled.span`
  font-family: "dicefont";
  margin: 10px;
  transform: rotate(25deg);
`;

const StyledDiceSix = styled.span`
  font-family: "dicefont";
  margin: 10px;
  transform: rotate(-35deg);
`;

const StyledFloatting = styled.div`
  z-index: 2;
  position: absolute;

  background-color: white;
  border-radius: 10px 10px 20px 2px;
  -webkit-box-shadow: 8px 6px 17px -8px #000000;
  box-shadow: 8px 6px 17px -8px #000000;
`;

function App() {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) || testPlayers
  );
  const [newName, setNewName] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [layout, setLayout] = useState(true);
  const [isPandaMode, setPandaMode] = useState(false);
  const [isSettingPanelOpen, setSettingPanelOpen, ref] = useOnClickOutside();

  const addPlayer = () => {
    const updatedPlayers = [
      ...players,
      { id: players.length, name: newName, hp: 12 },
    ];
    setPlayers(updatedPlayers);
    setNewName("");
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addPlayer();
    }
  };

  const resetPlayers = () => {
    const resetPlayers = players.reduce((acc, cur) => {
      return [...acc, { ...cur, hp: 12 }];
    }, []);

    setPlayers(resetPlayers);
    localStorage.setItem("players", JSON.stringify(resetPlayers));
  };

  return (
    <StyledMain>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        limit={1}
        toastStyle={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
        }}
      />
      <StyledTitle>
        <StyledDiceOne>!</StyledDiceOne>
        JIPSY QUINGUE
        <StyledDiceSix>^</StyledDiceSix>
      </StyledTitle>
      <StyledContainer>
        <ScrollPanel>
          <GameMode {...{ players, setPlayers, layout, isPandaMode }} />
        </ScrollPanel>
      </StyledContainer>
      <StyledAddCard>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <AddIcon size={40} onClick={() => newName && addPlayer()} />
        <RefreshIcon
          size={40}
          onClick={() => setShowResetModal(!showResetModal)}
        />
        <GearIcon
          size={40}
          onClick={() => setSettingPanelOpen(!isSettingPanelOpen)}
        />
      </StyledAddCard>

      <ResetModal {...{ showResetModal, setShowResetModal, resetPlayers }} />
      <RulesModal {...{ showInstructionModal, setShowInstructionModal }} />
      {isSettingPanelOpen && (
        <StyledFloatting ref={ref}>
          <Settings
            onLayoutClick={() => setLayout(!layout)}
            onPandaClick={() => setPandaMode(!isPandaMode)}
            onQuestionClick={() =>
              setShowInstructionModal(!showInstructionModal)
            }
          />
        </StyledFloatting>
      )}
    </StyledMain>
  );
}

export default App;
