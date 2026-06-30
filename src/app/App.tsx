import { StrictMode } from "react";
import {NavbarHeader} from "../components/navbarHeader/NavbarHeader";
import { Page } from "./landing/Page";

export const App = () =>
{
    return (
        <StrictMode>
            <NavbarHeader />
            <Page />
        </StrictMode>
    )
}