import {renderModeContext} from "../../RenderMode.tsx";
import type {ExerciseSheetResultProps} from "./ExerciseSheetResult.tsx";

export function ExerciseSheetResultLatex(props: ExerciseSheetResultProps) {
  return <renderModeContext.Provider value="printedExerciseSheetLatex">
    <div style={{ fontSize: "0.5em", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
      \documentclass[12pt]{"{"}article{"}"}{"\n"}
      \usepackage[a4paper, margin=1cm]{"{"}geometry{"}"}{"\n"}
      \usepackage{"{"}amsmath,amsthm,amssymb{"}"}{"\n"}
      \begin{"{"}document{"}"}{"\n"}
      {"\n"}
      \title{"{"}Exercises{"}"}{"\n"}
      \author{"{"}\vspace{"{"}-5ex{"}"}{"}"}{"\n"}
      \date{"{"}\vspace{"{"}-5ex{"}"}{"}"}{"\n"}
      \maketitle{"\n"}
      {"\n"}

      {props.configuration.cheatSheets.length > 0 && <>
          \section{"{"}Cheat Sheets{"}"}{"\n"}
          {"\n"}
          {props.configuration.cheatSheets.map((cheatSheet, _index) => <>
            \subsection{"{"}{cheatSheet.label}{"}"}{"\n"}
            {cheatSheet.content}
            {"\n"}
          </>)}
          \newpage
          {"\n"}
          \section{"{"}Exercises{"}"}{"\n"}
          {"\n"}
      </>}

      {props.configuration.exercises.map((exercise, index) => <>
        \subsection{"{"}Exercise {index + 1}{"}"}{"\n"}
        {"\n"}
        {exercise.problem}
        {"\n"}
      </>)}

      {props.configuration.includeSolutions && <>
        \newpage
        {"\n"}
        \section{"{"}Solutions{"}"}{"\n"}
        {"\n"}
        {props.configuration.exercises.map((exercise, index) => <>
          \subsection{"{"}Exercise {index + 1}{"}"}{"\n"}
          {"\n"}
          <>{exercise.answer}</>
          {"\n"}
        </>)}
      </>}

      \end{"{"}document{"}"}{"\n"}
    </div>
  </renderModeContext.Provider>;
}
