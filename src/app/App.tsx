import { StrictMode } from "react";
import {NavbarHeader} from "../components/navbarHeader/NavbarHeader";

export const App = () =>
{
    return (
        <StrictMode>
            <NavbarHeader />
            <p>Hello World, lalala</p>
        </StrictMode>
    )
}