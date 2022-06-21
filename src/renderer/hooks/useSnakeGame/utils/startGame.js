
export const StartGame = (width, setWidth, setGameState, setState, state) => {
    if (width.width < 800) {
      setWidth({
        ...width,
        isMob: true,
      });
    
      
    }
      setState({
        ...state,
        score: 0,
      });
      setGameState(true);

  };