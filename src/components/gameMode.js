import styled from "styled-components";
import PlayerCard from "./playerCard";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const StyledPlayerContainer = styled.div`
  display: flex;
  height: 85 vh;
  flex: 1;
`;

const PlayerList = styled.div`
  display: flex;
  ${({ layout }) => {
    if (layout) {
      return "flex-wrap: wrap; align-items: flex-start;align-content: flex-start;";
    } else {
      return " flex-direction: column; justify-content: center;";
    }
  }};
  height: 85 vh;
  flex: 1;
`;

function GameMode({ players, setPlayers, option }) {
  const { isPandaMode, gridLayout: layout, isToasterEnable } = option;

  const deletePlayer = (player) => {
    const updatedPlayers = players.filter((pl) => pl !== player);
    updatedPlayers.map((player, i) => (player.id = i));
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const setHp = (player, updatedHp) => {
    const updatedPlayers = players.reduce((acc, cur) => {
      if (cur === player) {
        return [...acc, { ...player, hp: updatedHp }];
      }
      return [...acc, cur];
    }, []);

    setPlayers(updatedPlayers);
  };

  //Drag&Drop
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newPlayerIds = Array.from(players);
    const savedPlayer = newPlayerIds[source.index];

    newPlayerIds.splice(source.index, 1);
    newPlayerIds.splice(destination.index, 0, savedPlayer);

    newPlayerIds.map((player, i) => (player.id = i));
    setPlayers(newPlayerIds);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        <StyledPlayerContainer>
          <Droppable droppableId="droppable">
            {(provided) => (
              <PlayerList
                ref={provided.innerRef}
                {...provided.droppableProps}
                layout={layout}
              >
                {players.map((player, i) => (
                  <PlayerCard
                    player={player}
                    key={`${player.name}${i}`}
                    index={i}
                    deletePlayer={deletePlayer}
                    setHp={setHp}
                    layout={layout}
                    isPandaMode={isPandaMode}
                    {...{ isToasterEnable }}
                  />
                ))}
                {provided.placeholder}
              </PlayerList>
            )}
          </Droppable>
        </StyledPlayerContainer>
      }
    </DragDropContext>
  );
}

export default GameMode;
