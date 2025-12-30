import type {Exercise, Folder} from "../content.tsx";
import {contentTree} from "../../content/contentTree.tsx";
import {useMemo} from "react";
import {getExerciseLabel} from "../getExerciseLabel.tsx";

function collectAllExercisesFromFolder(folder: Folder): Exercise[] {
  let result: Exercise[] = [];
  for (const element of folder.elements) {
    switch (element.type) {

      case "folder":
          result = [...result, ...collectAllExercisesFromFolder(element)];
          break;
          
      case "collection":
          result = [...result, ...element.exercises];
          break;
          
    }
  }
  return result;
}

function collectAllExercises(): Exercise[] {
  return collectAllExercisesFromFolder(contentTree);
}

export function PrintAllPage() {
  const exercises = useMemo(collectAllExercises, []);
  
  return <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", overflow: "scroll"}}>
    {exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
      <h1>{getExerciseLabel(exercise, index)}</h1>
      <div>{exercise.intro}</div>
      <h2>Problem</h2>
      <div>{exercise.problem}</div>
      <h2>Solution</h2>
      <div>{exercise.answer}</div>
      <hr />
      </div>
    )}
  </div>;
}
