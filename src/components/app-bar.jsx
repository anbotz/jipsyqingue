import { useState } from "react";
import styled from "styled-components";
import GearIcon from "../icon/gearIcon";
import RefreshIcon from "../icon/refreshIcon";
import AddIcon from "../icon/addIcon";

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

const AppBar = ({
  option,
  players,
  setPlayers,
  isSettingPanelOpen,
  setSettingPanelOpen,
  showResetModal,
  setShowResetModal,
  startingHp,
}) => {
  const [newName, setNewName] = useState("");

  const addPlayer = () => {
    const updatedPlayers = [
      ...players,
      { id: players.length, name: newName, hp: startingHp },
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

  return (
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
        toggled={isSettingPanelOpen}
      />
    </StyledAddCard>
  );
};

export default AppBar;
