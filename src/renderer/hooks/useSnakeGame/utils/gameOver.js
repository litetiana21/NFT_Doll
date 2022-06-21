import { getRandomCoords } from "./getRandomCoords";

export const onGameOver = (
  state,
  setState,
  setGameState,
  setWidth,
  width,
  setDirection,
  PK,
) => {
  if (state.score > state.PB) {
    state.PB = state.score;
  }
  setWidth({
    ...width,
    isMob: false,
  });
  setState({
    ...state,
    snakePos: [[25, 25]],
    direction: "Right",
    speed: 120,
    foodPos: getRandomCoords(),
    attempt: state.attempt + 1,
    isNewHighScore: false
  });
  if (width.width < 800) {
    setDirection("Right");
  }
  setDirection("Right");
  setGameState(false);
};
