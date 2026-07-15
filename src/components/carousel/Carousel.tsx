import { useCallback, useEffect, useRef, ReactElement, Children } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useCarouselTimeIntervalScrolling } from "../../hooks/carousel/useCarouselTimeIntervalScrolling";
import { useCarouselIndexManipulation } from "../../hooks/carousel/useCarouselIndexManipulation";
import { CarouselItem } from "./CarouselItem";
import { useCarouselScrollEvents } from "../../hooks/carousel/useCarouselScrollEvents";

interface CarouselProps
{
    carouselAutoScrollInterval?: number;
    children: ReactElement<typeof CarouselItem> | ReactElement<typeof CarouselItem>[];
}

export const Carousel = ({carouselAutoScrollInterval, children}: CarouselProps) =>
{
    const scrollingBodyRef = useRef<HTMLDivElement | null>(null)
    const childrenCount = Children.count(children);

    const indexManipulationReturns = useCarouselIndexManipulation({upperBounds: childrenCount + 1});
    const {index, direction, incrementCarousel, decrementCarousel} = indexManipulationReturns;

    const { 
        scrollBehaviour, 
        onScrollStart, 
        onScrollEnd, 
    } = useCarouselScrollEvents({scrollingBody: scrollingBodyRef.current, childrenCount: childrenCount, ...indexManipulationReturns});
    
    if (carouselAutoScrollInterval)
    {
        useCarouselTimeIntervalScrolling({
            index: index,
            direction: direction,
            incrementCarousel: incrementCarousel,
            decrementCarousel: decrementCarousel,
            carouselAutoScrollInterval: carouselAutoScrollInterval
        });
    }

    const scrollToIndex = useCallback((scrollingBody: HTMLDivElement, scrollWidth: number) =>
    {
        scrollingBody.scrollTo({
            top: 0,
            left: (scrollWidth / (childrenCount * 2)) * index,
            behavior: scrollBehaviour,
        });
    }, [childrenCount, index, scrollBehaviour])

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            const scrollWidth = scrollingBodyRef.current.scrollWidth;
            scrollToIndex(scrollingBodyRef.current, scrollWidth);
        }

    }, [index, scrollBehaviour])

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            scrollingBodyRef.current.onscrollend = onScrollEnd;
            scrollingBodyRef.current.onscroll = onScrollStart;
        }
    }, [onScrollEnd, onScrollStart, scrollingBodyRef])

    const carouselContent = (
        <div className="carousel-container">
            {children}
        </div>
    )

    return (
        <div className="carousel-director">
            <div className="arrows-container">
                <FaAngleLeft className="arrow" onClick={decrementCarousel}/>
                <FaAngleRight className="arrow" onClick={incrementCarousel}/>
            </div>
            <div ref={scrollingBodyRef}className="scrolling-body" style={{scrollBehavior: scrollBehaviour}}>
                {carouselContent}
                {carouselContent}
            </div>
        </div>
    )
}