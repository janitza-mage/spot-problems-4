import type {CheatSheet, Exercise} from "../../content.tsx";

export type CheatSheetInclusionFlags = Map<object, boolean>;

export interface ExerciseSheetConfiguration {
  exercises: Exercise[];
  cheatSheets: CheatSheet[];
  includeSolutions: boolean;
  generateLatex: boolean;
}
