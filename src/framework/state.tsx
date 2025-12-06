import type {ContentItemId} from "./content.tsx";
import {randomElement} from "./util/random/randomElement.ts";
import {isNotNull} from "./util/isNotNull.ts";

// --------------------------------------------------------------------------------------------------------------------
// configuration
// --------------------------------------------------------------------------------------------------------------------

// The number of items that will be pulled from the corpus even when not a single one gets answered correctly.
// If the user hits this limit, then they will have to give a correct answer before any more items can be pulled.
//
// Note that if this number seems too high (i.e. pulling too many items when the user is not making progress), first
// consider adding more breadth and finer-grained items to the corpus before lowering this number. If this is too
// small, you'd force the user into few or even one problem which they are stuck with and which they are forced to
// repeat over and over again, not making progress.
const wrongItemLimit = 10;

// one day
const initialSpacing = 24 * 3600;
const spacingFactors = [1.3, 1.8, 3.0];
const maximumSpacing = 10 * 24 * 3600;

// --------------------------------------------------------------------------------------------------------------------
// state storage
// --------------------------------------------------------------------------------------------------------------------

type StateItem = [contentItemId: ContentItemId, nextInstant: number, spacing: number];

interface ExerciseState {
  stateHead: number;
  stateItems: StateItem[];
}

const defaultExerciseState: ExerciseState = {
  stateHead: 0,
  stateItems: [],
};

function loadExerciseState(path: string[]): ExerciseState {
  const stateText = localStorage.getItem(path.join("/"));
  if (!stateText) {
    return defaultExerciseState;
  }
  const stateElements = stateText.split("|");
  const stateHead = parseInt(stateElements.shift()!, 10);
  if (Number.isNaN(stateHead)) {
    return defaultExerciseState;
  }
  const stateItems: StateItem[] = [];
  for (const element of stateElements) {
    const subElements = element.split(",");
    if (subElements.length === 3) {
      const contentItemId = parseInt(subElements[0], 10);
      const nextInstant = parseInt(subElements[1], 10);
      const spacing = parseInt(subElements[2], 10);
      if (!Number.isNaN(contentItemId) && !Number.isNaN(nextInstant) && !Number.isNaN(spacing)) {
        stateItems.push([contentItemId, nextInstant, spacing]);
      }
    }
  }
  return { stateHead, stateItems };
}

function saveExerciseState(path: string[], state: ExerciseState) {
  const textualItems = state.stateItems.map(([contentItemId, nextInstant, spacing]) => `${contentItemId},${nextInstant},${spacing}`);
  textualItems.unshift(String(state.stateHead));
  localStorage.setItem(path.join("/"), textualItems.join("|"));
}

function deleteExerciseState(path: string[]) {
  localStorage.removeItem(path.join("/"));
}

// --------------------------------------------------------------------------------------------------------------------
// public API
// --------------------------------------------------------------------------------------------------------------------

export function selectContentItem(path: string[], numberOfContentItems: number): ContentItemId | null {
  const state = loadExerciseState(path);
  const now = Math.round(Date.now() / 1000);
  
  // check for items pending repetition
  const pendingRepetitionItems = state.stateItems.filter(item => item[1] >= 0 && item[1] <= now);
  if (pendingRepetitionItems.length > 0) {
    return randomElement(pendingRepetitionItems)[0];
  }
  
  // then check for a new, unanswered item
  const unansweredtems = state.stateItems.filter(item => item[1] == -2);
  if (unansweredtems.length > 0) {
    return randomElement(unansweredtems)[0];
  }

  // Next, check for items tht have been answered "wrong" before, but allow pulling more of them.
  
  // If we have reached our limit for "wrong" items, repeat one of those. Note that we may exceed this limit if the
  // user answers an item correctly, then wrong later after additional items have been pulled. This is okay, it just
  // means that we really don't want to pull any more items.
  const wrongItems = state.stateItems.filter(item => item[1] < 0);
  if (wrongItems.length >= wrongItemLimit) {
    return randomElement(wrongItems)[0];
  }
  
  // Otherwise, pull a new item so things don't get too boring for the user.
  const newItemContentId = state.stateHead; // currently we're just using the index as the content item id
  if (newItemContentId >= numberOfContentItems) {
    // no more items to pull
    if (wrongItems.length > 0) {
      return randomElement(wrongItems)[0];
    } else {
      return null;
    }
  }
  state.stateItems.push([newItemContentId, -2, -2]); // initial state: "unanswered", takes priority over wrong items
  state.stateHead += 1;
  saveExerciseState(path, state);
  
  // always return the newly pulled item, so wrongly answered items will only re-appear when reaching the limit
  return newItemContentId;
}

export type AnswerQuality = 0 | 1 | 2 | 3;

export function updateState(path: string[], contentItemId: ContentItemId, answerQuality: AnswerQuality) {
  const now = Math.round(Date.now() / 1000);

  // The item to update should be part of the state array already. If it isn't then that's a bug and we can't fix it here.
  const state = loadExerciseState(path);
  state.stateItems = state.stateItems.map((item: StateItem): StateItem | null => {

    // ignore unrelated items
    if (item[0] !== contentItemId) {
      return item;
    }

    // reset an item if the answer is wrong
    if (answerQuality === 0) {
      return [item[0], -1, -1];
    }
    
    // Initialize for the first correct answer; Increase the spacing for another correct answer, and drop the item if
    // the spacing gets too large -- that is, the item is then considered "learned permanently".
    const oldSpacing = item[2] < 0 ? initialSpacing : item[2];
    const newSpacing = oldSpacing * spacingFactors[answerQuality - 1];
    if (newSpacing > maximumSpacing) {
      return null;
    }
    return [item[0], now + newSpacing, newSpacing];

  }).filter(isNotNull);
  saveExerciseState(path, state);
}

export function resetExerciseState(path: string[]) {
  deleteExerciseState(path);
}
