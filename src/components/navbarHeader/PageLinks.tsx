import { useNavigate } from "react-router-dom";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";
import { useCallback } from "react";

interface PageLinksProps {
    currentViewportWidth?: number;
    onPageLinkClicked?: () => void;
}

export const PageLinks = ({ currentViewportWidth, onPageLinkClicked }: PageLinksProps) => {
    const linksShouldRender = currentViewportWidth ? 
        currentViewportWidth >= MIN_WIDTH_FOR_PAGE_LINKS : true;

        const navigate = useNavigate();

        const navigateToPage = useCallback((page: string) => {
            navigate(`/${page}`);
        }, [navigate]);

        const pageLinkClickedCallback = useCallback((pageToNavigateTo: string) =>
        {
            navigateToPage(pageToNavigateTo);
            onPageLinkClicked?.();
        }, [onPageLinkClicked]);

    return linksShouldRender && (
        <>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("")}>
                <p>Home</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("about")}>
                <p>About</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("industry-experience")}>
                <p>Industry Experience</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("articles")}>
                <p>Articles</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("skills")}>
                <p>Skills</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("gallery")}>
                <p>Gallery</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("cv")}>
                <p>CV</p>
            </button>
            <button className="page-link-button" onClick={() => pageLinkClickedCallback("contact")}>
                <p>Contact</p>
            </button>
        </>
    );
};