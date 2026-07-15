import {useCallback, useEffect} from "react";

interface useCarouselTimeIntervalScrollingProps
{
    index: number;
    direction: -1 | 1;
    incrementCarousel: () => void;
    decrementCarousel: () => void;
    carouselAutoScrollInterval: number;
}

export const useCarouselTimeIntervalScrolling = (props: useCarouselTimeIntervalScrollingProps) =>
{
    const {
        index,
        direction,
        incrementCarousel,
        decrementCarousel,
        carouselAutoScrollInterval
    } = props;

    const scrollOnTimeInterval = useCallback(() =>
    {
        (direction === 1 ? incrementCarousel : decrementCarousel)();
    }, [incrementCarousel, decrementCarousel, direction])

    useEffect(() =>
        {
            const interval = setInterval(scrollOnTimeInterval, carouselAutoScrollInterval)
    
            return () =>
            {
                clearInterval(interval);
            }
        }, [scrollOnTimeInterval, index, direction]);
};