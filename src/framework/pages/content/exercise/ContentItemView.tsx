import {Button} from "@mui/material";
import {useState} from "react";
import type {ContentItem} from "../../../content.tsx";
import type {AnswerQuality} from "../../../state.tsx";

export interface ItemViewProps {
  contentItem: ContentItem;
  onClickGrade: (answerQuality: AnswerQuality) => void;
}

export function ContentItemView(props: ItemViewProps) {
  const [revealed, setRevealed] = useState(false);

  function onClickReveal() {
    setRevealed(true);
  }
  
  return <>
    <div>{props.contentItem.problem}</div>
    {!revealed && <div style={{textAlign: "center"}}>
        <Button variant={"contained"} onClick={onClickReveal}>Show Answer</Button>
    </div>}
    {revealed && <div>{props.contentItem.answer}</div>}
    <br />
    {revealed && <div style={{textAlign: "center", marginBottom: "2em"}}>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} onClick={() => props.onClickGrade(0)}>Wrong</Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} onClick={() => props.onClickGrade(1)}>Hard</Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} onClick={() => props.onClickGrade(2)}>Medium</Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} onClick={() => props.onClickGrade(3)}>Easy</Button>
      </div>
    </div>}
  </>;
}
