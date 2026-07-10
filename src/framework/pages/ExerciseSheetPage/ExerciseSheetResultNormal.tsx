import {renderModeContext} from "../../RenderMode.tsx";
import {PageBreak} from "../../technical-components/print/PageBreak.tsx";
import type {ExerciseSheetResultProps} from "./ExerciseSheetResult.tsx";

export function ExerciseSheetResultNormal(props: ExerciseSheetResultProps) {
  return <div>
    <renderModeContext.Provider value="printedExerciseSheet">

      {props.configuration.cheatSheets.length > 0 && <>
        <h1>Cheat Sheets</h1>
        {props.configuration.cheatSheets.map((cheatSheet, _index) => <div style={{margin: "0.2em"}}>
          <h2>{cheatSheet.label}</h2>
          {cheatSheet.content}
        </div>)}
        <PageBreak />
        <h1>Exercises</h1>
      </>}

      {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h2 style={index > 0 ? {marginTop: "8vh"} : {}}>Exercise {index + 1}</h2>
        <div>{exercise.problem}</div>
      </div>)}

      {props.configuration.includeSolutions && <>
        <PageBreak />
        <h1>Solutions</h1>
        {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
          <h2>Exercise {index + 1}</h2>
          <div>{exercise.answer}</div>
        </div>)}
      </>}

    </renderModeContext.Provider>
  </div>;
}
