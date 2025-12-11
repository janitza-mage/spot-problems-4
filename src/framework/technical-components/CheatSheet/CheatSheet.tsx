import {type ReactNode, useState} from "react";
import {Button, Dialog} from "@mui/material";

export interface CheatSheetProps {
  label: ReactNode;
  children: ReactNode;
}

export function CheatSheet(props: CheatSheetProps) {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>
      {props.label}
    </Button>
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth={"xl"}>
      <div style={{margin: "1em"}}>
        <h3>{props.label}</h3>
        {props.children}
      </div>
    </Dialog>
  </>
}
