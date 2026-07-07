import { useCallback, useEffect, useRef, useState } from "react";
import INSPIRATIONAL_STUDENT_IMAGE from "../../public/backgrounds/InspirationalStudentOfTheYear.jpeg";
import TIGA_GRAD_OF_YEAR_IMAGE from "../../public/backgrounds/TigaGradOfTheYear.png";
import UNITY_HONOURABLE_MENTION from "../../public/backgrounds/UnityHonourableMention.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const Carousel = () =>
{
    const [index, setIndex] = useState<number>(0);
    const lastIndexRef = useRef<number>(0)

    const scrollingBodyRef = useRef<HTMLDivElement | null>(null)

    const [scrollBehaviour, setScrollBehaviour] = useState<"auto" | "smooth">("auto");

    const [direction, setDirection] = useState<-1 | 1>(1);

    const [scrollBehaviourLocked, setScrollBehaviourLocked] = useState<Boolean>(false);

    const incrementCarousel = useCallback(() => {
        if ((lastIndexRef.current === index -1 || lastIndexRef.current === index +1 || lastIndexRef.current === index) && !scrollBehaviourLocked)
        {
            setScrollBehaviour("smooth");
        }
        setDirection(1);
        setIndex((prevIndex) =>
        {
            lastIndexRef.current = prevIndex;
            return (prevIndex + 1) % 4;
        })
    }, [index, lastIndexRef, scrollBehaviourLocked]);

    const decrementCarousel = useCallback(() => {
        if ((lastIndexRef.current === index -1 || lastIndexRef.current === index +1 || lastIndexRef.current === index) && !scrollBehaviourLocked)
        {
            setScrollBehaviour("smooth");
        }
        setDirection(-1);
        setIndex((prevIndex) => 
        {
            lastIndexRef.current = prevIndex;
            return (prevIndex - 1 + 4) % 4;
        })
    }, [index, lastIndexRef, scrollBehaviourLocked]);

    const scrollOnTimeInterval = useCallback(() =>
    {
        if (!scrollBehaviourLocked)
        {
            setScrollBehaviour("smooth");
        }
        (direction === 1 ? incrementCarousel : decrementCarousel)();
    }, [incrementCarousel, decrementCarousel, direction])

    const onScrollEnd = useCallback(() =>
    {
        if (direction === 1)
        {
            if (index === 3)
            {
                setScrollBehaviour("auto");
                setIndex(0);
            }
            else if (index === 0)
            {
                setScrollBehaviour("smooth");
            }
        }
        else
        {
            if (index === 0)
            {
                setScrollBehaviour("auto");
                setIndex(3);
            }
            else if (index === 3)
            {
                setScrollBehaviour("smooth");
            }
        }
    }, [index]);

    const onScrollStart = useCallback(() =>
    {
        if (direction === -1 && index === 3 && lastIndexRef.current === 0)
        {
            setScrollBehaviour("auto");
            setIndex((prevIndex) => 
                {
                    lastIndexRef.current = prevIndex;
                    return 3;
                }
            );
            console.log("snap");

            if (scrollingBodyRef.current)
            {
                scrollingBodyRef.current.onscrollend = () =>
                {
                    if (!scrollBehaviourLocked)
                    {
                        setScrollBehaviour("smooth");
                    }
                    decrementCarousel();
                    if (scrollingBodyRef.current)
                    {
                        scrollingBodyRef.current.onscrollend = onScrollEnd;
                    }
                }
            }
        }
        else if (direction === 1 && index === 0 && lastIndexRef.current === 3)
        {
            console.log("aww snap");

            setScrollBehaviour("auto");
            setIndex((prevIndex) => 
                {
                    lastIndexRef.current = prevIndex;
                    return 0;
                }
            );

            if (scrollingBodyRef.current)
            {
                scrollingBodyRef.current.onscrollend = () =>
                {
                    if (!scrollBehaviourLocked)
                    {
                        setScrollBehaviour("smooth");
                    }
                    incrementCarousel();
                    if (scrollingBodyRef.current)
                    {
                        scrollingBodyRef.current.onscrollend = onScrollEnd;
                    }
                }
            }
        }

    }, [index, scrollingBodyRef, setScrollBehaviour, decrementCarousel, onScrollEnd, lastIndexRef, scrollBehaviourLocked]);

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            const scrollWidth = scrollingBodyRef.current.scrollWidth;
            scrollingBodyRef.current.scrollTo({
                top: 0,
                left: (scrollWidth / 6) * index,
                behavior: scrollBehaviour,
            });
        }

    }, [index, scrollBehaviour])
    
    useEffect(() =>
    {
        const interval = setInterval(scrollOnTimeInterval, 6000)

        return () =>
        {
            clearInterval(interval);
        }
    }, [scrollOnTimeInterval, index, direction]);

    useEffect(() =>
    {
        if (scrollingBodyRef.current)
        {
            scrollingBodyRef.current.onscrollend = onScrollEnd;
            scrollingBodyRef.current.onscroll = onScrollStart;
        }
    }, [onScrollEnd, onScrollStart, scrollingBodyRef, setIndex])

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