import {inductionSubtree} from "./induction/inductionSubtree.tsx";
import type {Folder} from "../../../framework/content.tsx";
import {fieldSubtree} from "./field/fieldSubtree.tsx";
import {orderSubtree} from "./order/orderSubtree.tsx";
import {sequencesSubtree} from "./sequences/sequencesSubtree.tsx";

export const calculusSubtree: Folder = {
  id: "calculus",
  name: "Calculus",
  type: "folder",
  elements: [
      inductionSubtree,
      fieldSubtree,
      orderSubtree,
      sequencesSubtree,
      
      // TODO:
      
      // definition for cauchy sequence (immer kleinerer Abstand vs beliebig kleiner Abstand) --> 
      // Folge abwechselnd -1 und 1/n, wird immer kleiner aber nicht beliebig klein
      // Tip: Finde ein Beispiel für eine Folge die das eine aber nicht das andere ist
      
      // Cauchy-Folge, die nicht konvergiert? sqrt(2)-Folge in Q
      
      // Kann es sein, dass R auch noch Lücken hat? -> nein, dann könnte man eine Folge konstruieren, die
      // gegen die Lücke konvergiert, und man weiß dass sie konvergiert weil es in R ist und eine Cauchy-Folge ist
  
      // Beweis als aufgabe: rellen zahlen sind lückenlos -- kann man das überhaupt sinnvoll formulieren?

  ],
};
