import type {ReactNode} from "react";
import {useRenderMode} from "../../RenderMode.tsx";

export interface CheatSheetsModalButtonsProps {
  children: ReactNode;
}

export function CheatSheetsModalButtons(props: CheatSheetsModalButtonsProps) {
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
