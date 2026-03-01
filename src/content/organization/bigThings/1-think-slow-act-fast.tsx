import type {Collection} from "../../../framework/content.tsx";

export const chapter1: Collection = {
  id: "1",
  name: "Think Slow, Act Fast",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "Time and Money Buffers",
      problem: <>
        <p>
          The word "buffer" is used here to mean allocating more time or money than a project is planned to require,
          for example a 20% buffer to mean allocating $1200 for a project that is planned to require $1000.
        </p>
        <p>
          Why does adding buffers in terms of time and money not protect a project against time and cost overruns?
        </p>
      </>,
      answer: <p>
        The distribution of time and cost overruns is fat-tailed. The consequence is that even a buffer that is so
        large that it cannot be realistically assumed, still does not protect against the risk of overruns. 
      </p>,
    },
    {
      type: "exercise",
      label: "Time and Money Buffers",
      problem: <>
        <p>
          What predictor is given in the book to predict that a class of projects has a fat-tailed distribution
          of overruns? What is the consequence when planning a project?
        </p>
      </>,
      answer: <p>
        The predictor is that the projects are done in the context of a complex system. The consequence is that when
        a project gets planned that happens in the context of a complex system -- almost all projects are -- then
        a fat-tailed overrun distribution should be expected and the risk of overruns taken seriously.
      </p>,
    },
    {
      type: "exercise",
      label: "Beating the Galley Drums",
      problem: <>
        <p>
          One might think that rushing a project shortens its time frame and therefore reduces the likelihood of
          black swans crashing the project. Apart from the fact that rushing also increases the likelihood of shoddy
          work, why does the original intention usually not work out?
        </p>
      </>,
      answer: <p>
        Rushing does not significantly reduce the time window for black swans affecting the project. By starting the
        "delivery" phase early, one might actually make that window larger.
      </p>,
    },
    {
      type: "exercise",
      label: "Planning vs. Delivery (1)",
      problem: <>
        <p>
          Give a useful definition for the split when planning stops and delivery starts.
        </p>
      </>,
      answer: <p>
        Planning is relatively cheap: It costs time, as well as salaries or other compensation for the planners.
        Delivery starts when significantly larger sums of money must be spent for workers and material, and
        irreversible (or costly-to-reverse) decisions must be made, such as signing a contract. 
      </p>,
    },
    {
      type: "exercise",
      label: "Planning vs. Delivery (2)",
      problem: <>
        <p>
          Why are external factors dangerous for a project in the delivery phase but not in the planning phase?
        </p>
      </>,
      answer: <>
        <p>
          External factors can prevent or abort a project, make it unviable, or change its direction. If this happens
          during the planning phase, then plans can be changed or delayed to accomodate. In the worst case, the
          project must be aborted, but since the planning phase is relatively cheap, the loss will be limited.
        </p>
        <p>
          During delivery, on the other hand, significant money has been spent already that might now be lost.
          Decisions have been made that are irreversible and turn into liabilities. Other decisions
          must be reversed where that reversal causes significant costs. The risk of time and cost overruns is high.
        </p>
      </>,
    },
  ],
};
