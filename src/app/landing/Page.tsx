import { JamesPortrait } from "../../generatedImageComponents/JamesPortrait"
import { SkyImage } from "../../generatedImageComponents/SkyImage"

export const Page = () =>
{
    return (
        <div style={{position:"relative"}}>
            <SkyImage className="landing-page-hero-image" />
            <div className="landing-page-hero-content">
                <div style={{height: "10%"}}></div>
                <JamesPortrait style={{borderRadius: "50%", width: "10%"}}/>
                <h1>James Bland</h1>
                <p>
                    <strong>{"First-Class Computer Games Technology graduate and award-winning\ngameplay/generalist programmer"}</strong>
                    {", experienced in Unity (C#) and Unreal Engine (C++/Blueprints).\nStrong background in gameplay systems, engine, graphics programming\n and tools development, with industry recognition from TIGA and Unity for\nHumanity."}
                </p>
            </div>
            <div style={{width: "100%", height: "600px"}}>
            </div>
        </div>
    )
}