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

  function onClickCancel() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Really leave?")) {
      const parentPath = [...props.path];
      parentPath.pop();
      navigateToContentNode(parentPath);
    }
  }

  useEffect(() => {
    if (!props.exerciseNode.contentItems[contentItemId]) {
      onClickGrade("remove");
    }
  }, [props.exerciseNode, props.exerciseNode.contentItems, contentItemId]);
  
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
      {contentItemId === null && <>You finished this topic for now. Come back after some time to repeat what you have learned.</>}
      {contentItemId !== null && <>
          <ContentItemView key={instanceCounter} contentItem={props.exerciseNode.contentItems[contentItemId]} onClickGrade={onClickGrade} />
      </>}
    </PageWithHeader>
  </>;
}
