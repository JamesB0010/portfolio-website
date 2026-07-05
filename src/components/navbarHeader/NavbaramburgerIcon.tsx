import { Player } from "@lordicon/react";
import { AnimationDirection } from "@lordicon/react/dist/interfaces";
import { useCallback, useRef, useState } from "react";
import HAMBURGER from "../../../public/lord-icons/hamburgerIcon.json";
import { MIN_WIDTH_FOR_PAGE_LINKS } from "../../constants/landingPageConstants";

interface NavbarHamburgerIconProps {
    currentViewportWidth: number;
}

export const NavbarHamburgerIcon = ({ currentViewportWidth} : NavbarHamburgerIconProps) => {
    const [playerDirection, setPlayerDirection] = useState<AnimationDirection>(1);
    const playerRef = useRef<Player>(null);

    const reversePlayerDirection = useCallback(() => {
        setPlayerDirection((prevDirection) =>
            {
                return prevDirection * -1 as AnimationDirection;
            });
    }, [playerRef]);
    
    const PlayHamburgerAnimation = useCallback(() => {
        playerRef.current?.play();
    }, [playerRef]);
    return (
        <button 
            className="social-icon-button hamburger-icon"
            onClick={PlayHamburgerAnimation}
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