import {Button} from "@mui/material";

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
