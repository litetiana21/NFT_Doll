import { getRandomCoords } from "./getRandomCoords";
import { onGameOver } from "./gameOver";
export const checkIfEat = (state, setState) => {
  let head = state.snakePos[state.snakePos.length - 1];
  let food = state.foodPos;

  if (head[0] === food[0] && head[1] === food[1]) {
    var pos 
    do {
      pos = getRandomCoords()
      console.log(state.snakePos.includes(pos))
    } while (state.snakePos.includes(pos) === true  );
    state.foodPos = pos;
    
    
    enlargeSnake(state, setState);
    if(state.speed >70){
      setState({
        ...state,
        score: state.score + 1,
        speed: state.speed - 2
      });
    }else{
      setState({
        ...state,
        score: state.score + 1,
      });
    }
  }
};
async function enlargeSnake(state, setState) {
  let newSnake = [...state.snakePos];

  newSnake.unshift([]);
  state.snakePos = newSnake;
}

export const checkIfOutOfBorders = (
  state,
  setState,
  setGameState,
  setWidth,
  width,
  setDirection,
  PK,
) => {
  let head = state.snakePos[state.snakePos.length - 1];
  if (head[0] === 100 || head[1] === 100 || head[0] < 0 || head[1] < 0) {
    onGameOver(state, setState, setGameState, setWidth, width, setDirection,PK);
  }
};
