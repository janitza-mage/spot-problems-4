import {renderModeContext} from "../../RenderMode.tsx";
import type {ExerciseSheetResultProps} from "./ExerciseSheetResult.tsx";
import {useEffect, useRef} from "react";

const specialCloneMarker = "SPECIAL-CLONE-MARKER";

function translateStandardTags(from: HTMLElement, to: HTMLElement) {
  
  function add(s: string): void {
    to.appendChild(document.createTextNode(s));
  }
  
  for (const child of from.childNodes) {
    if (child instanceof HTMLElement) {
      switch (child.nodeName) {
        
        case "P": {
          add("\n");
          translateStandardTags(child, to);
          add("\n\n");
          break;
        }
        
        case "I": {
          add("\\textit{");
          translateStandardTags(child, to);
          add("}");
          break;
        }
        
        case "UL": {
          add("\n\\begin{itemize}\n");
          translateStandardTags(child, to);
          add("\\end{itemize}\n");
          break;
        }
        
        case "LI": {
          add("\\item ");
          translateStandardTags(child, to);
          add("\n");
          break;
        }
        
        default: {
          const myClone = child.cloneNode(false) as HTMLElement;
          myClone.appendChild(document.createTextNode(specialCloneMarker));
          const myCloneText = myClone.outerHTML;
          const markerIndex = myCloneText.indexOf(specialCloneMarker);
          add(markerIndex < 0 ? myCloneText : myCloneText.substring(0, markerIndex));
          translateStandardTags(child, to);
          add(markerIndex < 0 ? "</unknown>" : myCloneText.substring(markerIndex + specialCloneMarker.length));
          break;
        }
        
      }
    } else {
      to.appendChild(child.cloneNode(true));
    }
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
            {"\n"}
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
