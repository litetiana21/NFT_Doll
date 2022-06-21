import { useEffect, useRef } from "react";

/*eslint-disable @typescript-eslint/no-explicit-any */

export default function useDidUpdateEffect(
  fn: () => void,
  inputs: ReadonlyArray<any>
): void {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (fn) {
      if (didMountRef.current) fn();
      else didMountRef.current = true;
    } // eslint-disable-next-line
  }, inputs? inputs : []);
}
