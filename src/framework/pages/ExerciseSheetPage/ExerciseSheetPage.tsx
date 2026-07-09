import {renderModeContext} from "../../RenderMode.tsx";
import {additionalAxioms} from "../../../content/math/calculus/order/additionalAxioms.tsx";
import {orderAxioms} from "../../../content/math/calculus/order/orderAxioms.tsx";
import type {CheatSheet, Exercise} from "../../content.tsx";
import {useRef} from "react";
import {PageBreak} from "../../technical-components/print/PageBreak.tsx";
import {collectCheatSheetsFromExercises} from "./collectCheatSheetsFromExercises.ts";

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
  return <div>

    {includeCheatSheets && <>
        <h1>Cheat Sheets</h1>
        <renderModeContext.Provider value="printedExerciseSheet_cheatSheets">
          {cheatSheets.current.map((cheatSheet, _index) => <div style={{margin: "0.2em"}}>
            <h2>{cheatSheet.label}</h2>
            {cheatSheet.content}
          </div>)}
        </renderModeContext.Provider>
        <PageBreak />
        <h1>Exercises</h1>
    </>}

    <renderModeContext.Provider value="printedExerciseSheet_exercises">
      {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h2 style={index > 0 ? {marginTop: "8vh"} : {}}>Exercise {index + 1}</h2>
        <div>{exercise.problem}</div>
      </div>)}
    </renderModeContext.Provider>

    {includeSolutions && <>
        <PageBreak />
        <h1>Solutions</h1>
        <renderModeContext.Provider value="printedExerciseSheet_solutions">
          {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
            <h2>Exercise {index + 1}</h2>
            <div>{exercise.answer}</div>
          </div>)}
        </renderModeContext.Provider>
    </>}

  </div>;
}
