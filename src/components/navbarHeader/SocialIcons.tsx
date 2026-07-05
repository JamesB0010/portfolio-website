import { Player } from "@lordicon/react";
import { MIN_WIDTH_FOR_SOCIAL_ICONS } from "../../constants/landingPageConstants";
import { LinkedinLogo } from "../../generatedImageComponents/LinkedinLogo";
import { YoutubeLogo } from "../../generatedImageComponents/YoutubeLogo";
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";

interface SocialIconsProps {
    currentViewportWidth: number;
}

export const SocialIcons = ({ currentViewportWidth }: SocialIconsProps) => {
    const iconsShouldRender =
        currentViewportWidth >= MIN_WIDTH_FOR_SOCIAL_ICONS;

    return iconsShouldRender && (
        <div className="navbar-header-right">
            <button className="social-icon-button">
                <LinkedinLogo className="social-icon"/>
            </button>
            <button className="social-icon-button">
                <YoutubeLogo className="social-icon"/>
            </button>
            <button className="social-icon-button">
                <MailIcon className="social-icon" />
            </button>
            <button className="social-icon-button">
                <GithibLogo className="social-icon" />
            </button>
            <button className="social-icon-button">
                <ItchIoLogo className="social-icon" />
            </button>
        </div>
    )
};