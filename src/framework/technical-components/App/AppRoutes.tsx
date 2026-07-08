import {Route, Routes, useParams} from "react-router-dom";
import {ContentPathPage} from "../../pages/content/ContentPathPage";
import {PrintAllPage} from "../../pages/PrintAllPage.tsx";
import {AnkiExportAllPage} from "../../pages/AnkiExportAllPage.tsx";
import {ExerciseSheetExperimentPage} from "../../pages/ExerciseSheetExperimentPage.tsx";
import {NormalAppFrame} from "./NormalAppFrame.tsx";

function removeTrailingSlashes(s: string): string {
    while (s.endsWith("/")) {
        s = s.substring(0, s.length - 1);
    }
    return s;
}

function ContentPathPageWrapper() {
    const { "*": splat } = useParams();
    const contentPath = (!splat || splat === "") ? [] : removeTrailingSlashes(splat).split("/");
    return <ContentPathPage key={splat} contentPath={contentPath} />;
}

export function AppRoutes() {
    return <Routes>
      <Route path={"_/printAll"} element={<NormalAppFrame><PrintAllPage /></NormalAppFrame>} />;
      <Route path={"_/ankiAll"} element={<NormalAppFrame><AnkiExportAllPage /></NormalAppFrame>} />;
      <Route path={"_/experiment"} element={<NormalAppFrame><ExerciseSheetExperimentPage /></NormalAppFrame>} />;
      <Route path={"*"} element={<NormalAppFrame><ContentPathPageWrapper /></NormalAppFrame>} />;
    </Routes>;
}
