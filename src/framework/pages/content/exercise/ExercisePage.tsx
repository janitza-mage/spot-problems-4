import {type ContentItemId, type ExerciseNode} from "../../../content.tsx";
import {useEffect, useState} from "react";
import {
  useNavigateToContentNode
} from "../../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode";
import {type AnswerQuality, selectContentItem, updateState} from "../../../state.tsx";
import {PageWithHeader} from "../../../technical-components/layout/PageWithHeader.tsx";
import {Button, Dialog, IconButton} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import {ContentItemView} from "./ContentItemView.tsx";
import {ExerciseControlModal} from "./ExerciseControlModal.tsx";

export interface ExercisePageProps {
  path: string[];
  exerciseNode: ExerciseNode;
}

function getNewContentItemId(props: ExercisePageProps): ContentItemId | null {
  const result = selectContentItem(props.path, props.exerciseNode.contentItems.length);
  if (result === null) {
    return null;
  }
  return result;
}

export function ExercisePage(props: ExercisePageProps) {
  const navigateToContentNode = useNavigateToContentNode();
  
  const [instanceCounter, setInstanceCounter] = useState(0);
  const [contentItemId, setContentItemId] = useState<ContentItemId | null>(() => getNewContentItemId(props));
  const [exerciseControlModalOpen, setExerciseControlModalOpen] = useState(false);

  function onClickGrade(answerQuality: AnswerQuality) {
    if (contentItemId !== null) {
      updateState(props.path, contentItemId, answerQuality);
      setInstanceCounter(instanceCounter + 1);
      setContentItemId(getNewContentItemId(props));
    }
  }

  function leaveExercise() {
    const parentPath = [...props.path];
    parentPath.pop();
    navigateToContentNode(parentPath);
  }
  
  function onClickCancel() {
    // eslint-disable-next-line no-restricted-globals
    if (contentItemId === null || confirm("Really leave?")) {
      leaveExercise();
    }
  }

  // Remove stale state when the content tree changes. The code below handles the stale state case so it won't crash
  // the application, but we still have to remove that state here to avoid a softlock.
  useEffect(() => {
    if (contentItemId !== null && !props.exerciseNode.contentItems[contentItemId]) {
      onClickGrade("remove");
    }
  }, [props.exerciseNode, props.exerciseNode.contentItems, contentItemId]);

  // add ctrl+alt+p shortcut to skip content items during development
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (contentItemId !== null && event.ctrlKey && event.altKey && event.key.toLowerCase() === "p") {
        onClickGrade(3);
      }
    };
    window.addEventListener("keydown", keyHandler, { capture: true });
    return () => {
      window.removeEventListener("keydown", keyHandler, { capture: true });
    };
  });
  
  return <>
    <Dialog open={exerciseControlModalOpen} onClose={() => setExerciseControlModalOpen(false)} fullWidth={true}>
      <ExerciseControlModal path={props.path} exerciseNode={props.exerciseNode} />
    </Dialog>
    <PageWithHeader
        header={<>
          <div style={{float: "right"}}>
            <Button onClick={() => setExerciseControlModalOpen(true)}>C</Button>
          </div>
          <h1 style={{margin: 0}}>
            <IconButton onClick={onClickCancel} sx={{marginRight: "1em"}}>
              <CancelIcon fontSize={"large"} />
            </IconButton>
            {props.exerciseNode.name}
          </h1>
        </>}
    >
      {contentItemId === null && <>
          <p>
              You finished this topic for now. Come back after some time to repeat what you have learned.
          </p>
          <p style={{textAlign: "center"}}>
              <Button onClick={leaveExercise} variant={"contained"}>Leave Exercise</Button>
          </p>
      </>}
      {contentItemId !== null && <>
          <ContentItemView key={instanceCounter} contentItem={props.exerciseNode.contentItems[contentItemId]} onClickGrade={onClickGrade} />
      </>}
    </PageWithHeader>
  </>;
}
