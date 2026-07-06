import {createContext, useContext} from "react";

export type RenderMode = "normal" | "genericPrinted" | "printedExerciseSheet_cheatSheets" | "printedExerciseSheet_exercises" | "printedExerciseSheet_solutions" | "anki";

export const renderModeContext = createContext<RenderMode>("normal");

export function useRenderMode(): RenderMode {
  return useContext(renderModeContext);
}
