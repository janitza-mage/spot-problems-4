import type {Collection} from "../../../framework/content.tsx";

export const chapter6: Collection = {
  id: "6",
  name: "So You Think Your Project Is Unique?",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <p>
        When project delivery is behind schedule, this is often interpreted as delivery having problems. What is
        another possible cause?
      </p>,
      answer: <p>
        Another possible cause is that the planned schedule is unrealistic. Both causes may be true at the same time.
      </p>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        Describe the process of anchoring and adjustment, and how it can easily fail to be accurate.
      </p>,
      answer: <>
        <p>
          Anchoring and adjustment tries to estimate an unknown value by starting with some value -- the <i>anchor</i> --
          then making an adjustment to that value. That process is a very general description because it does not restrict
          where the anchor comes from; it may be experience with the subject at hand, experience with other things, or
          just some recently heard or encountered value.
        </p>
        <p>
          That process is biased towards the anchor, and can easily fail if the anchor if off by too much. That is,
          if the anchor is not close enough to the actual value being estimated, then the adjustment will not
          bridge the difference.
        </p>
        <p>
          The book gives examples showing that it is easy to mistake a bad anchor for a good one. In particular, taking
          experience with prior "similar" projects can easily make a bad anchor, so any such apparent similarity
          should be questioned before choosing an anchor.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        Describe how to find the anchor and the adjustment based on a reference class. Assume that no specific
        reference class is given, so you have to find that first, too.
      </p>,
      answer: <>
        <p>
          To find the reference class, describe the project in terms as generic as possible. The example given is
          "kitchen renovations". That scope should only be reduced when it is absolutely clear that the excluded
          examples are irrelevant -- "err on the side of inclusion". For example, repairing the roof is generally
          out-of-scope (unless you know that it isn't for your kitchen); possible cost risks with granite countertops
          are in-scope because, while you might have cheaper countertops, the risks for time and cost overruns are
          similar.
        </p>
        <p>
          The anchor and adjustment are based on the reference class: Take the average cost for the reference class
          as an anchor, then adjust within the range known for the reference class. If you don't have any
          reliable, more specific data, then stay at the average for the reference class; to err on the safe side,
          move closer towards the maximum for the reference class.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        How does reference-class forecasting solve the problem of "unknown unknowns"?
      </p>,
      answer: <>
        <p>
          The data collected for the reference class <i>includes</i> the effects of "unknown unknowns". In that
          way they are considered in the estimate despite still being unknown.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        What are generic approaches to "black swan management"?
      </p>,
      answer: <>
        <ul>
          <li>think slow, act fast -- reduce the time window for black swans</li>
          <li>analyze black swan events from previous projects and identify events that are not actually freak
            accidents, but rather common but commonly ignored risks. Applicable projects can be found in the
            project's reference class. <i>Multiple reference classes may apply</i> -- the book gives the
            example of the Great Chicago Fire Festival which was both a fire hazard <i>and</i> a live event.</li>
          <li>mitigate early delays; do not ignore them. Early delays cause more harm than late delays -- early
            delays do not have more time to "catch up", they have more time to cause problems.</li>
        </ul>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        What are "milestones", and what is their purpose?
      </p>,
      answer: <>
        <p>
          Milestones are points in a project's progress that are intended to be reached at a certain time.
        </p>
        <p>
          The purpose of milestones is to recognize when they are not reached in time, so as to react to delays
          immediately. This has the advantage that delays do not pile up before reacting.
        </p>
        <p>
          Immediately reacting to delays also has the advantage that the causes are much easier to analyze: Delays often
          do not pile up independently, but one delay causes subsequent delays. This makes the analysis of those
          subsequent delays hard and/or worthless.
        </p>
      </>,
    },
  ],
};
