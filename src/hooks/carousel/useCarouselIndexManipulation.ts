import { useCallback, useRef, useState } from "react";

interface useCarouselIndexManipulationProps
{
    upperBounds: number
}

export const useCarouselIndexManipulation = ({upperBounds}: useCarouselIndexManipulationProps) =>
{
    const [index, setIndex] = useState<number>(0);
    const lastIndexRef = useRef<number>(0)
    const [direction, setDirection] = useState<-1 | 1>(1);


    const incrementCarousel = useCallback(() => {
            setDirection(1);
            setIndex((prevIndex) =>
            {
                lastIndexRef.current = prevIndex;
                return (prevIndex + 1) % upperBounds;
            })
        }, [upperBounds]);
    
    const decrementCarousel = useCallback(() => {
        setDirection(-1);
        setIndex((prevIndex) => 
        {
            lastIndexRef.current = prevIndex;
            return (prevIndex - 1 + upperBounds) % upperBounds;
        })
    }, [upperBounds]);

    return {
        index: index,
        setIndex: setIndex,
        direction: direction,
        lastIndexRef: lastIndexRef,
        incrementCarousel: incrementCarousel,
        decrementCarousel: decrementCarousel
    }
}