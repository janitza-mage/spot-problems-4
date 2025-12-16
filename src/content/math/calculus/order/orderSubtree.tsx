import type {FolderNode} from "../../../../framework/content.tsx";
import {orderAxioms} from "./orderAxioms.tsx";

export const orderSubtree: FolderNode = {
  id: "order",
  name: "Order",
  type: "folder",
  children: [
    orderAxioms,
  ]
};
