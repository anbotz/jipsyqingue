import React from "react";
import NumberOneIcon from "../icon/numberOneIcon";
import NumberTwoIcon from "../icon/numberTwoIcon";
import NumberThreeIcon from "../icon/numberThreeIcon";
import NumberFourIcon from "../icon/numberFourIcon";
import NumberFiveIcon from "../icon/numberFiveIcon";
import NumberSixIcon from "../icon/numberSixIcon";

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
