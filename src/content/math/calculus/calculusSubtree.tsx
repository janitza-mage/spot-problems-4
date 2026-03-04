import {inductionSubtree} from "./induction/inductionSubtree.tsx";
import type {Folder} from "../../../framework/content.tsx";
import {fieldSubtree} from "./field/fieldSubtree.tsx";
import {orderSubtree} from "./order/orderSubtree.tsx";

export const calculusSubtree: Folder = {
  id: "calculus",
  name: "Calculus",
  type: "folder",
  elements: [
      inductionSubtree,
      fieldSubtree,
      orderSubtree,
      
      // TODO:
      // definition for cauchy sequence (immer kleinerer Abstand vs beliebig kleiner Abstand) --> 
      // Folge abwechselnd -1 und 1/n, wird immer kleiner aber nicht beliebig klein
      // Tip: Finde ein Beispiel für eine Folge die das eine aber nicht das andere ist
      
      // TODO:
      // Cauchy-Folge, die nicht konvergiert? sqrt(2)-Folge in Q
      
      // TODO:
      // Menge (rot, grün, blau), Folge RGBRRRRR, konvergiert die? -> nein, kein Abstand definiert, aber
      // man könnte einen Abstand definieren, der die Folge konvergieren lässt: d(x, y) = 0, falls x = y, sonst 1
      
  ],
};
