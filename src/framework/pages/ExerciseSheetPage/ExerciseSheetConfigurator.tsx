import {useRef, useState} from "react";
import type {CheatSheet, Exercise} from "../../content.tsx";
import {getContentNodeByPath} from "../../paths.tsx";
import {useUrlToPath} from "../../technical-components/navigation/useUrlToPath.ts";
import {collectCheatSheetsFromExercises} from "./collectCheatSheetsFromExercises.ts";
import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";

/*
Sample input:

http://localhost:3000/spot-problems-4/math/calculus/order/orderAxioms/0
http://localhost:3000/spot-problems-4/math/calculus/fields/axioms/0

 */

export interface ExerciseSheetConfiguratorProps {
  setConfiguration: (configuration: ExerciseSheetConfiguration) => void;
}

export function ExerciseSheetConfigurator(props: ExerciseSheetConfiguratorProps) {
  const urlToPath = useUrlToPath();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string>("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [allCheatSheets, setAllCheatSheets] = useState<CheatSheet[]>([]);
  const [cheatSheetInclusionFlags, setCheatSheetInclusionFlags] = useState<Map<object, boolean>>(new Map());
  const [includeSolutions, setIncludeSolutions] = useState(true);
  const [generateLatex, setGenerateLatex] = useState(false);

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
    const cheatSheets = collectCheatSheetsFromExercises(loadedExercises);
    setError("");
    setExercises(loadedExercises);
    setAllCheatSheets(cheatSheets);
    
    const updatedCheatSheetInclusionFlags = new Map<object, boolean>();
    for (const cheatSheet of cheatSheets) {
      updatedCheatSheetInclusionFlags.set(cheatSheet.deduplicationToken, cheatSheetInclusionFlags.get(cheatSheet.deduplicationToken) ?? true);
    }
    setCheatSheetInclusionFlags(updatedCheatSheetInclusionFlags);
  }
  
  function onClickShow() {
    props.setConfiguration({
      exercises,
      cheatSheets: allCheatSheets.filter(cheatSheet => !!cheatSheetInclusionFlags.get(cheatSheet.deduplicationToken)),
      includeSolutions,
      generateLatex,
    });
  }

  return <div style={{display: "flex", flexDirection: "row", fontSize: "0.7em"}}>

    {/* left panel */}
    <div style={{width: "50%", padding: "1vw"}}>
      <div><b>Exercises</b></div>
      <p>Paste the addresses of the exercises here (one address per line):</p>
      <textarea style={{width: "100%", minHeight: "5vw"}} ref={textareaRef}></textarea>
      <div><button style={{fontSize: "1vw", padding: "0.5vw"}} onClick={loadExercises}>Load exercises</button></div>
      <br /><br />
      {exercises.length > 0 && <>
          <div><b>Cheat Sheets</b></div>
          {allCheatSheets.map(cheatSheet => <div>
            <input
                type="checkbox"
                checked={!!cheatSheetInclusionFlags.get(cheatSheet.deduplicationToken)}
                onChange={() => {
                  const updated = new Map(cheatSheetInclusionFlags);
                  updated.set(cheatSheet.deduplicationToken, !updated.get(cheatSheet.deduplicationToken))
                  setCheatSheetInclusionFlags(updated);
                }}
            />
            {cheatSheet.label}
          </div>)}
          <br />
          <div><b>Options</b></div>
          <div>
            <input type="checkbox" checked={includeSolutions} onChange={() => setIncludeSolutions(!includeSolutions)} />
            Include Solutions
          </div>
          <div>
            <input type="checkbox" checked={generateLatex} onChange={() => setGenerateLatex(!generateLatex)} />
            Generate LaTeX code
          </div>
          <br />
          <br />
          <div>
              <button style={{fontSize: "1.2em", padding: "0.2em", marginLeft: "0.5em"}} onClick={onClickShow}>show</button>
              <span style={{fontSize: "0.7em", marginLeft: "1em"}}>press the escape key to return to this screen</span>
          </div>
      </>}
    </div>

    {/* right panel */}
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
