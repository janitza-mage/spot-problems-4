import type {Exercise, Folder} from "../content.tsx";
import {contentTree} from "../../content/contentTree.tsx";

function collectAllExercisesFromFolder(folder: Folder): Exercise[] {
  let result: Exercise[] = [];
  for (const element of folder.elements) {
    switch (element.type) {

      case "folder":
        result = [...result, ...collectAllExercisesFromFolder(element)];
        break;

      case "collection":
        result = [...result, ...element.exercises];
        break;

    }
  }
  return result;
}

export function collectAllExercises(): Exercise[] {
  return collectAllExercisesFromFolder(contentTree);
}
