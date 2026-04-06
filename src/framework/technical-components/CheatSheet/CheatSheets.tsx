import type {ReactNode} from "react";
import {useRenderMode} from "../../RenderMode.tsx";

export interface CheatSheetProps {
  children: ReactNode;
}

export function CheatSheets(props: CheatSheetProps) {
  const renderMode = useRenderMode();
  if (renderMode === "anki") {
    return <>
      <p>Refer to the following cheat sheets:</p>
      <ul>
        {props.children}
      </ul>
    </>;
  }
  return <>
    <h2>Cheat Sheets</h2>
    {props.children}
  </>;
}
