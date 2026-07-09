import {renderModeContext} from "../../RenderMode.tsx";
import {PageBreak} from "../../technical-components/print/PageBreak.tsx";
import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";

export interface ExerciseSheetResultProps {
  configuration: ExerciseSheetConfiguration;
}

export function ExerciseSheetResult(props: ExerciseSheetResultProps) {
  return <div>

    {props.configuration.cheatSheets.length > 0 && <>
      <h1>Cheat Sheets</h1>
      <renderModeContext.Provider value="printedExerciseSheet_cheatSheets">
        {props.configuration.cheatSheets.map((cheatSheet, _index) => <div style={{margin: "0.2em"}}>
          <h2>{cheatSheet.label}</h2>
          {cheatSheet.content}
        </div>)}
      </renderModeContext.Provider>
      <PageBreak />
      <h1>Exercises</h1>
    </>}

    <renderModeContext.Provider value="printedExerciseSheet_exercises">
      {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
        <h2 style={index > 0 ? {marginTop: "8vh"} : {}}>Exercise {index + 1}</h2>
        <div>{exercise.problem}</div>
      </div>)}
    </renderModeContext.Provider>

    {props.configuration.includeSolutions && <>
      <PageBreak />
      <h1>Solutions</h1>
      <renderModeContext.Provider value="printedExerciseSheet_solutions">
        {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
          <h2>Exercise {index + 1}</h2>
          <div>{exercise.answer}</div>
        </div>)}
      </renderModeContext.Provider>
    </>}

  </div>;
}
