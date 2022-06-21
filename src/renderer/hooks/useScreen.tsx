import { TScreenState } from "../api/types/screen";
import useReduxState from "./useReduxState";

export default function useScreen(): [
  TScreenState,
  (screen: TScreenState) => void
] {
  const [{ screen }, setScreen] = useReduxState((state) => state.Screen);

  const updateScreen = (screenString: TScreenState) => {
    setScreen({
      type: "SET_SCREEN",
      arg: {
        screen: screenString,
      },
    });
  };

  return [screen, updateScreen];
}
