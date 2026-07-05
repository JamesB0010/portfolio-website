import { JamesPortrait } from "../../generatedImageComponents/JamesPortrait"
import { SkyImage } from "../../generatedImageComponents/SkyImage"

export const Page = () =>
{
    return (
        <div style={{position:"relative"}}>
            <SkyImage className="landing-page-hero-image" />
            <div className="landing-page-hero-content">
                <div style={{height: "8%"}}></div>
                <JamesPortrait style={{borderRadius: "50%", width: "10%"}}/>
                <h1>James Bland</h1>
                <p>
                    <strong>{"First-Class Computer Games Technology graduate and award-winning gameplay/generalist programmer,\n"}</strong>
                    {"experienced in Unity (C#) and Unreal Engine (C++/Blueprints). Strong background in gameplay systems, engine,\n graphics programming and tools development, with industry recognition from TIGA and Unity for\nHumanity."}
                </p>
            </div>
            <div style={{width: "100%", height: "600px"}}>
            </div>
        </div>
    )
}