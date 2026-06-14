import {SocialIcon} from "./SocialIcon";
import { PageLinks } from "./PageLinks";
import {logos} from "../../constants/logos";

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
                    image={logos.linkedin} />
                </button>
            </div>

        </div>
    )
}