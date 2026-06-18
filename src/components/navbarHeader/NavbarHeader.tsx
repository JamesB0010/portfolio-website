import {SocialIcon} from "./SocialIcon";
import { PageLinks } from "./PageLinks";
import GeneratedImageRecord from "../../generated/GeneratedImageRecord";

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
                    <SocialIcon
                    image={GeneratedImageRecord.linkedinLogo} />
                </button>
                <button>
                    <SocialIcon
                    image={GeneratedImageRecord.youtubeLogo} />
                </button>
            </div>

        </div>
    )
}