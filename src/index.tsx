import {createRoot} from "react-dom/client";
import {App} from "./app/App";
import "./style/style.scss";

const rootNode = document.querySelector("#root");

if (rootNode)
{
    const root = createRoot(rootNode);
    root.render(<App />);
}