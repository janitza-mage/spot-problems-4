import {inductionSubtree} from "./induction/inductionSubtree.tsx";
import type {FolderNode} from "../../../framework/content.tsx";
import {fieldSubtree} from "./field/fieldSubtree.tsx";

export const calculusSubtree: FolderNode = {
  id: "calculus",
  name: "Calculus",
  type: "folder",
  children: [
      inductionSubtree,
      fieldSubtree,
  ],
};
