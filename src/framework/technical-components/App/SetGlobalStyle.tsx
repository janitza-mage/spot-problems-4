import {useEffect} from "react";

export interface SetGlobalStyleProps {
  value: string;
}

export function SetGlobalStyle(props: SetGlobalStyleProps) {
  useEffect(() => {
    document.documentElement.className = props.value;
    return () => {
      document.documentElement.className = "";
    };
  }, []);
  return <></>;
}
