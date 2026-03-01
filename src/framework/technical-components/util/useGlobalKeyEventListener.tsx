import {useEffect} from "react";

export function useGlobalHotkeyListener(handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    window.addEventListener("keydown", handler, { capture: true });
    return () => {
      window.removeEventListener("keydown", handler, { capture: true });
    };
  });
}
