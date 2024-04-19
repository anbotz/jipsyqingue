import React from "react";
import NumberOneIcon from "../icon/number-1";
import NumberTwoIcon from "../icon/number-2";
import NumberThreeIcon from "../icon/number-3";
import NumberFourIcon from "../icon/number-4";
import NumberFiveIcon from "../icon/number-5";
import NumberSixIcon from "../icon/number-6";

const Dice = ({ number, onClick }) => {
  const SIZE = 40;

  switch (number) {
    case 1:
      return <NumberOneIcon size={SIZE} onClick={onClick} />;
    case 2:
      return <NumberTwoIcon size={SIZE} onClick={onClick} />;
    case 3:
      return <NumberThreeIcon size={SIZE} onClick={onClick} />;
    case 4:
      return <NumberFourIcon size={SIZE} onClick={onClick} />;
    case 5:
      return <NumberFiveIcon size={SIZE} onClick={onClick} />;
    case 6:
      return <NumberSixIcon size={SIZE} onClick={onClick} />;

    default:
      return <></>;
  }
};

export default Dice;
