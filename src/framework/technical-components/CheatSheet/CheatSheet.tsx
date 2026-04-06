import {type ReactNode, useState} from "react";
import {Button, Dialog} from "@mui/material";
import {useRenderMode} from "../../RenderMode.tsx";

export interface CheatSheetProps {
  label: ReactNode;
  children: ReactNode;
}

export function CheatSheet(props: CheatSheetProps) {
  const renderMode = useRenderMode();
  const [open, setOpen] = useState(false);
  if (renderMode === "anki") {
    return <li>{props.label}</li>;
  }
  return <>
    <div>
      <Button onClick={() => setOpen(true)}>
        {props.label}
      </Button>
    </div>
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth={"xl"}>
      <div style={{margin: "1em"}}>
        <h3>{props.label}</h3>
        {props.children}
      </div>
    </Dialog>
  </>
}
