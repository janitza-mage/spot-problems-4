import {type Exercise} from "../../content.tsx";
import {useState} from "react";
import {
  useNavigateToContentNode
} from "../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode.ts";
import {PageWithHeader} from "../../technical-components/layout/PageWithHeader.tsx";
import {Button, IconButton} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import {getExerciseLabel} from "../../getExerciseLabel.tsx";
import {getContentNodeByPath} from "../../paths.tsx";
import {useGlobalHotkeyListener} from "../../technical-components/util/useGlobalKeyEventListener.tsx";

export interface ExercisePageProps {
  path: string[];
  exercise: Exercise;
}

export function ExercisePage(props: ExercisePageProps) {
  const navigateToContentNode = useNavigateToContentNode();
  const exerciseIndex = Number.parseInt(props.path[props.path.length - 1], 10);
  
  const [revealed, setRevealed] = useState(false);

  function onClickReveal() {
    setRevealed(true);
  }

  function onClickPrevious() {
    if (exerciseIndex > 0) {
      const path = [...props.path];
      path.pop();
      path.push(String(exerciseIndex - 1));
      navigateToContentNode(path);
    }
  }

  function onClickCancel() {
    const path = [...props.path];
    path.pop();
    navigateToContentNode(path);
  }

  function onClickNext() {
    const path = [...props.path];
    path.pop();
    path.push(String(exerciseIndex + 1));
    if (getContentNodeByPath(path) !== null) {
      navigateToContentNode(path);
    }
  }
  
  useGlobalHotkeyListener(event => {
    switch (event.key) {

      case "ArrowLeft":
        onClickPrevious();
        break;

      case "ArrowRight":
        onClickNext();
        break;

      case "ArrowUp":
      case "Escape":
        onClickCancel();
        break;

    }
  });

  return <>
    <PageWithHeader
        header={<>
          <h1 style={{margin: 0, fontSize: "1em"}}>
            <IconButton onClick={onClickPrevious}>
              <LeftIcon fontSize={"large"} />
            </IconButton>
            <IconButton onClick={onClickCancel}>
              <CancelIcon fontSize={"large"} />
            </IconButton>
            <IconButton onClick={onClickNext} sx={{marginRight: "1em"}}>
              <RightIcon fontSize={"large"} />
            </IconButton>
            {getExerciseLabel(props.exercise, exerciseIndex)}
          </h1>
        </>}
    >
      <div style={{margin: "0.2em"}}>
        <div>{props.exercise.intro}</div>
        <h2>Problem</h2>
        <div>{props.exercise.problem}</div>
        {!revealed && <div style={{textAlign: "center"}}>
            <Button variant={"contained"} onClick={onClickReveal}>Show Answer</Button>
        </div>}
        {revealed && <>
            <h2>Solution</h2>
            <div>{props.exercise.answer}</div>
        </>}
        <br />
      </div>
    </PageWithHeader>
  </>;
}
