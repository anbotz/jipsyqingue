import { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ hp }) => {
    if (hp > 15) {
      return "#349443";
    } else if (hp > 12) {
      return "#1EC337";
    } else if (hp > 7) {
      return "#94C41D";
    } else if (hp > 3) {
      return "#E9E611";
    } else if (hp > 0) {
      return "#ECBF0B";
    } else if (hp < -3) {
      return "black";
    } else if (hp < 0) {
      return "red";
    }
    return "orange";
  }};
  color: white;
  margin: 3px 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledName = styled.span``;

const StyledHpBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
const StyledHp = styled.div`
  margin: 5px;
  width: 40px;
`;
const StyledButton = styled.button`
  margin: 5px;
  height: 45px;
  width: 45px;
  font-size: 30px;
`;

const StyledDeleteButton = styled.button`
  margin: 5px;
  height: 30px;
  width: 30px;
  font-size: 20px;
`;

const PlayerCard = ({ player, deletePlayer }) => {
  const [hp, setHp] = useState(12);

  return (
    <StyledCard hp={hp}>
      <div>
        <StyledDeleteButton onClick={() => deletePlayer(player)}>
          X
        </StyledDeleteButton>
        <StyledName>{player.name}</StyledName>
      </div>

      <StyledHpBox>
        <StyledButton onClick={() => setHp(hp - 1)}>-</StyledButton>
        <StyledHp>{hp}</StyledHp>
        <StyledButton onClick={() => setHp(hp + 1)}>+</StyledButton>
      </StyledHpBox>
    </StyledCard>
  );
};

export default PlayerCard;
