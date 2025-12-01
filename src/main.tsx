import {createRoot} from "react-dom/client"
import {App} from "./framework/technical-components/App/App";
import "katex/dist/katex.min.css";
import "./framework/technical-components/App/global.css"

createRoot(document.getElementById("root") as HTMLElement).render(<App/>);
