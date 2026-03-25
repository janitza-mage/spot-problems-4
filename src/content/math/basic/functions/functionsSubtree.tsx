import type {Collection, ContentNode, Folder} from "../../../../framework/content.tsx";
import {relationsSameSet} from "./relationsSameSet.tsx";
import {relationsDifferentSets} from "./relationsDifferentSets.tsx";
import {mathSpan} from "../../../../framework/technical-components/Math/Math.tsx";

export const functionsSubtree: Collection = {
  id: "functions",
  name: "Functions",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: <>Definition (1)</>,
      problem: <p>
        Let {mathSpan("A")} and {mathSpan("B")} be sets. Give the definitions of a partial and total
        function {mathSpan("A #rightarrow B")} as a special case of a relation.
      </p>,
      answer: <>
        <p>A partial function {mathSpan("A #rightarrow B")} is a relation between elements of {mathSpan("A")} (on the
          left side) and {mathSpan("B")} (on the right side), such that each {mathSpan("x #in A")} appears in at most
          one element of the relation.</p>
        <p>A total function {mathSpan("A #rightarrow B")} is a relation between elements of {mathSpan("A")} (on the
          left side) and {mathSpan("B")} (on the right side), such that each {mathSpan("x #in A")} appears in exactly
          one element of the relation.</p>
      </>,
    },
  ],
};

TODO