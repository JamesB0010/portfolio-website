import {createRoot} from "react-dom/client";
import {App} from "./app/App";


const rootNode = document.querySelector("#root");

if (rootNode)
{
    const root = createRoot(rootNode);
    root.render(<App />);
}