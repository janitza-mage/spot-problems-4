import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";
import {ExerciseSheetResultLatex} from "./ExerciseSheetResultLatex.tsx";
import {ExerciseSheetResultNormal} from "./ExerciseSheetResultNormal.tsx";

export interface ExerciseSheetResultProps {
  configuration: ExerciseSheetConfiguration;
}

export function ExerciseSheetResult(props: ExerciseSheetResultProps) {
  if (props.configuration.generateLatex) {
    return <ExerciseSheetResultLatex configuration={props.configuration} />;
  } else {
    return <ExerciseSheetResultNormal configuration={props.configuration} />;
  }
}
