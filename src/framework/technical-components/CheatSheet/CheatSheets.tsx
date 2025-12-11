import type {ReactNode} from "react";

export interface CheatSheetProps {
  children: ReactNode;
}

export function CheatSheets(props: CheatSheetProps) {
  return <>
    <h2>Cheat Sheets</h2>
    {props.children}
  </>;
}
