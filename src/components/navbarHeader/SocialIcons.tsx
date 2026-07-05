import { Player } from "@lordicon/react";
import { MIN_WIDTH_FOR_SOCIAL_ICONS } from "../../constants/landingPageConstants";
import { LinkedinLogo } from "../../generatedImageComponents/LinkedinLogo";
import { YoutubeLogo } from "../../generatedImageComponents/YoutubeLogo";
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";
import { useCallback } from "react";

interface SocialIconsProps {
    currentViewportWidth: number;
}

export const SocialIcons = ({ currentViewportWidth }: SocialIconsProps) => {
    const iconsShouldRender =
        currentViewportWidth >= MIN_WIDTH_FOR_SOCIAL_ICONS;

        const goToLinkedin = useCallback(() =>
        {
            window.location.href = "https://www.linkedin.com/in/james-richard-bland/";
        }, []);

        const goToYoutube = useCallback(() =>
        {
            window.location.href = "https://www.youtube.com/channel/UCd5tdaMVhvp2SkkqIxzsuRQ";
        }, []);

        const goToMail = useCallback(() =>
        {
            window.location.href = "mailto:jamesrichardbland@gmail.com";
        }, []);

        const goToGithub = useCallback(() =>
        {
            window.location.href = "https://github.com/JamesB0010";
        }, []);

        const goToItch = useCallback(() =>
        {
            window.location.href = "https://averagealtodriver.itch.io";
        }, []);

    return iconsShouldRender && (
        <div className="navbar-header-right">
            <button className="social-icon-button" onClick={goToLinkedin}>
                <LinkedinLogo className="social-icon"/>
            </button>
            <button className="social-icon-button" onClick={goToYoutube}>
                <YoutubeLogo className="social-icon"/>
            </button>
            <button className="social-icon-button" onClick={goToMail}>
                <MailIcon className="social-icon" />
            </button>
            <button className="social-icon-button" onClick={goToGithub}>
                <GithibLogo className="social-icon" />
            </button>
            <button className="social-icon-button" onClick={goToItch}>
                <ItchIoLogo className="social-icon" />
            </button>
        </div>
    )
};