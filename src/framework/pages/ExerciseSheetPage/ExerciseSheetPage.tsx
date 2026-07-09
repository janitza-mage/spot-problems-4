import {additionalAxioms} from "../../../content/math/calculus/order/additionalAxioms.tsx";
import {orderAxioms} from "../../../content/math/calculus/order/orderAxioms.tsx";
import type {CheatSheet} from "../../content.tsx";
import {useRef} from "react";
import {collectCheatSheetsFromExercises} from "./collectCheatSheetsFromExercises.ts";
import {ExerciseSheetResult} from "./ExerciseSheetResult.tsx";
import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";

// TODO: mechanism to select exercises to include, and the options how to render them. UI?
const exercisesToInclude = [
  orderAxioms.exercises[0],
  orderAxioms.exercises[1],
  additionalAxioms.exercises[0],
];
const includeCheatSheets = false;
const includeSolutions = true;

export interface ExerciseSheetPageProps {
  print: boolean;
}

// TODO: detect "intro" parts outside of cheat shetts? prob not needed: if we make cheat sheets and the CS section
// invisible, the "intro" part is still there but completely empty/invisible.
export function ExerciseSheetPage(_props: ExerciseSheetPageProps) {
  const cheatSheets = useRef<CheatSheet[] | null>(null);
  if (cheatSheets.current === null) {
    cheatSheets.current = collectCheatSheetsFromExercises(exercisesToInclude);
  }
  const configuration: ExerciseSheetConfiguration = {
    exercises: exercisesToInclude,
    cheatSheets: includeCheatSheets ? cheatSheets.current : [],
    includeSolutions,
  };
  return <ExerciseSheetResult configuration={configuration} />;
}
