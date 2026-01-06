import type {Folder} from "../../framework/content.tsx";
import {bigThings} from "./bigThings/bigThings.tsx";
import {castHandbook} from "./castHandbook/castHandbook.tsx";

export const organizationSubtree: Folder = {
  id: "organization",
  name: "Organization",
  type: "folder",
  elements: [
      bigThings,
      castHandbook,
  ],
};
