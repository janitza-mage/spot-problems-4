import type {Collection} from "../../../framework/content.tsx";

export const chapter3: Collection = {
  id: "3",
  name: "Think from Right to Left",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          The book describes the way Frank Gehry starts new projects as a useful one. How <i>does</i> he start a new
          project? What assumption does he make throughout a project?
        </p>
      </>,
      answer: <>
        <p>
          Gehry starts by asking the client questions, and in particular, "Why are you doing this project?". In
          that question, it is important not to confuse means with the end: When something appears to be the goal
          of a project, it is time to stop and think whether it is actually just a means to another end. If so,
          other ways to get there should be considered.
        </p>
        <p>
          He continues with the assumption that at any point, there is always something new to learn. This avoids
          the "What You See Is All There Is" fallacy.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          What does planning from right to left mean?
        </p>
      </>,
      answer: <>
        <p>
          It means to start with the ultimate goal of the project. Then, for each step, find the preceding steps
          necessary to get there. In other words, the planning phase moves backwards through the steps that have to
          be executed during the delivery phase.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          Describe Amazon's PR/FAQ process.
        </p>
      </>,
      answer: <>
        <p>
          At amazon, a new project must be started by writing a press release (PR) and frequently asked questions (FAQ)
          and presenting them. This step is usually done last in other projects, but there, it must be done first.
          This is the first step in right-to-left planning, and also answers the question Gehry would ask a client:
          "Why are you doing this project?"
        </p>
        <p>
          The process also works in iterations: The PR/FAQ are discussed, feedback is given, and the PR/FAQ are
          rewritten and presented again, until the reasoning for the project is solid, as well as supported by all
          relevant people.
        </p>
      </>,
    },
  ],
};
