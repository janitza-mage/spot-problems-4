import {type ReactElement, useMemo} from "react";
import {getShuffled} from "../../util/random/getShuffled.ts";

export interface ShuffledProps {
  children: ReactElement[];
}

export function Shuffled(props: ShuffledProps) {
  const shuffledChildren = useMemo(() => getShuffled(props.children), [props.children]);
  return <>{shuffledChildren}</>
}
