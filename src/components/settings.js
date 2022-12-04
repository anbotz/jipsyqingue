import styled from "styled-components";
import PandaIcon from "../icon/pandaIcon";
import OverviewIcon from "../icon/overviewIcon";
import QuestionIcon from "../icon/questionIcon";

const StyledList = styled.div``;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  border-radius: 0 0 20px 0;

  padding: 0 20px;

  :hover {
    background-color: #e6e6e6;
  }
`;

const Settings = ({ onLayoutClick, onPandaClick, onQuestionClick }) => {
  return (
    <StyledList>
      <StyledItem onClick={onLayoutClick}>
        <OverviewIcon />
        Changer de disposition
      </StyledItem>
      <StyledItem onClick={onPandaClick}>
        <PandaIcon /> Changer les couleurs
      </StyledItem>
      <StyledItem onClick={onQuestionClick}>
        <QuestionIcon /> Règles
      </StyledItem>
    </StyledList>
  );
};

export default Settings;
