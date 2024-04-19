import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import DeleteIcon from "../icon/delete-icon";
import MinusIcon from "../icon/minus-icon";
import PlusIcon from "../icon/plus-icon";
import SkullIcon from "../icon/skullIcon";
import Hell from "../img/hell.gif";
import Universe from "../img/universe.gif";
import Niglo from "../img/niglo.webp";
import Queen from "../img/queen.jpg";

const StyledCard = styled.div`
  background-color: ${({ hp, isPandaMode, isTrash }) => {
    if (isTrash) return "grey";
    if (isPandaMode) {
      if (hp > 20) {
        return "#338056";
      } else if (hp > 15) {
        return "#7F4262";
      } else if (hp > 12) {
        return "#3F5C80";
      } else if (hp > 9) {
        return "#338056";
      } else if (hp > 6) {
        return "#E6AA5D";
      } else if (hp > 3) {
        return "#F2D877";
      } else if (hp > 0) {
        return "#A72539";
      } else if (hp < -3) {
        return "black";
      } else if (hp < 0) {
        return "#878080";
      }
    } else {
      if (hp === 57) {
        return "#6E0F12";
      } else if (hp > 20) {
        return "#c6ca50";
      } else if (hp > 15) {
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
    }

    return "#e84e0f";
  }};

  ${({ hp, isTrash }) => {
    if (isTrash) return;

    if (hp === -18) {
      return "background-image: url(" + Queen + "); background-size: 80%;";
    } else if (hp < -12 && hp !== -18) {
      return (
        "background-image: url(" + Universe + "); background-size: contain;"
      );
    } else if (hp < -6 && hp >= -12) {
      return "background-image: url(" + Hell + "); background-size: contain;";
    } else if (hp > 20 && hp !== 57) {
      return "background-image: url(" + Niglo + "); background-size: contain;";
    }
    return;
  }}
  border-radius: 10px 10px 20px 2px;

  color: white;
  margin: 3px 10px;
  padding: 10px 20px;
  display: flex;
  ${({ layout }) => {
    if (layout) {
      return "width:34%; flex: 1 1 auto; flex-direction: column;";
    } else {
      return "flex-direction: row; flex: 1 1 auto;";
    }
  }}
  ${({ isTrash }) => isTrash && "height: 20px; flex: 0;"}
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
  height: 100%;
`;
const StyledHp = styled.div`
  margin: 5px;
  width: 40px;
  font-size: 30px;
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

const PlayerCard = ({
  player,
  deletePlayer,
  setHp,
  layout,
  isPandaMode,
  isToasterEnable,
}) => {
  const { isTrash, hp, name } = player;
  const [finisherCounter, setFinisherCounter] = useState(0);

  const finisher = () => {
    if (finisherCounter === 0) {
      setTimeout(() => setFinisherCounter(0), 2000);
    }
    setFinisherCounter(finisherCounter + 1);
  };

  useEffect(() => {
    if (isToasterEnable && finisherCounter > 6) {
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
  }, [finisherCounter, isToasterEnable]);

  return (
    <StyledCard
      hp={hp}
      isTrash={isTrash}
      layout={layout}
      isPandaMode={isPandaMode}
    >
      {!isTrash && (
        <DeleteIcon
          size={30}
          onClick={() => deletePlayer(player)}
          layout={layout}
        />
      )}
      <ButtonNameWrapper>
        <StyledName>{name}</StyledName>
      </ButtonNameWrapper>
      <StyledHpBox>
        {!isTrash && (
          <MinusIcon
            size={50}
            onClick={() => {
              if (hp === 55) {
                return setHp(player, -2);
              }
              setHp(player, -1);
              finisher();
            }}
          />
        )}
        <StyledHp>{hp}</StyledHp>
        {!isTrash && (
          <PlusIcon
            size={50}
            onClick={() => {
              if (hp === 53) {
                return setHp(player, 2);
              }
              return setHp(player, 1);
            }}
          />
        )}
      </StyledHpBox>
    </StyledCard>
  );
};

export default PlayerCard;
