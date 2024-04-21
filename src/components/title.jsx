import { useEffect, useState } from "react";
import styled from "styled-components";
import Dice from "./dice";
import GearIcon from "../icon/gear";

const StyledContainer = styled.h4`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30px;
  height: 55px;
  margin: 5px;
`;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  display: none;
  @media screen and (min-width: 640px) {
    display: flex;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const roll = () => Math.floor(Math.random() * 6) + 1;

const rolls = (length) => Array.from({ length }, () => roll());

const Title = ({ game, optionScreenOpen, setOptionScreenOpen }) => {
  const [dices, setDices] = useState([]);

  useEffect(() => {
    setDices(rolls(game?.numberOfDices ?? 0));
  }, [game]);

  const updateDices = (key) => {
    const updatedValues = dices.map((item, index) =>
      index === key ? roll() : item
    );

    setDices(updatedValues);
  };

  return (
    <StyledContainer>
      <LeftContainer>
        <img
          src="/malin-dice.png"
          width="50px"
          onClick={() => setDices(rolls(game?.numberOfDices ?? 0))}
        />
        <StyledTitle>MALIN DICES</StyledTitle>
      </LeftContainer>
      <DiceContainer>
        {dices.map((dice, key) => (
          <Dice key={key} number={dice} onClick={() => updateDices(key)} />
        ))}
      </DiceContainer>
      <GearIcon
        size={55}
        onClick={() => setOptionScreenOpen(!optionScreenOpen)}
        toggled={optionScreenOpen}
      />
    </StyledContainer>
  );
};

export default Title;
