import { useNavigate } from "react-router-dom";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";
import { useCallback } from "react";

interface PageLinksProps {
    currentViewportWidth: number;
}

export const PageLinks = ({ currentViewportWidth }: PageLinksProps) => {
    const linksShouldRender =
        currentViewportWidth >= MIN_WIDTH_FOR_PAGE_LINKS;

        const navigate = useNavigate();

        const navigateToPage = useCallback((page: string) => {
            navigate(`/${page}`);
        }, [navigate]);

    return linksShouldRender && (
        <div className="navbar-header-center">
            <button className="page-link-button" onClick={() => navigateToPage("")}>
                <p>Home</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("about")}>
                <p>About</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("industry-experience")}>
                <p>Industry Experience</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("articles")}>
                <p>Articles</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("skills")}>
                <p>Skills</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("gallery")}>
                <p>Gallery</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("cv")}>
                <p>CV</p>
            </button>
            <button className="page-link-button" onClick={() => navigateToPage("contact")}>
                <p>Contact</p>
            </button>
        </div>
    );
};