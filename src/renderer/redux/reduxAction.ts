import store from "./stores/store";
import { actions, ActionKeys } from "./actions";

type DispatchParameter<K extends ActionKeys> = {
  type: K;
  arg: Parameters<typeof actions[K]>[0];
};
/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Dispatch a redux action to the main store and (if required) relay it to other processes

 * @param type Action type
 * @param arg argument / object
 */
export default function reduxAction<K extends ActionKeys>(
  action: DispatchParameter<K>
): void {
  // @ts-ignore: Unreachable code error
  store.dispatch(actions[action.type](action.arg));
}
