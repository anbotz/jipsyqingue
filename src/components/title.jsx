import { useEffect, useState } from "react";
import styled from "styled-components";
import Dice from "./dice";
import GearIcon from "../icon/gear";

const StyledTitle = styled.h4`
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

const roll = () => Math.floor(Math.random() * 6) + 1;

const Title = ({ game, optionScreenOpen, setOptionScreenOpen }) => {
  const [dices, setDices] = useState([]);

  useEffect(() => {
    setDices(new Array(game?.numberOfDices ?? 0).fill(roll()));
  }, [game]);

  const updateDices = (key) => {
    const updatedValues = dices.map((item, index) =>
      index === key ? roll() : item
    );

    setDices(updatedValues);
  };

  return (
    <StyledTitle>
      <div>MALIN DICES</div>
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
    </StyledTitle>
  );
};

export default Title;
