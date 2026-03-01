import type {Collection} from "../../../framework/content.tsx";

export const chapter8: Collection = {
  id: "8",
  name: "A Single, Determined Organism",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <p>
        The book gives an example of two construction companies at the T5 terminal. Both companies had to pursue
        their own self-interests, creating a conflict that might have threatened the schedule with delays in
        construction, or even a lawsuit. BAA needed them to work together to finish in time. How did they solve the
        problem?
      </p>,
      answer: <>
        <p>
          BAA <i>aligned</i> their incentives: They changed the contract so that progress in the project is
          beneficial to them, and delays are not. The two companies still had to pursue their own self-interests, but
          now, doing so pushed the project forward.
        </p>
        <p>
          Doing so meant that BAA hat to assume risks that are typically assumed by contractors in other construction
          projects. 
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        The modified contract between BAA and the steelworking company means that BAA had to assume more risk than
        typical in construction project. Why was this still a sensible thing to do?
      </p>,
      answer: <p>
        BAA could evade that risk only on paper. Even when the contract said that the contractor had to bear some
        risk, it created the risk of a lawsuit, or of the contractor going out of business. This would create delays
        in the project which BAA had to bear.
      </p>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        At T5, the BAA provided for high standards with facilities and equipment, and made workers part of the
        decision-making process. What tradeoff did they make, and why was it beneficial for them?
      </p>,
      answer: <>
        <p>
          Advantages for BAA:
          <ul>
            <li>High motivation, which entailed a high willingness to solve problems</li>
            <li>Avoiding delays from equipment problems</li>
            <li>The workers took ownership for the results</li>
            <li>Problems were reported quickly, and not hidden ("psychological safety")</li>
            <li>Low risk of conflicts, including lawsuits</li>
          </ul>
        </p>
        <p>
          Disadvantages for BAA:
          <ul>
            <li>building the team that way was expensive</li>
            <li>BAA had to assume part of the risk that would otherwise lie with contractors or even workers</li>
          </ul>
        </p>
        <p>
          This was beneficial because T5 was a high-complexity project, so it had a high risk of time and cost
          overruns. Bearing part of the cost and of the risk up-front was a risk by itself, but greatly reduced the
          risk of the project getting derailed. In particular, it was known in advance that time overruns had to be
          avoided.
        </p>
      </>,
    },
    {
      type: "exercise",
      label: "",
      problem: <>
        <p>
          Imagine that during the planning for T5, BAA exeuctives are discussing whether the money spent for team
          building is well spend. One of them might have said: "I don't yet see what exactly we get for our money.
          We get a team working nicely together, okay... you guys say, they work faster, it's cheaper... but faster
          and cheaper than <i>what</i> exactly? Or by what amount? If they are faster and cheaper, then why are you
          saying that our schedule and cost estimate stay the same?"
        </p>
        <p>
          What is the fundamental error behind these questions?
        </p>
      </>,
      answer: <>
        <p>
          The fundamental error is to mistake the "best case" for reality. Without building a team, there would
          be problems, delays, conflicts etc. that pile up and derail the project. The planned schedule and cost
          estimates are not changed by building a properly functioning team because they have implicitly asumed a
          properly functioning team already; without that team, they become fiction.
        </p>
      </>,
    },
  ],
};
