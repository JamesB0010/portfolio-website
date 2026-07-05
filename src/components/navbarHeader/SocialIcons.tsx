import { Player } from "@lordicon/react";
import { MIN_WIDTH_FOR_SOCIAL_ICONS } from "../../constants/landingPageConstants";
import { LinkedinLogo } from "../../generatedImageComponents/LinkedinLogo";
import { YoutubeLogo } from "../../generatedImageComponents/YoutubeLogo";
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";
import { useCallback } from "react";
import { SocialIcon } from "../SocialIcon";

interface SocialIconsProps {
    currentViewportWidth: number;
}

export const SocialIcons = ({ currentViewportWidth }: SocialIconsProps) => {
    const iconsShouldRender =
        currentViewportWidth >= MIN_WIDTH_FOR_SOCIAL_ICONS;

    return iconsShouldRender && (
        <div className="navbar-header-right">
            <SocialIcon linkDestination="https://www.linkedin.com/in/james-richard-bland/">
                <LinkedinLogo className="social-icon"/>
            </SocialIcon>
            <SocialIcon linkDestination="https://www.youtube.com/channel/UCd5tdaMVhvp2SkkqIxzsuRQ">
                <YoutubeLogo className="social-icon"/>
            </SocialIcon>
            <SocialIcon linkDestination="mailto:jamesrichardbland@gmail.com">
                <MailIcon className="social-icon" />
            </SocialIcon>
            <SocialIcon linkDestination="https://github.com/JamesB0010">
                <GithibLogo className="social-icon" />
            </SocialIcon>
            <SocialIcon linkDestination="https://averagealtodriver.itch.io">
                <ItchIoLogo className="social-icon" />
            </SocialIcon>
        </div>
    )
};