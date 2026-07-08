import styles from "./NormalAppFrame.module.css";
import {type ReactElement, type ReactNode} from "react";
import {SetGlobalStyle} from "./SetGlobalStyle.tsx";

export interface AppFrameProps {
    children: ReactNode;
}

export function NormalAppFrame({children}: AppFrameProps): ReactElement {
    return <div className={styles.NormalAppFrame}>
      <SetGlobalStyle value={styles.normal} />
      {children}
    </div>;
}
