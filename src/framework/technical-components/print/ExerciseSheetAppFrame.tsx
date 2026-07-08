import styles from "./ExerciseSheetAppFrame.module.css";
import {type ReactElement, type ReactNode} from "react";
import {SetGlobalStyle} from "../App/SetGlobalStyle.tsx";

export interface ExerciseSheetAppFrameProps {
    children: ReactNode;
}

export function ExerciseSheetAppFrame({children}: ExerciseSheetAppFrameProps): ReactElement {
    return <div className={styles.ExerciseSheetAppFrame}>
      <SetGlobalStyle value={styles.exerciseSheet} />
      {children}
    </div>;
}
