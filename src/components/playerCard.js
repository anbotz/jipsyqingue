import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import DeleteIcon from "../icon/delete-icon";
import MinusIcon from "../icon/minus-icon";
import PlusIcon from "../icon/plus-icon";
import SkullIcon from "../icon/skullIcon";

const StyledCard = styled.div`
  background-color: ${({ hp }) => {
    if (hp > 15) {
      return "#349738";
    } else if (hp > 12) {
      return "#a6cb66";
    } else if (hp > 9) {
      return "#c6ca50";
    } else if (hp > 6) {
      return "#fddf87";
    } else if (hp > 3) {
      return "#f0a174";
    } else if (hp > 0) {
      return "#f28b32";
    } else if (hp < -3) {
      return "black";
    } else if (hp < 0) {
      return "#af1035";
    }
    return "#e84e0f";
  }};
  border-radius: 10px 10px 20px 2px;

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

const ButtonNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFinisher = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
`;

const PlayerCard = ({ player, deletePlayer, setHp }) => {
  const [finisherCounter, setFinisherCounter] = useState(0);

  const finisher = () => {
    if (finisherCounter === 0) {
      setTimeout(() => setFinisherCounter(0), 2000);
    }
    setFinisherCounter(finisherCounter + 1);
  };

  useEffect(() => {
    if (finisherCounter > 6) {
      toast(
        <StyledFinisher>
          <SkullIcon size="40" />
          <span>TERMINE LEEEE !!</span>
          <SkullIcon size="40" />
        </StyledFinisher>,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: 1,
        }
      );
      setFinisherCounter(0);
    }
  }, [finisherCounter]);
  return (
    <StyledCard hp={player.hp}>
      <ButtonNameWrapper>
        <DeleteIcon size={30} onClick={() => deletePlayer(player)} />
        <StyledName>{player.name}</StyledName>
      </ButtonNameWrapper>
      <StyledHpBox>
        <MinusIcon
          size={30}
          onClick={() => {
            setHp(player, player.hp - 1);
            finisher();
          }}
        />
        <StyledHp>{player.hp}</StyledHp>
        <PlusIcon size={30} onClick={() => setHp(player, player.hp + 1)} />
      </StyledHpBox>
    </StyledCard>
  );
};

export default PlayerCard;
