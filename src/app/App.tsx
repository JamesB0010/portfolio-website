import { StrictMode, JSX} from "react";
import {NavbarHeader} from "../components/navbarHeader/NavbarHeader";
import { Page as LandingPage } from "./landing/Page";
import { Page as AboutPage } from "./about/Page";
import { Footer } from "../components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface AppProps
{
    PageToRender: () => JSX.Element
}
export const App = ({ PageToRender }: AppProps) =>
{
    return (
        <div style={{display: "flex", alignItems: "stretch", flexDirection: "column", minHeight: "100%"}}>
            <NavbarHeader />
            <PageToRender />
            <Footer />
        </div>
    )
}