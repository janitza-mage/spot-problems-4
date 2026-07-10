import {renderModeContext} from "../../RenderMode.tsx";
import type {ExerciseSheetResultProps} from "./ExerciseSheetResult.tsx";
import {useEffect, useRef} from "react";

function translateStandardTags(from: HTMLElement, to: HTMLElement) {
  for (const child of from.childNodes) {
    to.appendChild(child.cloneNode(true));
  }
}

export function ExerciseSheetResultLatex(props: ExerciseSheetResultProps) {
  const intermediateRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!intermediateRef.current || !finalRef.current) {
      return;
    }
    finalRef.current.innerHTML = "";
    translateStandardTags(intermediateRef.current, finalRef.current);
  });
  
  return <renderModeContext.Provider value="printedExerciseSheetLatex">
    <div style={{ display: "none" }} ref={intermediateRef}>
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
    <div style={{ fontSize: "0.5em", fontFamily: "monospace", whiteSpace: "pre-wrap" }} ref={finalRef} />
  </renderModeContext.Provider>;
}
