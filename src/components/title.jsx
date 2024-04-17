import { useEffect, useState } from "react";
import styled from "styled-components";
import Dice from "./dice";

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

const Title = ({ is421Mode }) => {
  const [dices, setDices] = useState(new Array(is421Mode ? 3 : 5).fill(roll()));

  useEffect(() => {
    setDices(new Array(is421Mode ? 3 : 5).fill(roll()));
  }, [is421Mode]);

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
        {/* {is421Mode ? "421" : "JipsyQuingue"} */}
        {dices.map((dice, key) => (
          <Dice key={key} number={dice} onClick={() => updateDices(key)} />
        ))}
      </DiceContainer>
    </StyledTitle>
  );
};

export default Title;
