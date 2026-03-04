import type {Folder} from "../../../framework/content.tsx";
import {naturalNumbers} from "./naturalNumbers.tsx";

export const mathBasicsSubtree: Folder = {
  id: "matheBasics",
  name: "Basics",
  type: "folder",
  elements: [
      naturalNumbers,
  ],
};
