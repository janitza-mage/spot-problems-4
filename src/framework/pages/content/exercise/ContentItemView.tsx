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
        <Button variant={"contained"} sx={{backgroundColor: "#600"}} onClick={() => props.onClickGrade(0)}>
            <span style={{display: "inlineBlock", width: "5em"}}>Wrong</span>
        </Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} sx={{backgroundColor: "#f60", color: "#000"}} onClick={() => props.onClickGrade(1)}>
            <span style={{display: "inlineBlock", width: "5em"}}>Hard</span>
        </Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} sx={{backgroundColor: "#fd0", color: "#000"}} onClick={() => props.onClickGrade(2)}>
            <span style={{display: "inlineBlock", width: "5em"}}>Medium</span>
        </Button>
      </div>
      <div style={{display: "inline-block", width: "23%"}}>
        <Button variant={"contained"} sx={{backgroundColor: "#0f0", color: "#000"}} onClick={() => props.onClickGrade(3)}>
            <span style={{display: "inlineBlock", width: "5em"}}>Easy</span>
        </Button>
      </div>
    </div>}
  </>;
}
