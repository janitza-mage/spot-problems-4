import {useContext, useRef, useState} from "react";
import type {CheatSheet, Exercise} from "../../content.tsx";
import {UNSAFE_NavigationContext, useNavigate, useResolvedPath} from "react-router-dom";
import {buildUrlPathForContentPath, getContentNodeByPath} from "../../paths.tsx";
import {useUrlToPath} from "../../technical-components/navigation/useUrlToPath.ts";

export interface ExerciseSheetPageProps {
  print: boolean;
}

export function ExerciseSheetPage(props: ExerciseSheetPageProps) {
  const urlToPath = useUrlToPath();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string>("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [allCheatSheets, setAllCheatSheets] = useState<CheatSheet[]>([]);

  function loadExercises() {
    setError("loadExercises() in progress");
    if (!textareaRef.current) {
      setError("no textarea ref");
      return;
    }
    const loadedExercises: Exercise[] = [];
    for (let line of textareaRef.current.value.split("\n")) {
      line = line.trim();
      if (line !== "") {
        const path = urlToPath(line);
        if (path === null) {
          setError("cannot resolve exercise path for " + line);
          return;
        }
        let node = getContentNodeByPath(path);
        if (!node) {
          setError("node not found for " + line);
          return;
        }
        if (node.type !== "exercise") {
          setError("node is not an exercise: " + line);
          return;
        }
        loadedExercises.push(node);
      }
    }
    setExercises(loadedExercises);
    setError("");
  }

  return <div style={{display: "flex", flexDirection: "row", fontSize: "0.7em"}}>
    <div style={{width: "50%", padding: "1vw"}}>
      <div><b>Exercises</b></div>
      <p>Paste the addresses of the exercises here (one address per line):</p>
      <textarea style={{width: "100%", minHeight: "5vw"}} ref={textareaRef}></textarea>
      <div><button style={{fontSize: "1vw", padding: "0.5vw"}} onClick={loadExercises}>Load exercises</button></div>
      <br /><br />
      {exercises.length > 0 && <>
          <div><b>Cheat Sheets</b></div>
      </>}
    </div>
    <div style={{width: "1px", flexGrow: 1, padding: "1vw", borderLeft: "1px solid #aaa"}}>
      {error && <>
          <b style={{color: "red"}}>{error}</b>
      </>}
      {!error && exercises.length > 0 && <>
        <div><b>Exercises</b></div>
        <ul>
          {exercises.map(exercise => <li>{exercise.label}</li>)}
        </ul>
      </>}
    </div>
  </div>;
}
