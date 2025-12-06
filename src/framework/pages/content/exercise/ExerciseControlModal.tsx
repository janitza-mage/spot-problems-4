import type {ExerciseNode} from "../../../content.tsx";
import {Button} from "@mui/material";
import {resetExerciseState} from "../../../state.tsx";

export interface ExerciseControlModalProps {
  path: string[];
  exerciseNode: ExerciseNode;
}

export function ExerciseControlModal(props: ExerciseControlModalProps) {
  
  function onClickResetExerciseProgress() {
    resetExerciseState(props.path);
    window.location.reload();
  }
  
  return <>
    <p>
      Reset progress for this exercise: <Button onClick={onClickResetExerciseProgress}>reset</Button>
    </p>
  </>
}
