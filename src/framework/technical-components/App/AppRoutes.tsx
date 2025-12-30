import {Route, Routes, useParams} from "react-router-dom";
import {ContentPathPage} from "../../pages/content/ContentPathPage";
import {PrintAllPage} from "../../pages/PrintAllPage.tsx";

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
        <Route path={"_/printAll"} element={<PrintAllPage />} />;
        <Route path={"*"} element={<ContentPathPageWrapper />} />;
    </Routes>;
}
