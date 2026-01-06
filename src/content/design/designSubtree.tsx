import type {Folder} from "../../framework/content.tsx";
import {everydayThings} from "./everydayThings/everydayThings.tsx";

export const designSubtree: Folder = {
  id: "design",
  name: "Design",
  type: "folder",
  elements: [
      everydayThings,
  ],
};
