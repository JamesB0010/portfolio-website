import { Carousel } from "../../components/carousel/Carousel"
import { JamesPortrait } from "../../generatedImageComponents/JamesPortrait"
import INSPIRATIONAL_STUDENT_IMAGE from "../../../public/backgrounds/InspirationalStudentOfTheYear.jpeg";
import TIGA_GRAD_OF_YEAR_IMAGE from "../../../public/backgrounds/TigaGradOfTheYear.png";
import UNITY_HONOURABLE_MENTION from "../../../public/backgrounds/UnityHonourableMention.png";
import { CarouselItem } from "../../components/carousel/CarouselItem";

export const Page = () =>
{
    return (
        <div>
            <div className = "landing-page-hero-content-parent">
                <div className="landing-page-hero-content">
                    <div className="buffer-0"/>
                    <JamesPortrait className="JamesPortrait" />
                    <h1>James Bland</h1>
                    <p>
                        <strong>{"First-Class Computer Games Technology graduate and award-winning gameplay/generalist programmer,\n"}</strong>
                        {"experienced in Unity (C#) and Unreal Engine (C++/Blueprints). Strong background in gameplay systems, engine,\n graphics programming and tools development, with industry recognition from TIGA and Unity for\nHumanity."}
                    </p>
                </div>
            </div>
            <div style={{width: "100%", height: "600px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <div style={{height: "5%"}}/>
                <Carousel>
                    <CarouselItem imageFilePath={INSPIRATIONAL_STUDENT_IMAGE}>
                        <p>Inspirational Student of the year</p>
                    </CarouselItem>
                    <CarouselItem imageFilePath={UNITY_HONOURABLE_MENTION}>
                        <p>Unity for humanity grant honourable mention</p>
                    </CarouselItem>
                    <CarouselItem imageFilePath={TIGA_GRAD_OF_YEAR_IMAGE}>
                        <p>Tiga graduate of the year</p>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    )
}