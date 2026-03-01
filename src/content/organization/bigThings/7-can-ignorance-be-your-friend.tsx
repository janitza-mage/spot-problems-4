import type {Collection} from "../../../framework/content.tsx";

export const chapter7: Collection = {
  id: "7",
  name: "Can Ignorance Be Your Friend?",
  type: "collection",
  exercises: [
    {
      type: "exercise",
      label: "",
      problem: <p>
        What is survivorship bias? Try to put it into an easy-to-remember phrase.
      </p>,
      answer: <>
        <p>
          Survivorship bias means to overstate the chances of success of some method by only looking at those who
          succeeded, or "survived", using that method -- and ignoring those who failed using the same method.
        </p>
        <p>
          It can be phrased, for example, as: <i>All of the successful school dropouts were successful.</i> It does
          not mean that dropping out of school makes you successful, because you only looked at the successful
          ones in the first place.
        </p>
      </>
    },
  ],
};
