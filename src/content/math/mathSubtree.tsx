import {calculusSubtree} from "./calculus/calculusSubtree.tsx";
import type {FolderNode} from "../../framework/content.tsx";

export const mathSubtree: FolderNode = {
  id: "math",
  name: "Math",
  type: "folder",
  children: [calculusSubtree],
};

// TODO SChreibweisen: a^b (b in nat), Summe (auch Elemente rein/rausziehen, indexverschiebung), Produkt, Fakultät
// TODO Grundlagen: Mengen, Beweisverfahren
