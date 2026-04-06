import {useMemo} from "react";
import {collectAllExercises} from "../util/collectAllExercises.ts";
import type {Exercise} from "../content.tsx";
import {renderToStaticMarkup} from "react-dom/server";
import {renderModeContext} from "../RenderMode.tsx";

function renderExerciseToCsvLine(exercise: Exercise): string {
  
  const front = <renderModeContext.Provider value="anki">
    <div style={{margin: "0.2em"}}>
      <h1>{exercise.label}</h1>
      <div>{exercise.intro}</div>
      <h2>Problem</h2>
      <div>{exercise.problem}</div>
    </div>
  </renderModeContext.Provider>;
  
  const back = <renderModeContext.Provider value="anki">
    <div style={{margin: "0.2em"}}>
      <h2>Solution</h2>
      <div>{exercise.answer}</div>
    </div>
  </renderModeContext.Provider>;
  
  const frontHtml = renderToStaticMarkup(front);
  const backHtml = renderToStaticMarkup(back);
  
  const frontCsv = frontHtml.replace(/"/g, '""');
  const backCsv = backHtml.replace(/"/g, '""');
  
  // for some reason the "Basic"| prefix (first row as card type) is no longer recognized by Anki
  // return `"Basic"|"${frontCsv}"|"${backCsv}"`;
  return `"${frontCsv}"|"${backCsv}"`;
}

export function AnkiExportAllPage() {
  const exercises = useMemo(collectAllExercises, []);
  
  return <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", overflow: "scroll"}}>
    <pre style={{userSelect: "all"}}>
      {renderExerciseToCsvLine(exercises[0])}{"\n"}
      {renderExerciseToCsvLine(exercises[1])}{"\n"}
      {"\n"}
    </pre>
  </div>;
}

/*
    public void writeLine(String... segments) {
        boolean first = true;
        for (String segment : segments) {
            if (first) {
                first = false;
            } else {
                printWriter.print('|');
            }
            printWriter.print('"');
            printWriter.print(segment.replace("\"", "\"\""));
            printWriter.print('"');
        }
        printWriter.println();
    }

    public void writeBasic(String front, String back) {
        writeLine("Basic", front, back);
    }

 */