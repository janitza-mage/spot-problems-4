import type {FolderNode} from "../../../../framework/content.tsx";
import {orderAxioms} from "./orderAxioms.tsx";
import {additionalAxioms} from "./additionalAxioms.tsx";

export const orderSubtree: FolderNode = {
  id: "order",
  name: "Order",
  type: "folder",
  children: [
    orderAxioms,
    additionalAxioms,
  ]
};
