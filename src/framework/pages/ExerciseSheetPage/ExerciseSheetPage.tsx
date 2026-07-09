import {ExerciseSheetConfigurator} from "./ExerciseSheetConfigurator.tsx";
import {useEffect, useState} from "react";
import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";
import {ExerciseSheetResult} from "./ExerciseSheetResult.tsx";

export function ExerciseSheetPage() {
  const [configuration, setConfiguration] = useState<ExerciseSheetConfiguration | null>(null);

  useEffect(() => {
    function eventListener(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setConfiguration(null);
      }
    }
    window.addEventListener("keydown", eventListener);
    return () => window.removeEventListener("keydown", eventListener);
  }, []);
  
  return <>
    <div style={configuration ? {display: "none"} : {}}>
      <ExerciseSheetConfigurator setConfiguration={setConfiguration} />
    </div>
    <div style={configuration ? {} : {display: "none"}}>
      {configuration && <ExerciseSheetResult configuration={configuration} />}
    </div>
  </>;
  
}
