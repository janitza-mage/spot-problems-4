import type {FolderNode} from "../../../../framework/content.tsx";
import {fieldAxioms} from "./fieldAxioms.tsx";
import {fieldExponentiation} from "./fieldExponentiation.tsx";

export const fieldSubtree: FolderNode = {
  id: "fields",
  name: "Fields",
  type: "folder",
  children: [
      fieldAxioms,
      fieldExponentiation,
  ]
};
