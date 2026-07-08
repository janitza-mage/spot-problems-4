import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

export function App() {
    return <BrowserRouter basename="/spot-problems-4">
        <AppRoutes/>
    </BrowserRouter>;
}
