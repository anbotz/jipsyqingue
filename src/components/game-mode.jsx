import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import PlayerCard from "./player-card";

const StyledPlayerContainer = styled.div`
  display: flex;
  height: 85 vh;
  flex-direction: column;
  justify-content: flex-start;
`;

const PlayerList = styled.div`
  display: flex;
  ${({ layout }) => {
    if (layout) {
      return `display: grid;
      grid-template-columns: auto auto;`;
    } else {
      return "flex-direction: column; justify-content: flex-start;";
    }
  }};
  height: 85 vh;
  flex: 1;
`;

function GameMode({
  players,
  setPlayers,
  option,
  setHp,
  deletePlayer,
  decharge,
}) {
  const { isPandaMode, gridLayout, isToasterEnable } = option;

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

    const newPlayerIds = [...players];
    const savedPlayer = newPlayerIds[source.index];

    newPlayerIds.splice(source.index, 1);
    newPlayerIds.splice(destination.index, 0, savedPlayer);

    setPlayers(newPlayerIds);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        <StyledPlayerContainer>
          {decharge && (
            <PlayerCard
              player={decharge}
              setHp={setHp}
              layout={gridLayout}
              {...{ isToasterEnable, isPandaMode, deletePlayer }}
            />
          )}
          <Droppable droppableId="droppable">
            {(provided) => (
              <PlayerList
                ref={provided.innerRef}
                {...provided.droppableProps}
                layout={gridLayout}
              >
                {players.map((player, i) => (
                  <Draggable draggableId={player.id} index={i} key={player.id}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <PlayerCard
                          {...{
                            player,
                            deletePlayer,
                            setHp,
                            isPandaMode,
                            isToasterEnable,
                          }}
                          layout={gridLayout}
                        />
                      </div>
                    )}
                  </Draggable>
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
