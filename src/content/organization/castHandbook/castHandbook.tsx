import type {Collection} from "../../../framework/content.tsx";

export const castHandbook: Collection = {
  id: "castHandbook",
  name: "Book: CAST Handbook",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "CAST and STPA",
      problem: <>
        <p>
          What is the similarioty and the difference between CAST and STPA?
        </p>
      </>,
      answer: <p>
        Both are meant to prevent future accidents. STPA is used <i>before</i> an accident occurs, and tries to predict
        it. CAST is used <i>after</i> an accident or near-miss occurs, to learn as much from it as possible.
      </p>,
    },
  ],
};
