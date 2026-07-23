import {createRoot} from "react-dom/client";
import {App} from "./app/App";
import "./style/style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Page as LandingPage } from "./app/landing/Page";
import { Page as AboutPage } from "./app/about/Page";
import { Page as IndustryExperiencePage } from "./app/industry-experience/Page";
import { Page as ArticlesPage } from "./app/uni-projects/Page";
import { Page as SkillsPage } from "./app/skills/Page";
import { Page as GalleryPage } from "./app/gallery/Page";
import { Page as CVPage } from "./app/cv/Page";

import { StrictMode } from "react";

const rootNode = document.querySelector("#root");

if (rootNode)
{
    const root = createRoot(rootNode);
    root.render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App PageToRender={LandingPage}/>} />
                    <Route path="/about" element={<App PageToRender={AboutPage} />} />
                    <Route path="/industry-experience" element={<App PageToRender={IndustryExperiencePage} />} />
                    <Route path="/uni-projects" element={<App PageToRender={ArticlesPage} />} />
                    <Route path="/skills" element={<App PageToRender={SkillsPage} />} />
                    <Route path="/gallery" element={<App PageToRender={GalleryPage} />} />
                    <Route path="/cv" element={<App PageToRender={CVPage} />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}