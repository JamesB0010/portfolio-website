import {createRoot} from "react-dom/client";
import {App} from "./app/App";
import "./style/style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Page as LandingPage } from "./app/landing/Page";
import { Page as AboutPage } from "./app/about/Page";

const rootNode = document.querySelector("#root");

if (rootNode)
{
    const root = createRoot(rootNode);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App PageToRender={LandingPage}/>} />
                <Route path="/about" element={<App PageToRender={AboutPage} />} />
            </Routes>
        </BrowserRouter>
    );
}