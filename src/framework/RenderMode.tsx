import {createContext, useContext} from "react";

export type RenderMode = "normal" | "print" | "anki";

export const renderModeContext = createContext<RenderMode>("normal");

export function useRenderMode(): RenderMode {
  return useContext(renderModeContext);
}
