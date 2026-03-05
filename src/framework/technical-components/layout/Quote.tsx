import type {ReactNode} from "react";

export interface QuoteProps {
  children: ReactNode;
}

export function Quote(props: QuoteProps) {
  return <p style={{ paddingLeft: "10px" }}>
    <p style={{ borderLeft: "5px solid #ccc", paddingLeft: "10px" }}>
      {props.children}
    </p>
  </p>
}