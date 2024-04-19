import styled from "styled-components";
import { GAMES } from "../const";

const { FTO, JIPSY } = GAMES;

const StyledContainer = styled.article`
  display: flex;
  min-height: 0;
  min-width: 0;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const StyledChoice = styled.button`
  height: 50%;
  margin: 5px;
  border-radius: 10px 10px 20px 2px;
  font-size: 50px;
`;

const HomeScreen = ({ setGame }) => {
  return (
    <StyledContainer>
      <StyledChoice onClick={() => setGame(FTO)}>421</StyledChoice>
      <StyledChoice onClick={() => setGame(JIPSY)}>GITAN</StyledChoice>
    </StyledContainer>
  );
};

export default HomeScreen;
