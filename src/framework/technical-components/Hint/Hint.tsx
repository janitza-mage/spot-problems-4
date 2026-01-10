import type {ReactNode} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export interface HintProps {
  label: ReactNode;
  children: ReactNode;
}

export function Hint(props: HintProps) {
  return <Accordion>
    <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
      {props.label}
    </AccordionSummary>
    <AccordionDetails>
      {props.children}
    </AccordionDetails>
  </Accordion>;
}
