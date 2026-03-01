import type {Collection} from "../../../framework/content.tsx";

export const chapter9: Collection = {
  id: "9",
  name: "What's Your Lego?",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <p>
        What are the advantages or a modular design?
      </p>,
      answer: <ul>
        <li>experimentation to see what works and what doesn't (cheaper, less dangerous) and "failing fast"</li>
        <li>experience (building the same thing again and again) and optimization</li>
        <li>reap benefits after a small part is completed, not only after the whole is completed</li>
        <li>reduces risk by working in small increments, each with a small time window for black swans and a small
          per-increment cost even when totally lost due to a black swan</li>
        <li>manufacturing the parts for on-site assembly (either literally or metaphorically)</li>
      </ul>,
    },
    {
      type: "exercise",
      label: "",
      problem: <p>
        When starting a project in a modular way, you have no experience, just like for a monolithic one. You will
        fail, and the modular approach means that many small attempts are made. Assuming that they fail with the
        same probability as a monolithic approach, you actually get <i>more</i> failures than with a monolithic
        approach. How does modularity tackle this problem.
      </p>,
      answer: <>
        <p>
          It does not have to. Many small failures do not add up to a disaster and can therefore be tolerated -- unlike
          the "one big" failure with a monolithic approach. Likewise, many small successes do not add up to one big
          success by themselves, and the initial number of successes will likely be small.
        </p>
        <p>
          However, both the small failures and the small successes give you experience and will increase the success
          rate over time. Once a sufficient success rate is reached, the modular approach will outperform the
          monolithic one, with the small successes adding up and leading to one big success.
        </p>
      </>,
    },
  ],
};
