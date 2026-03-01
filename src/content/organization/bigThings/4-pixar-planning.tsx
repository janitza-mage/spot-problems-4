import type {Collection} from "../../../framework/content.tsx";

export const chapter4: Collection = {
  id: "4",
  name: "Pixar Planning",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          What activities are done in planning that are related to <i>experiri</i>?
        </p>
      </>,
      answer: <>
        <ul>
          <li>Sketching</li>
          <li>Modeling</li>
          <li>Experimentation</li>
          <li>Simulation</li>
          <li>Testing</li>
          <li>Evaluation, confirmation and rejection of ideas</li>
          <li>Learning, gaining experience</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        Describe the "pixar planning" process.
      </p>,
      answer: <>
        <ul>
          <li>idea</li>
          <li>12-page outline: how can that idea be the basis of a story</li>
          <li>multiple iterations of collecting feedback and re-writing the outline</li>
          <li>120-page script draft</li>
          <li>multiple iterations of collecting feedback and re-writing the script</li>
          <li>storyboards (~2 seconds of film time each)</li>
          <li>video that shows the storyboards, with dialogue read and sound effects added</li>
          <li>multiple iterations of collecting feedback and re-writing the script, re-making the storyboards and video</li>
          <li>finally, production.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          What are the stated advantages of pixar planning?
        </p>
      </>,
      answer: <>
        <ul>
          <li>It allows experimentation and gives daring idea a chance.</li>
          <li>Problems, challenges and unknowns are worked out up-front.</li>
          <li>It avoids the illusion of explanatory depth.</li>
          <li>It is relatively cheap, compared to having to re-do parts of the production of a movie.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          Why does the author claim that meticulous planning applies to software development too, when the general
          agreement in the software world is that early and frequent releases are superior to planning?
        </p>
      </>,
      answer: <>
        <p>
          They do no actually disagree; they only use different terminology. The rapid iteration that is common in
          the software world <i>is</i> planning in the terms used by the author. On the other hand, what is called
          the delivery phase in the book -- expensive, irreversible decisions -- are not taken lightly in the
          software world either.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          When planning to build a building, experiments cannot be done on the real building because it has not been
          built yet, and building it first then tearing it down and building it again is obviously not viable. How
          can experiments still be done?
        </p>
      </>,
      answer: <>
        <p>
          By building models of the building. The models should cover as many aspects as possible:
          <ul>
            <li>drawings</li>
            <li>physical models (cardboard, wood, 3d printing)</li>
            <li>computer renderings (outside and inside)</li>
            <li>cost simulations</li>
            <li>usage scenarios</li>
            <li>risk scenarios</li>
          </ul>
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          A popular tool for illustrating the time line of a project's execution is a <i>Gantt Chart</i>. That chart
          shows all activities with their starting and ending time. Reality rarely corresponds to the chart. What
          exactly is wrong with Gantt Charts?
        </p>
      </>,
      answer: <>
        <p>
          Gantt charts are a model for one aspect of a project -- the time line for the <i>best-case scenario</i>.
          Like other models, such as those made out of cardboard and wood, they are useful to learn something about
          the project: The minimum time it will take to execute the project; possible points of contention between
          different steps, and so on.
        </p>
        <p>
          The crucial mistake is not building that model; it is to mistake that model for a <i>plan</i>, or for the
          reality that will unfold when executing the project. Gantt charts aren't an answer, much less a plan: They
          are a starting point for asking questions.
        </p>
      </>,
    },
  ],
};
