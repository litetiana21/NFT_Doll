import reduxAction from "../../renderer/redux/reduxAction";
import { TmintingState } from "../../renderer/api/types/minting";

export function setMintingState(state: TmintingState): void {
  reduxAction({
    type: "SET_MINTING_STATE",
    arg: {
      mintingState: state,
    },
  });
}

export function resetMintingState(): void {
  reduxAction({
    type: "RESET_MINTING_STATE",
    arg: null,
  });
}
