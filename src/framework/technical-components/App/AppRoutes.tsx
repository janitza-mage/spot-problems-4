import {Route, Routes, useParams} from "react-router-dom";
import {ContentPathPage} from "../../pages/content/ContentPathPage";
import {PrintAllPage} from "../../pages/PrintAllPage.tsx";
import {AnkiExportAllPage} from "../../pages/AnkiExportAllPage.tsx";
import {ExerciseSheetPage} from "../../pages/ExerciseSheetPage/ExerciseSheetPage.tsx";
import {NormalAppFrame} from "./NormalAppFrame.tsx";
import {ExerciseSheetAppFrame} from "../print/ExerciseSheetAppFrame.tsx";
import {removeTrailingSlashes} from "../../util/removeTrailingSlashes.ts";
import {AboutPage} from "../../pages/AboutPage.tsx";

function ContentPathPageWrapper() {
    const { "*": splat } = useParams();
    const contentPath = (!splat || splat === "") ? [] : removeTrailingSlashes(splat).split("/");
    return <ContentPathPage key={splat} contentPath={contentPath} />;
}

export function AppRoutes() {
    return <Routes>
      <Route path={"_/printAll"} element={<NormalAppFrame><PrintAllPage /></NormalAppFrame>} />;
      <Route path={"_/ankiAll"} element={<NormalAppFrame><AnkiExportAllPage /></NormalAppFrame>} />;
      <Route path={"_/printExerciseSheet"} element={<ExerciseSheetAppFrame><ExerciseSheetPage /></ExerciseSheetAppFrame>} />;
      <Route path={"_/about"} element={<NormalAppFrame><AboutPage /></NormalAppFrame>} />;
      <Route path={"*"} element={<NormalAppFrame><ContentPathPageWrapper /></NormalAppFrame>} />;
    </Routes>;
}
