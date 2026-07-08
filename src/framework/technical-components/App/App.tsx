import {BrowserRouter} from "react-router-dom";
import {NormalAppFrame} from "./NormalAppFrame.tsx";
import {AppRoutes} from "./AppRoutes";

export function App() {
    return <BrowserRouter basename="/spot-problems-4">
        <NormalAppFrame>
            <AppRoutes/>
        </NormalAppFrame>
    </BrowserRouter>;
}
