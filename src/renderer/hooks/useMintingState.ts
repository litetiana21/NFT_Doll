import useReduxState from "./useReduxState";
import { TmintingState } from "../api/types/minting";
export default function useMintingState(): [
  TmintingState,
  (s: TmintingState) => void,
  () => void
] {
  const [mintingState, setMintingState] = useReduxState(
    (state) => state.mintingState
  );

  const setState = (state: TmintingState) => {
    setMintingState({
      type: "SET_MINTING_STATE",
      arg: {
        mintingState: state,
      },
    });
  };
  const resetState = () => {
    setMintingState({
      type: "RESET_MINTING_STATE",
      arg: null,
    });
  };

  return [mintingState.mintingState, setState, resetState];
}
