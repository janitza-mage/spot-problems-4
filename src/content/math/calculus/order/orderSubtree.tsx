import type {Folder} from "../../../../framework/content.tsx";
import {orderAxioms} from "./orderAxioms.tsx";
import {additionalAxioms} from "./additionalAxioms.tsx";

export const orderSubtree: Folder = {
  id: "order",
  name: "Order",
  type: "folder",
  elements: [
    orderAxioms,
    additionalAxioms,
  ]
};
