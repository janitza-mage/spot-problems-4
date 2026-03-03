import type {Folder} from "../../../../framework/content.tsx";
import {fieldAxioms} from "./fieldAxioms.tsx";
import {fieldExponentiation} from "./fieldExponentiation.tsx";

export const fieldSubtree: Folder = {
  id: "fields",
  name: "Fields",
  type: "folder",
  elements: [
      fieldAxioms,
      fieldExponentiation,
  ]
};
