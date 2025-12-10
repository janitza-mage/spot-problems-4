import {calculusSubtree} from "./calculus/calculusSubtree.tsx";
import type {FolderNode} from "../../framework/content.tsx";

export const mathSubtree: FolderNode = {
  id: "math",
  name: "Math",
  type: "folder",
  children: [calculusSubtree],
};

// TODO SChreibweisen: a^b (b in nat) + rechenregeln, Summe (auch Elemente rein/rausziehen, indexverschiebung, leere summe), Produkt, Fakultät
// TODO Grundlagen: Mengen, Beweisverfahren, wchtige Mengen zb nat, Funktionen, Relationen, Kreuzprodukt/Tupel
// Quantoren, und/oder/implikation/äquivalenz


