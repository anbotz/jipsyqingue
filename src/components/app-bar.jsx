import { useState } from "react";
import styled from "styled-components";
import RefreshIcon from "../icon/refreshIcon";
import AddIcon from "../icon/addIcon";
import QuestionIcon from "../icon/questionIcon";

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
  showResetModal,
  setShowResetModal,
  setShowInstructionModal,
  showInstructionModal,
  addPlayer,
}) => {
  const [newName, setNewName] = useState("");

  const createPlayer = () => {
    addPlayer(newName);
    setNewName("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      createPlayer();
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
      <AddIcon size={40} onClick={() => newName && createPlayer()} />
      <RefreshIcon
        size={40}
        onClick={() => setShowResetModal(!showResetModal)}
      />
      <QuestionIcon
        size={40}
        onClick={() => setShowInstructionModal(!showInstructionModal)}
      />
    </StyledAddCard>
  );
};

export default AppBar;
