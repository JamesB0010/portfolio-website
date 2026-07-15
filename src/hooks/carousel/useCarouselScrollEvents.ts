import { useState, useCallback, RefObject } from "react";

interface useCarouselScrollEventsProps
{
    scrollingBody: HTMLDivElement | null;
    childrenCount: number;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    direction: -1 | 1;
    lastIndexRef: RefObject<number>;
    incrementCarousel: () => void;
    decrementCarousel: () => void;
}

export const useCarouselScrollEvents = (props: useCarouselScrollEventsProps) =>
{
    const {
        scrollingBody,
        childrenCount,
        index,
        setIndex,
        direction,
        lastIndexRef,
        incrementCarousel,
        decrementCarousel
    } = props;

    const [scrollBehaviour, setScrollBehaviour] = useState<"auto" | "smooth">("smooth");

    const onScrollEnd = useCallback(() =>
    {
        if (direction === 1)
        {
            if (index === childrenCount)
            {
                setScrollBehaviour("auto");
                setIndex(0);
            }
            else if (index === 0)
            {
                setScrollBehaviour("smooth");
                if (lastIndexRef.current === childrenCount)
                {
                    incrementCarousel();
                }
            }
        }
        else
        {
            if (index === 0)
            {
                setScrollBehaviour("auto");
                setIndex(childrenCount);
            }
            else if (index === childrenCount)
            {
                setScrollBehaviour("smooth");
                if (lastIndexRef.current === childrenCount)
                {
                    decrementCarousel();
                }
            }
        }
    }, [childrenCount, decrementCarousel, direction, incrementCarousel, index, lastIndexRef]);

    const loopToOppositeEnd = useCallback((indexToJumpTo: number, incrementCarosel: boolean) =>
    {
        setScrollBehaviour("auto");
        setIndex((prevIndex) =>
        {
            lastIndexRef.current = prevIndex;
            return indexToJumpTo;
        })

        if (scrollingBody)
        {
            scrollingBody.onscrollend = () =>
            {
                setScrollBehaviour("smooth");
                (incrementCarosel ? incrementCarousel : decrementCarousel)();
            }
        }
    }, [onScrollEnd, incrementCarousel, decrementCarousel, scrollingBody]);

    const onScrollStart = useCallback(() =>
    {
        if (direction === -1 && index === childrenCount && lastIndexRef.current === 0)
        {
            loopToOppositeEnd(childrenCount, false);
        }
        else if (direction === 1 && index === 0 && lastIndexRef.current === childrenCount)
        {
            loopToOppositeEnd(0, true);
        }

    }, [childrenCount, index, loopToOppositeEnd]);

    return {
        index: index,
        direction: direction,
        scrollBehaviour: scrollBehaviour,
        incrementCarousel: incrementCarousel,
        decrementCarousel: decrementCarousel,
        onScrollStart: onScrollStart,
        onScrollEnd: onScrollEnd
    }
}