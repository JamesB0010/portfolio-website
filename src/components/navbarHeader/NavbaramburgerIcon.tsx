import { Player } from "@lordicon/react";
import { AnimationDirection, IPlayer } from "@lordicon/react/dist/interfaces";
import { useCallback, useRef, useState } from "react";
import HAMBURGER from "../../../public/lord-icons/hamburgerIcon.json";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";

interface NavbarHamburgerIconProps {
    currentViewportWidth: number;
    onClick?: () => void;
}

export const NavbarHamburgerIcon = ({currentViewportWidth, onClick} : NavbarHamburgerIconProps) => {
    const [playerDirection, setPlayerDirection] = useState<AnimationDirection>(1);
    const playerRef = useRef<Player>(null);

    const reversePlayerDirection = useCallback(() => {
        setPlayerDirection((prevDirection) =>
            {
                return prevDirection * -1 as AnimationDirection;
            });
    }, [playerRef]);
    
    const onClickCallback = useCallback(() =>
    {
        playerRef.current?.play();
        onClick?.();
    }, []);
    return (
        <button 
            className="social-icon-button hamburger-icon"
            onClick={onClickCallback}
            style={{visibility: currentViewportWidth < MIN_WIDTH_FOR_PAGE_LINKS ? "visible" : "hidden"}}
        >
            <Player 
                ref={playerRef}
                direction={playerDirection}
                onComplete={reversePlayerDirection}
                icon={HAMBURGER}
            />
        </button>
    )
}