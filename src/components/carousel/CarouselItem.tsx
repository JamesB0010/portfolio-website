import {ReactNode} from "react";

interface CarouselItemProps
{
    imageFilePath: string;
    children: ReactNode;
}

export const CarouselItem = ({imageFilePath, children}: CarouselItemProps) =>
{
    return (
        <div className="carousel-item">
            <div className="carousel-image" style={{ backgroundImage: `url(${imageFilePath})` }} />
            <div className="carousel-item-text-container">
                {children}
            </div>
        </div>
    )
}