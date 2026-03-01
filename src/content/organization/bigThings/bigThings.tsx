import type {Folder} from "../../../framework/content.tsx";
import {chapter1} from "./1-think-slow-act-fast.tsx";
import {chapter9} from "./9-whats-your-lego.tsx";
import {chapter8} from "./8-a-single-determined-organism.tsx";
import {chapter7} from "./7-can-ignorance-be-your-friend.tsx";
import {chapter6} from "./6-so-you-think-your-project-is-unique.tsx";
import {chapter5} from "./5-are-you-experienced.tsx";
import {chapter4} from "./4-pixar-planning.tsx";
import {chapter3} from "./3-think-from-right-to-left.tsx";
import {chapter2} from "./2-the-commitment-fallacy.tsx";

export const bigThings: Folder = {
  id: "bigThings",
  name: "Book: How Big Things Get Done",
  type: "folder",
  elements: [
      chapter1,
      chapter2,
      chapter3,
      chapter4,
      chapter5,
      chapter6,
      chapter7,
      chapter8,
      chapter9,
  ],
};
