import { StrictMode, JSX, useRef} from "react";
import {NavbarHeader} from "../components/navbarHeader/NavbarHeader";
import { Page as LandingPage } from "./landing/Page";
import { Page as AboutPage } from "./about/Page";
import { Footer } from "../components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarSideDrawer, NavbarSideDrawerImperatives } from "../components/NavbarSideDrawer";

interface AppProps
{
    PageToRender: () => JSX.Element
}
export const App = ({ PageToRender }: AppProps) =>
{
    const navbarSideDrawerRef = useRef<NavbarSideDrawerImperatives | null>(null);

    const onHamburgerClick = () =>
    {
        navbarSideDrawerRef.current?.toggleOpen();
    };

    return (
        <div style={{display: "flex", alignItems: "stretch", flexDirection: "column", minHeight: "100vh"}}>
            <div style={{position: "sticky", top: "0px", left: "0px", width:"100%", height:"100%", alignItems: "flex-start", zIndex: 2}}>
                <div style={{position: "relative", width:"100%", height:"100%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <NavbarHeader onHamburgerClick={onHamburgerClick}/>
                    <div style={{position: "relative"}}>
                        <NavbarSideDrawer ref={navbarSideDrawerRef}/>
                    </div>
                </div>
            </div>
                <PageToRender />
            <Footer />
        </div>
    )
}