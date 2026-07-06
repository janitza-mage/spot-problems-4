import {useMemo} from "react";
import {getExerciseLabel} from "../getExerciseLabel.tsx";
import {collectAllExercises} from "../util/collectAllExercises.ts";
import {renderModeContext} from "../RenderMode.tsx";
import {CheatSheetsModalButtons} from "../technical-components/CheatSheet/CheatSheetsModalButtons.tsx";
import {CheatSheetModalButton} from "../technical-components/CheatSheet/CheatSheetModalButton.tsx";


export function PrintAllPage() {
  const exercises = useMemo(collectAllExercises, []);

  return <renderModeContext.Provider value="genericPrinted">
    <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", overflow: "scroll"}}>
      {exercises.map((exercise, index) => {
        const cheatSheets = exercise.cheatSheets ?? [];
        return <div style={{margin: "0.2em"}}>
          <h1>{getExerciseLabel(exercise, index)}</h1>
          {cheatSheets.length > 0 && <CheatSheetsModalButtons>
            {cheatSheets.map((cheatSheet) => <CheatSheetModalButton label={cheatSheet.label} children={cheatSheet.content} />)}
          </CheatSheetsModalButtons>}
          <h2>Problem</h2>
          <div>{exercise.problem}</div>
          <h2>Solution</h2>
          <div>{exercise.answer}</div>
          <hr />
        </div>;
      })}
    </div>
  </renderModeContext.Provider>;
}
