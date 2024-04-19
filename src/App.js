import { useState } from "react";
import styled from "styled-components";
import Title from "./components/title";
import Toast from "./components/toast";
import HomeScreen from "./screen/home-screen";
import JipsyScreen from "./screen/jipsy-screen";
import OptionScreen from "./screen/option-screen";
import { GAMES } from "./const";
import FourTwentyOneScreen from "./screen/421-screen";

const { FTO, JIPSY } = GAMES;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
  overflow: none;
`;

const StyledContainer = styled.article`
  display: flex;
  min-height: 0;
  min-width: 0;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

function App() {
  const [option, setOption] = useState(
    JSON.parse(localStorage.getItem("option")) ?? {
      gridLayout: false,
      isPandaMode: false,
      isToasterEnable: true,
      is421NoLimitMode: false,
    }
  );

  const [game, setGame] = useState(JIPSY);
  const [optionScreenOpen, setOptionScreenOpen] = useState(false);

  return (
    <StyledMain>
      <Toast />
      <Title {...{ optionScreenOpen, setOptionScreenOpen, game }} />
      <StyledContainer>
        {optionScreenOpen ? (
          <OptionScreen
            {...{ option, setOption }}
            goHome={() => {
              setGame(undefined);
              setOptionScreenOpen(false);
            }}
          />
        ) : (
          <>
            {!game ? (
              <HomeScreen {...{ setGame }} />
            ) : (
              <>
                {game === JIPSY && <JipsyScreen {...{ option }} />}
                {game === FTO && <FourTwentyOneScreen {...{ option }} />}
              </>
            )}
          </>
        )}
      </StyledContainer>
    </StyledMain>
  );
}

export default App;
