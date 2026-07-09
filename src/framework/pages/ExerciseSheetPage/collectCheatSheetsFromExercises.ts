import type {CheatSheet, Exercise} from "../../content.tsx";

export function collectCheatSheetsFromExercises(exercises: Exercise[]): CheatSheet[] {
  const map = new Map<object, CheatSheet>();
  for (const exercise of exercises) {
    for (const cheatSheet of (exercise.cheatSheets ?? [])) {
      map.set(cheatSheet.deduplicationToken, cheatSheet);
    }
  }
  const deduplicatedCheatSheets = [...map.values()];
  deduplicatedCheatSheets.sort((x, y) => x.label.localeCompare(y.label));
  return deduplicatedCheatSheets;
}
