import { Carousel } from "../../components/carousel/Carousel"
import { CarouselItem } from "../../components/carousel/CarouselItem"
import { JamesPresentation } from "../../generatedImageComponents/JamesPresentation"
import INSPIRATIONAL_STUDENT_IMAGE from "../../../public/backgrounds/InspirationalStudentOfTheYear.jpeg";
import TIGA_GRAD_OF_YEAR_IMAGE from "../../../public/backgrounds/TigaGradOfTheYear.png";
import UNITY_HONOURABLE_MENTION from "../../../public/backgrounds/UnityHonourableMention.png";
import { InspirationalStudentOfTheYear } from "../../generatedImageComponents/InspirationalStudentOfTheYear";
import { UnityHonourableMention } from "../../generatedImageComponents/UnityHonourableMention";
import { TigaGradOfTheYear } from "../../generatedImageComponents/TigaGradOfTheYear";

export const Page = () =>
{
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <div className="about-page-first-section">
                <div style={{height: "2rem"}}/>
                <JamesPresentation className="james-presentation-image"/>
                <div style={{display: "flex", flexDirection: "column", justifyContent :"flex-start", alignItems: "center", marginLeft: "2rem", marginRight: "2rem"}}>
                    <h1>About Me</h1>
                    <p>Hi 🙋‍♂️my name is James, i am a generalist programmer skilled in backend, graphics and frontend programming. skills acquired during the acquisition of a first class degree in computer games technology at Birmingham City University.</p>
                    <p>The picture on the left is me giving a technical deep dive presentation at the BCU innovation fest in 2023. It was an amazing experience!</p>
                    <p>When I'm not working i can be found spending time with my Family and friends working as a courier 🚗 or climbing or doing resistance training at my local gym</p>
                    <p>I love going to the cinema and have a long on and off history of being obsessed with FPV drones.</p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
                <h2>Some cool climbing footage</h2>
                <Carousel carouselAutoScrollInterval={6000}>
                    <CarouselItem contentImage={<InspirationalStudentOfTheYear />}>
                        <p>Inspirational Student of the year</p>
                    </CarouselItem>
                    <CarouselItem contentImage={<UnityHonourableMention />}>
                        <p>Unity for humanity grant honourable mention</p>
                    </CarouselItem>
                    <CarouselItem contentImage={<TigaGradOfTheYear />}>
                        <p>Tiga graduate of the year</p>
                    </CarouselItem>
                </Carousel>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "7rem", backgroundColor: "#e0f9ff", marginTop: "1.5rem"}}>
                <h2 style={{margin: "0"}}>"Some cool quote"</h2>
                <h3 style={{margin: "0", marginTop: "0.5rem"}}>Some author</h3>
            </div>
        </div>
    )
}