import "./index.scss";
import NSFWFolder from "./nsfwFolder/NSFWFolder";
import { TScreenState } from "../../../../../../api/types/screen";
import useScreen from "../../../../../../hooks/useScreen";
import useReduxState from "../../../../../../hooks/useReduxState";
import { useState } from "react";
//import MintingCountdown from "./countdown/MintingCountdown";
import useMintingState from "../../../../../../hooks/useMintingState";
import useDidUpdateEffect from "../../../../../../hooks/useDidUpdateEffect";
import Minting from "./mint/Minting";

export default function HomeScreen(): JSX.Element {
  const [{ connected }] = useReduxState((state) => state.globalData);
  const [, setScreen] = useScreen();
  const [mintingState] = useMintingState();

  const handleDir = (nextScreen: TScreenState) => {
      if (connected) {
      setScreen(nextScreen);
    } else {
      setScreen("CONNECT");
    }
  };

  const [nsfw, setNsfw] = useState(false);
  // const [mintingc, setMintingc] = useState(false);
  const [minting, setMinting] = useState(false);
  useDidUpdateEffect(() => {
    if (mintingState === "NONE") {
      setMinting(false);
    }
  }, [mintingState]);

  return (
    <div className="s-home">
      <Minting open={minting} handleClose={() => setMinting(false)} />
    </div>
  );
}
