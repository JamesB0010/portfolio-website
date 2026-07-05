import { ReactNode, useCallback } from "react";

interface SocialIconProps {
    linkDestination: string;
    children?: ReactNode;
}

export const SocialIcon = ({linkDestination, children}: SocialIconProps) => {

    const onClick = useCallback(() =>
    {
        window.location.href = linkDestination;
    }, [linkDestination])

    return (
        <button className="social-icon-button" onClick={onClick}>
            {children}
        </button>
    );
};