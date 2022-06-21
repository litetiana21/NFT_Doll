import React from 'react';

import {
  useState,
  useEffect,
  RefObject,
  KeyboardEvent,
  useCallback,
} from "react";
import {
  changeDirectionWeb,
  changeDirectionMobile,
} from "./utils/changeDirection.js";
import Hammer from "hammerjs";
import { onGameOver } from "./utils/gameOver";
import { getRandomCoords } from "./utils/getRandomCoords";
import { StartGame } from "./utils/startGame";
import { checkIfEat, checkIfOutOfBorders } from "./utils/checkIfEat";
import useInterval from "./utils/useInterval";
import useReduxState from "../useReduxState";

/* eslint-disable react-hooks/exhaustive-deps*/
interface IGameState {
  snakePos: number[][];
  speed: number;
  foodPos: number[];
  PB: number;
  score: number;
  attempt: number;
}

export default function useSnakeGame({
  container,
}: {
  container: RefObject<HTMLDivElement> | null;
}) {
  const [state, setState] = useState<IGameState>({
    snakePos: [[25, 25]],
    speed: 120,
    foodPos: getRandomCoords(),
    PB: 0,
    score: 0,
    attempt: 0,
  });
  const [{ wallet }] = useReduxState((state) => state.globalData);
  var PK = wallet!.publicKey.toBase58();
  const [width, setWidth] = useState({
    width: 0,
    isMob: false,
  });

  const [gameState, setGameState] = useState(false);
  const [direction, setDirection] = useState<"Right" | "Left" | "Up" | "Down">(
    "Right"
  );

  const handleDirectionChange = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      setDirection(
        changeDirectionWeb(e, direction) as "Right" | "Left" | "Up" | "Down"
      );
    },
    [direction]
  );

  const handleMobileDirectionChange = (
    e: "swipedown" | "swipeup" | "swipeleft" | "swiperight"
  ) => {
    if (width.width < 800) {
      setDirection(
        changeDirectionMobile(e, state) as "Right" | "Left" | "Up" | "Down"
      );
    }
  };

  const handleSizingAndEvents = () => {
    setWidth({ ...width, width: window.innerWidth });
  };
  function enableScroll() {
    window.onscroll = function () {};
  }
  useEffect(() => {
    handleSizingAndEvents();

    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    setWidth({ ...width, width: window.innerWidth });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  useEffect(() => {
    if (container && container.current) {
      console.log(document.getElementById("game-wrap"));
      console.log(container);
      const mc = new Hammer(container.current);

      // let the pan gesture support all directions.
      // this will block the vertical scrolling on a touch-device while on the element
      mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

      // listen to events...
      mc.on("swipeup swipedown swipeleft swiperight ", function (ev) {
        console.log(ev.type);
        handleMobileDirectionChange(
          ev.type as "swipedown" | "swipeup" | "swipeleft" | "swiperight"
        );
      });
    }
  }, [gameState]);

  useEffect(() => {
    checkIfOutOfBorders(
      state,
      setState,
      setGameState,
      setWidth,
      width,
      setDirection,
      PK,
    );
    checkIfEat(state, setState);
    checkIfCollapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.snakePos, direction]);

  function noScroll() {
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
  const focusOnDiv = () => {
    if (container && container.current) {
      container.current.focus();
    }
    noScroll();
  };

  const moveSnake = () => {
    let dots = [...state.snakePos];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "Right":
        head = [head[0] + 5, head[1]];
        break;
      case "Left":
        head = [head[0] - 5, head[1]];
        break;
      case "Down":
        head = [head[0], head[1] + 5];
        break;
      case "Up":
        head = [head[0], head[1] - 5];
        break;
    }

    dots.push(head);
    dots.shift();

    setState({
      ...state,
      snakePos: dots,
    });
  };
  function checkIfCollapsed() {
    let snake = [...state.snakePos];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot, index) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver(
          state,
          setState,
          setGameState,
          setWidth,
          width,
          setDirection,
          // PK,
        );
      }
    });
  }

  const startGame = () => {
    StartGame(width, setWidth, setGameState, setState, state);
  };

  useInterval(moveSnake, state.speed, gameState);

  return {
    startGame,
    gameState,
    snakePos: state.snakePos,
    score: state.score,
    foodPos: state.foodPos,
    PB: state.PB,
    attempt: state.attempt,
    width: width.width,
    handleDirectionChange,
    focusOnDiv,
  };
}
