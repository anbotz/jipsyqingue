import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Draggable } from '@hello-pangea/dnd';
import DeleteIcon from "../icon/delete-icon";
import MinusIcon from "../icon/minus-icon";
import PlusIcon from "../icon/plus-icon";
import SkullIcon from "../icon/skullIcon";
import Hell from "../img/hell.gif";
import Universe from "../img/universe.gif";
import Niglo from "../img/niglo.webp";


const StyledCard = styled.div`

  /* background-color: ${({ hp }) => {
    if (hp > 15) {
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
    return "#e84e0f";
  }};*/
  
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

  ${({ hp }) => {
    if (hp < -6 && hp >= -12) {
      return "background-image: url("+Hell+"); background-size: contain;"
    } else if (hp < -12) {
      return "background-image: url("+Universe+"); background-size: contain;"
    } else if (hp > 20 ) {
      return "background-image: url("+Niglo+"); background-size: contain;"
    }
    return ;
  }}
  border-radius: 10px 10px 20px 2px;

  color: white;
  margin: 3px 10px;
  padding: 10px;
  display: flex;
  ${({layout}) => {
    if(layout === true){
      return "flex-direction: row; flex: 1 1 auto;";
    }else{
      return "width:34%; flex: 1 1 auto; flex-direction: column;"
    }
  }}
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

const PlayerCard = ({ player, deletePlayer, setHp, index, layout }) => {
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
    <Draggable draggableId={player.name} index={index} key={player.name}>
      {provided => (
        <StyledCard 
          hp={player.hp}
          layout={layout}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
          <DeleteIcon size={30} onClick={() => deletePlayer(player)} layout={layout}/>
          <ButtonNameWrapper>
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
      )}
    </Draggable>
  );
};

export default PlayerCard;
