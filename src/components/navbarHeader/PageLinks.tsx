import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";

interface PageLinksProps {
    currentViewportWidth: number;
}

export const PageLinks = ({ currentViewportWidth }: PageLinksProps) => {
    const linksShouldRender =
        currentViewportWidth >= MIN_WIDTH_FOR_PAGE_LINKS;

    return linksShouldRender && (
        <div className="navbar-header-center">
            <button className="page-link-button">
                <p>Home</p>
            </button>
            <button className="page-link-button">
                <p>About</p>
            </button>
            <button className="page-link-button">
                <p>Industry Experience</p>
            </button>
            <button className="page-link-button">
                <p>Articles</p>
            </button>
            <button className="page-link-button">
                <p>Skills</p>
            </button>
            <button className="page-link-button">
                <p>Gallery</p>
            </button>
            <button className="page-link-button">
                <p>CV</p>
            </button>
            <button className="page-link-button">
                <p>Contact</p>
            </button>
        </div>
    );
};