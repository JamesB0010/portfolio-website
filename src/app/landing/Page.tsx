import { Carousel } from "../../components/Carousel"
import { JamesPortrait } from "../../generatedImageComponents/JamesPortrait"

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
                <Carousel />
            </div>
        </div>
    )
}