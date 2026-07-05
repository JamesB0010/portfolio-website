import { PageLinks } from "./PageLinks";
import {LinkedinLogo} from "../../generatedImageComponents/LinkedinLogo"
import {YoutubeLogo} from "../../generatedImageComponents/YoutubeLogo"
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";
import { Player } from "@lordicon/react";
import HAMBURGER from "../../../public/lord-icons/hamburgerIcon.json";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimationDirection } from "@lordicon/react/dist/interfaces";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";
import { SocialIcons } from "./SocialIcons";
import { NavbarHamburgerIcon } from "./NavbaramburgerIcon";

export const NavbarHeader = () =>
{
    const [currentViewportWidth, setCurrentViewportWidth] = useState<number>(0);
    
    const onResize = useCallback(() => {
        setCurrentViewportWidth(window.innerWidth);
    }, []);

    useEffect(() => 
    {
        setCurrentViewportWidth(window.innerWidth);
        window.addEventListener("resize", onResize);

        return () =>
        {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return (
        <div className="navbar-header">
            <div className="navbar-header-left">
                <p>James Bland</p>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <PageLinks 
                    currentViewportWidth={currentViewportWidth}
                />
                <div style={{display: "flex", justifyContent: "stretch"}}>
                    <SocialIcons 
                        currentViewportWidth={currentViewportWidth}
                    />
                    <NavbarHamburgerIcon 
                        currentViewportWidth={currentViewportWidth} 
                    />
                </div>
            </div>
        </div>
    )
}