import { StrictMode } from "react";
import {NavbarHeader} from "../components/navbarHeader/NavbarHeader";
import { Page } from "./landing/Page";
import { Footer } from "../components/footer";

export const App = () =>
{
    return (
        <StrictMode>
            <div style={{display: "flex", alignItems: "stretch", flexDirection: "column", minHeight: "100%"}}>
                <NavbarHeader />
                <Page />
                <Footer />
            </div>
        </StrictMode>
    )
}