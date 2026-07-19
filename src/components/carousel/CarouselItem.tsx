import {cloneElement, ImgHTMLAttributes, ReactElement, ReactNode} from "react";

interface CarouselItemProps
{
    contentImage: ReactElement<ImgHTMLAttributes<HTMLImageElement>>
    children: ReactNode;
}

export const CarouselItem = ({contentImage, children}: CarouselItemProps) =>
{
    return (
        <div className="carousel-item">
            {cloneElement(contentImage, {className: "carousel-image"})}
            <div className="carousel-item-text-container">
                {children}
            </div>
        </div>
    )
}