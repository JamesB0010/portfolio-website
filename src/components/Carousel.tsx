import { useCallback, useEffect, useRef, useState } from "react";
import INSPIRATIONAL_STUDENT_IMAGE from "../../public/backgrounds/InspirationalStudentOfTheYear.jpeg";
import TIGA_GRAD_OF_YEAR_IMAGE from "../../public/backgrounds/TigaGradOfTheYear.png";
import UNITY_HONOURABLE_MENTION from "../../public/backgrounds/UnityHonourableMention.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const Carousel = () =>
{
    const [index, setIndex] = useState<number>(0);

    const scrollingBodyRef = useRef<HTMLDivElement | null>(null)

    const [scrollBehaviour, setScrollBehaviour] = useState<"auto" | "smooth">("smooth");

    const incrementCarousel = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, []);

    const decrementCarousel = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    }, []);

    const scrollOnTimeInterval = useCallback(() =>
    {
        incrementCarousel();
    }, [incrementCarousel])

    const onScrollEnd = useCallback(() =>
    {
        console.log("scroll end");
    }, [index]);

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            const scrollWidth = scrollingBodyRef.current.scrollWidth;
            scrollingBodyRef.current.scroll({top: 0, left: (scrollWidth / 6) * index})
        }

    }, [index])
    
    useEffect(() =>
    {
        const interval = setInterval(scrollOnTimeInterval, 6000)

        return () =>
        {
            clearInterval(interval);
        }
    }, [scrollOnTimeInterval, index]);

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            scrollingBodyRef.current.onscrollend = () =>
            {
                if (index === 0)
                {
                    setScrollBehaviour("smooth");
                }
                else if (index === 3)
                {
                    setIndex(0);
                    setScrollBehaviour("auto");
                }
            }
        }
    }, [onScrollEnd, scrollingBodyRef, setIndex])

    const carouselContent = (
        <div className="carousel-container">
            <div className="carousel-item">
                <div className="carousel-image" style={{ backgroundImage: `url(${INSPIRATIONAL_STUDENT_IMAGE})` }} />
                <div className="carousel-item-text-container">
                    <p>Inspirational Student of the year</p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-image" style={{ backgroundImage: `url(${UNITY_HONOURABLE_MENTION})` }} />
                <div className="carousel-item-text-container">
                    <p>Unity for humanity grant honourable mention</p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-image" style={{ backgroundImage: `url(${TIGA_GRAD_OF_YEAR_IMAGE})` }} />
                <div className="carousel-item-text-container">
                    <p>Tiga graduate of the year</p>
                </div>
            </div>
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