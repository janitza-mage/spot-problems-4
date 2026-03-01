import type {Exercise} from "./content.tsx";
import type {ReactNode} from "react";

export function getExerciseLabel(exercise: Exercise, index: number): ReactNode {
  // TODO
  return exercise.label ?? `exercise ${index}`;
}
