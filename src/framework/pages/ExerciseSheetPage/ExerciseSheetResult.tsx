import {renderModeContext} from "../../RenderMode.tsx";
import {PageBreak} from "../../technical-components/print/PageBreak.tsx";
import type {ExerciseSheetConfiguration} from "./ExerciseSheetConfiguration.ts";

export interface ExerciseSheetResultProps {
  configuration: ExerciseSheetConfiguration;
}

export function ExerciseSheetResult(props: ExerciseSheetResultProps) {
  if (props.configuration.generateLatex) {

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

  } else {

    return <div>
      <renderModeContext.Provider value="printedExerciseSheet">
  
        {props.configuration.cheatSheets.length > 0 && <>
          <h1>Cheat Sheets</h1>
          {props.configuration.cheatSheets.map((cheatSheet, _index) => <div style={{margin: "0.2em"}}>
            <h2>{cheatSheet.label}</h2>
            {cheatSheet.content}
          </div>)}
          <PageBreak />
          <h1>Exercises</h1>
        </>}
  
        {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
          <h2 style={index > 0 ? {marginTop: "8vh"} : {}}>Exercise {index + 1}</h2>
          <div>{exercise.problem}</div>
        </div>)}
  
        {props.configuration.includeSolutions && <>
          <PageBreak />
          <h1>Solutions</h1>
          {props.configuration.exercises.map((exercise, index) => <div style={{margin: "0.2em"}}>
            <h2>Exercise {index + 1}</h2>
            <div>{exercise.answer}</div>
          </div>)}
        </>}
  
      </renderModeContext.Provider>
    </div>;

  }
}
