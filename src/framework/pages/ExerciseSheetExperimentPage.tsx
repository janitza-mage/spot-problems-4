import {getExerciseLabel} from "../getExerciseLabel.tsx";
import {renderModeContext} from "../RenderMode.tsx";
import {additionalAxioms} from "../../content/math/calculus/order/additionalAxioms.tsx";
import {orderAxioms} from "../../content/math/calculus/order/orderAxioms.tsx";

// TODO: mechanism to select exercises to include. UI?
// TODO: flag to omit solutions, currently all moved to separate pages at the end
const exercisesToInclude = [
  orderAxioms.exercises[0],
  orderAxioms.exercises[1],
  additionalAxioms.exercises[0],
];

// TODO: detect "intro" parts outside of cheat shetts? prob not needed: if we make cheat sheets and the CS section
// invisible, the "intro" part is still there but completely empty/invisible.
export function ExerciseSheetExperimentPage() {
  return <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", overflow: "scroll"}}>
    <renderModeContext.Provider value="printedExerciseSheet_cheatSheets">
      {/* TODO include each cheat sheet only once */}
      {/* TODO show only cheat sheets here */}
      {exercisesToInclude.map((exercise, _index) => <div style={{margin: "0.2em"}}>
        <div>{exercise.intro}</div>
      </div>)}
    </renderModeContext.Provider>;
    <renderModeContext.Provider value="printedExerciseSheet_exercises">
      {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h1>{getExerciseLabel(exercise, index)}</h1>
        {/* TODO omit cheat sheets here */}
        <div>{exercise.intro}</div>
        <h2>Problem</h2>
        <div>{exercise.problem}</div>
        <hr />
      </div>)}
    </renderModeContext.Provider>;
    <renderModeContext.Provider value="printedExerciseSheet_solutions">
      {exercisesToInclude.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h1>{getExerciseLabel(exercise, index)}</h1>
        <h2>Solution</h2>
        <div>{exercise.answer}</div>
        <hr />
      </div>)}
    </renderModeContext.Provider>;
  </div>;
}
