import { PageLinks } from "./PageLinks";
import {LinkedinLogo} from "../../generatedImageComponents/LinkedinLogo"
import {YoutubeLogo} from "../../generatedImageComponents/YoutubeLogo"
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";
import { Player } from "@lordicon/react";
import HAMBURGER from "../../../public/lord-icons/hamburgerIcon.json";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AnimationDirection } from "@lordicon/react/dist/interfaces";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";
import { SocialIcons } from "./SocialIcons";
import { NavbarHamburgerIcon, NavbarHamburgerIconImperatives } from "./NavbaramburgerIcon";

export interface NavbarHeaderImperatives
{
    playHamburgerAnimation: () => void;
}

interface NavbarHeaderProps
{
    onHamburgerClick?: () => void;
}

export const NavbarHeader = forwardRef<NavbarHeaderImperatives, NavbarHeaderProps>(({onHamburgerClick}, ref) =>
{
    const [currentViewportWidth, setCurrentViewportWidth] = useState<number>(0);
    const hamburgerIconRef = useRef<NavbarHamburgerIconImperatives | null>(null);
    
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

    useImperativeHandle(ref, () =>
    {
        return {
            playHamburgerAnimation: () => hamburgerIconRef.current?.playAnimation()
        }
    }, []);

    return (
        <div className="navbar-header">
            <div className="navbar-header-left">
                <p>James Bland</p>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <div className="navbar-header-center">
                    <PageLinks 
                        currentViewportWidth={currentViewportWidth}
                    />
                </div>
                <div style={{display: "flex", justifyContent: "stretch"}}>
                    <SocialIcons 
                        currentViewportWidth={currentViewportWidth}
                    />
                    <NavbarHamburgerIcon 
                        ref={hamburgerIconRef}
                        onClick={onHamburgerClick}
                        currentViewportWidth={currentViewportWidth} 
                    />
                </div>
            </div>
        </div>
    )
});