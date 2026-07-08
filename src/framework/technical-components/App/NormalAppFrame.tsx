import styles from "./NormalAppFrame.module.css";
import {type ReactElement, type ReactNode} from "react";

export interface AppFrameProps {
    children: ReactNode;
}

export function NormalAppFrame({children}: AppFrameProps): ReactElement {
    return <div className={styles.AppFrame}>
        {children}
    </div>;
}
