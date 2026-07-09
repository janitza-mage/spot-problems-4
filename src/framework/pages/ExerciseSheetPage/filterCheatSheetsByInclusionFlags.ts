import type {CheatSheet} from "../../content.tsx";
import type {CheatSheetInclusionFlags} from "./ExerciseSheetConfiguration.ts";

// returns an error string if the flags are invalid
export function filterCheatSheetsByInclusionFlags(
    cheatSheets: CheatSheet[],
    inclusionFlags: CheatSheetInclusionFlags
): CheatSheet[] | string {
  if (inclusionFlags.size !== cheatSheets.length) {
    return "wrong number of inclusion flags";
  }
  return cheatSheets.filter(cheatSheet => {
    const flag = inclusionFlags.get(cheatSheet.deduplicationToken);
    if (flag === undefined) {
      return "missing inclusion flag for: " + cheatSheet.label;
    }
    return flag;
  });
}
