import {useEffect, useMemo, useRef} from "react";
import {collectAllExercises} from "../util/collectAllExercises.ts";
import {renderModeContext} from "../RenderMode.tsx";
import {prepareDomSubtreeForAnki} from "./prepareDomSubtreeForAnki.ts";

/**
 * What does not work:
 * - math font is wrong since we can't include font files in the export
 */
export function AnkiExportAllPage() {
  const exercises0 = useMemo(collectAllExercises, []);
  const exercises = [exercises0[0], exercises0[1]];
  
  const contentRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function initializeTextarea() {
    if (!contentRef.current || !textareaRef.current) {
      alert("refs not set");
      return;
    }

    // convert effective styles from the stylesheets to inline style
    const promises: Promise<unknown>[] = [];
    for (const exercise of contentRef.current.children) {
      promises.push(prepareDomSubtreeForAnki(exercise.children[0] as HTMLElement));
      promises.push(prepareDomSubtreeForAnki(exercise.children[1] as HTMLElement));
    }
    await Promise.all(promises);
    
    let csv = "";
    for (const exercise of contentRef.current.children) {
      const front = exercise.children[0].innerHTML.replace(/"/g, '""')
      const back = exercise.children[1].innerHTML.replace(/"/g, '""')
      // for some reason the "Basic"| prefix (first row as card type) is no longer recognized by Anki
      // return `"Basic"|"${frontCsv}"|"${backCsv}"`;
      csv = csv + `"${front}"|"${back}"\n`;
    }
    textareaRef.current.value = csv;
  }
  
  useEffect(() => {
    setTimeout(initializeTextarea, 500);
  }, []);

  // we use visibility:hidden since display:none might interfere with the workings of the content
  return <div style={{position: "absolute", top: "0", left: "0", right: "0", bottom: "0", overflow: "scroll"}}>
    <textarea ref={textareaRef} style={{userSelect: "all", width: "300px", height: "300px"}} />
    <hr />
    <div ref={contentRef} style={{ visibility: "hidden" }}>
      <renderModeContext.Provider value="anki">
        {exercises.map(exercise => <div>
          <div>
            <h1>{exercise.label}</h1>
            <div>{exercise.intro}</div>
            <h2>Problem</h2>
            <div>{exercise.problem}</div>
          </div>
          <div>
            <h2>Solution</h2>
            <div>{exercise.answer}</div>
          </div>
        </div>)}
      </renderModeContext.Provider>
    </div>
  </div>;
}
