import { PageLinks } from "./PageLinks";
import {LinkedinLogo} from "../../generatedImageComponents/LinkedinLogo"
import {YoutubeLogo} from "../../generatedImageComponents/YoutubeLogo"

export const NavbarHeader = () =>
{
    return (
        <div className="navbar-header">
            <div className="navbar-header-left">
                <p>James Bland</p>
            </div>

            <PageLinks />

            <div className="navbar-header-right">
                <button>
                    <LinkedinLogo className="social-icon"/>
                </button>
                <button>
                    <YoutubeLogo className="social-icon"/>
                </button>
            </div>

        </div>
    )
}