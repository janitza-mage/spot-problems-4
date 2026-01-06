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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>;
}
