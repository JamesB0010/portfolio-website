import { JamesPortrait } from "../../generatedImageComponents/JamesPortrait"
import { SkyImage } from "../../generatedImageComponents/SkyImage"

export const Page = () =>
{
    return (
        <div style={{position:"relative"}}>
            <SkyImage className="landing-page-hero-image" />
            <div className="landing-page-hero-content">
                <JamesPortrait style={{borderRadius: "50%", width: "10%"}}/>
                <h1>James Bland</h1>
                <p>First-Class Computer Games Technology graduate and award-winning gameplay/generalist programmer</p>
                <p>experienced in Unity (C#) and Unreal Engine (C++/Blueprints). Strong background in gameplay systems, engine and</p>
                <p>experienced in Unity (C#) and Unreal Engine (C++/Blueprints). Strong background in gameplay systems, engine and graphics programming, and tools development, with industry recognition from TIGA and Unity for Humanity.</p>

            </div>
        </div>
    )
}