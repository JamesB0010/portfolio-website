import { PageLinks } from "./PageLinks";
import {LinkedinLogo} from "../../generatedImageComponents/LinkedinLogo"
import {YoutubeLogo} from "../../generatedImageComponents/YoutubeLogo"
import { MailIcon } from "../../generatedImageComponents/MailIcon";
import { GithibLogo } from "../../generatedImageComponents/GithibLogo";
import { ItchIoLogo } from "../../generatedImageComponents/ItchIoLogo";

export const NavbarHeader = () =>
{
    return (
        <div className="navbar-header">
            <div className="navbar-header-left">
                <p>James Bland</p>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <PageLinks />
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
            </div>
        </div>
    )
}