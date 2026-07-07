import {getExerciseLabel} from "../getExerciseLabel.tsx";
import {renderModeContext} from "../RenderMode.tsx";
import {additionalAxioms} from "../../content/math/calculus/order/additionalAxioms.tsx";
import {orderAxioms} from "../../content/math/calculus/order/orderAxioms.tsx";
import type {CheatSheet, Exercise} from "../content.tsx";
import {useRef} from "react";
import {PageBreak} from "../technical-components/print/PageBreak.tsx";

// TODO: mechanism to select exercises to include. UI?
// TODO: flag to omit solutions, currently all moved to separate pages at the end
const exercisesToInclude = [
  orderAxioms.exercises[0],
  orderAxioms.exercises[1],
  additionalAxioms.exercises[0],
];

function collectCheatSheets(exercises: Exercise[]): CheatSheet[] {
  const map = new Map<object, CheatSheet>();
  for (const exercise of exercises) {
    for (const cheatSheet of (exercise.cheatSheets ?? [])) {
      map.set(cheatSheet.deduplicationToken, cheatSheet);
    }
  }
  const deduplicatedCheatSheets = [...map.values()];
  deduplicatedCheatSheets.sort((x, y) => x.label.localeCompare(y.label));
  return deduplicatedCheatSheets;
}

// TODO: detect "intro" parts outside of cheat shetts? prob not needed: if we make cheat sheets and the CS section
// invisible, the "intro" part is still there but completely empty/invisible.
export function ExerciseSheetExperimentPage() {
  const cheatSheets = useRef<CheatSheet[] | null>(null);
  if (cheatSheets.current === null) {
    cheatSheets.current = collectCheatSheets(exercisesToInclude);
  }
  return <div>

    <h1>Cheat Sheets</h1>
    <renderModeContext.Provider value="printedExerciseSheet_cheatSheets">
      {cheatSheets.current.map((cheatSheet, _index) => <div style={{margin: "0.2em"}}>
        <h2>{cheatSheet.label}</h2>
        {cheatSheet.content}
      </div>)}
    </renderModeContext.Provider>

    <PageBreak />

    <h1>Exercises</h1>
    <renderModeContext.Provider value="printedExerciseSheet_exercises">
      {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h1>{getExerciseLabel(exercise, index)}</h1>
        <h2>Problem</h2>
        <div>{exercise.problem}</div>
        <hr />
      </div>)}
    </renderModeContext.Provider>

    <PageBreak />

    <h1>Solutions</h1>
    <renderModeContext.Provider value="printedExerciseSheet_solutions">
      {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h1>{getExerciseLabel(exercise, index)}</h1>
        <h2>Solution</h2>
        <div>{exercise.answer}</div>
        <hr />
      </div>)}
    </renderModeContext.Provider>

  </div>;
}
