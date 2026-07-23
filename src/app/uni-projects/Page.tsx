import { Carousel } from "../../components/carousel/Carousel";
import { CarouselItem } from "../../components/carousel/CarouselItem";
import { DissertationPoster } from "../../generatedImageComponents/DissertationPoster";
import { FreightScreenshot } from "../../generatedImageComponents/FreightScreenshot";
import { InspirationalStudentOfTheYear } from "../../generatedImageComponents/InspirationalStudentOfTheYear";
import { KnightlyKnockoutScreenshot } from "../../generatedImageComponents/KnightlyKnockoutScreenshot";
import { TigaGradOfTheYear } from "../../generatedImageComponents/TigaGradOfTheYear";
import { UnityHonourableMention } from "../../generatedImageComponents/UnityHonourableMention";

export const Page = () =>
{
    return (
        <div className="cv-page-shell">
            <div className="cv-page">
                <div className="cv-header">
                    <div className="cv-name">University projects</div>
                </div>

                <section className="cv-section">
                    <div className="cv-heading">Individual Honors Project (Reel Together)</div>
                    <strong>Final Year Dissertation Project</strong>
                    <p>Over the course of approximately seven months, I designed, implemented, and tested a multiplayer game aimed at encouraging players to perform movements identified as beneficial for stroke rehabilitation. The project focused on increasing patient motivation and engagement compared to conventional rehabilitation methods through interactive and goal-oriented gameplay.</p>
                    <p>The project was entered into the Unity for Humanity Grant and was recognised as an Honourable Mention, as highlighted in the official Unity blog post announcing the winners.</p>
                    <strong>Technical Contributions</strong>
                    <p>Throughout development, I applied a broad range of skills developed during my Games Technology course, including:</p>
                    <ul>
                        <li>
                            <strong>Graphics Programming</strong>
                            <p>Implemented real-time water ripple effects to enhance visual feedback and immersion.</p>
                        </li>
                        <li>
                            <strong>Gameplay & Systems Programming</strong>
                            <p>Designed and implemented core gameplay systems tailored to rehabilitation-focused player interactions.</p>
                        </li>
                        <li>
                            <strong>AI Implementation</strong>
                            <p>Developed AI behaviours including wandering logic and finite state machines to control non-player entities.</p>
                        </li>
                        <li>
                            <strong>Audio Implementation</strong>
                            <p>Integrated FMOD for adaptive and responsive audio feedback.</p>
                        </li>
                        <li>
                            <strong>Tools Programming</strong>
                            <p>Created custom development tools to streamline iteration and testing.</p>
                        </li>
                        <li>
                            <strong>Third-Party Integration</strong>
                            <p>Utilised, adapted and integrated a third-party open-source API (etee controller input api) to extend functionality and support multiplayer features.</p>
                        </li>
                    </ul>
                    <DissertationPoster style={{width: "100%"}}/>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Knigtly Knockout</div>
                    <p>Knightly Knockout is a networked multiplayer sword-fighting game built using full-stack web technologies. The game allows players to engage in real-time combat with physics-driven sword interactions in a 3D environment.</p>
                    <strong>Technical highlights</strong>
                    <ul>
                        <li>
                            <strong>3D Graphics & Physics</strong>
                            <p>Built using Three.js for rendering and ammo.js for physics simulation, enabling realistic sword collisions and character movement.</p>
                        </li>
                        <li>
                            <strong>Networking</strong>
                            <p>Implemented real-time multiplayer functionality using Socket.io and Node.js, handling player input, synchronization, and game state across clients.</p>
                        </li>
                        <li>
                            <strong>Backend & Database</strong>
                            <p>Developed the server with Express.js, Node.js, and MySQL, including secure player data storage and game session management.</p>
                        </li>
                        <li>
                            <strong>File & Asset Handling</strong>
                            <p>Used Multer for file uploads and fs/path modules for server-side asset management.</p>
                        </li>
                        <li>
                            <strong>Security & Utilities</strong>
                            <p>Integrated crypto for secure operations and CORS for cross-origin resource sharing.</p>
                        </li>
                    </ul>
                    <p>Additional technologies used include HTML, CSS, JavaScript, npm, and Nodemon for development workflow and project management.</p>
                    <p>A short video demonstrating gameplay is available on my YouTube channel https://www.youtube.com/watch?v=okefL1Rf-ZA&t=1s</p>
                    <KnightlyKnockoutScreenshot style={{width: "100%"}} />

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Jett engine (c++ / opengl)</div>
                    <p>Jett Engine is a custom game engine written in C++, leveraging OpenGL for GPU-accelerated graphics rendering. The project provided an opportunity to apply advanced C++ concepts, clean code principles, and software design patterns in a graphics-intensive environment.</p>
                    <strong>Technical highlights:</strong>
                    <p>The engine implements a range of modern graphics techniques, including:</p>
                    <ul>
                        <li>
                            <strong>Shaders & Rendering</strong>
                            <ul>
                                <li>Developed GLSL vertex and fragment shaders for dynamic effects, including ocean wave simulation, skybox reflections, and Blinn-Phong shading.</li>
                                <li>Implemented post-processing effects to enhance visual quality.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Graphics Optimisations</strong>
                            <ul>
                                <li>Utilised instancing to efficiently render multiple objects with minimal draw calls.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Advanced Scene Features</strong>
                            <ul>
                                <li>Procedural ocean waves driven by a vertex shader.</li>
                                <li>Realistic reflections and lighting effects for immersive environments.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>This project strengthened my understanding of GPU programming, low-level graphics rendering, and real-time performance optimisation while reinforcing clean architecture and modular engine design.</p>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Unidentified fossil organiser</div>
                    <p>Unidentified Fossil Organizer is a collaborative project developed by a multidisciplinary team, including myself, another Games Technology student, and two audio students. The game was originally created for the client Think Tank Birmingham over approximately 12 weeks, focusing on core gameplay and mechanics.</p>
                    <p>Following the initial build, the team spent an additional 12 weeks remastering all audio to professional quality, incorporating more complex sound design to enhance player experience and game identity. During this phase, the audio team experimented with features that allowed for advanced FMOD integration, professional recording, and editing techniques.</p>
                    <strong>My Contributions</strong>
                    <ul>
                        <li>
                            <p>Collaborated with the team to integrate audio systems into gameplay using FMOD, ensuring dynamic and responsive sound implementation.</p>
                        </li>
                        <li>
                            <p>Assisted in implementing features that allowed gameplay to interact with audio events for a more immersive experience.</p>
                        </li>
                        <li>
                            <p>Worked with professional audio students to synchronize gameplay mechanics with high-quality sound assets.</p>
                        </li>
                    </ul>
                    <strong>Technologies & Tools</strong>
                    <ul>
                        <li>
                            <p>FMOD for audio implementation</p>
                        </li>
                        <li>
                            <p>Professional recording and editing software/hardware</p>
                        </li>
                        <li>
                            <p>Game development using Unity</p>
                        </li>
                    </ul>
                    <p>This project strengthened my ability to work in a multidisciplinary team, integrate new technologies into a project, and leverage audio to enhance game identity and player engagement.</p>
                    <p>Through using sound to experiment we added the following features to the game</p>
                    <ul>
                        <li>3 ways for the player to die each with unique sounds</li>
                        <li>an afterlife area for after the player dies (ambiance sounds and completely different soundscape)</li>
                        <li>the ability to drive a go-cart around the office (go-cart sounds, different music triggered)</li>
                    </ul>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Ai in games assignment</div>                    
                    <p>This project was developed as part of the AI in Games module and provided practical experience in designing and implementing a range of artificial intelligence systems commonly used in games. The focus of the project was on agent decision-making, pathfinding, and scalable AI architectures, with an emphasis on modularity, extensibility, and tooling.</p>
                    <h3>Decision-Making Systems</h3>
                    <strong>Finite state machines</strong>
                    <p>A core component of the project is a custom finite state machine (FSM) framework, designed to control agent behaviour in a clear and maintainable way. To support rapid iteration and usability, the system is accompanied by a bespoke Unity editor window, allowing finite state machines to be visually created, edited, and debugged directly within the editor.</p>
                    <p>This approach significantly improved workflow efficiency and enabled complex behaviours to be authored without modifying runtime code. The FSM system was used to drive in-game agent logic, demonstrating reactive state transitions and behaviour changes in response to environmental conditions.</p>
                    <h3>Pathfinding Systems</h3>
                    <p>The project includes the implementation of several pathfinding algorithms, designed using the Strategy design pattern. Each algorithm is encapsulated within a ScriptableObject, allowing a collection of interchangeable pathfinding strategies to exist within the project’s asset folder.</p>
                    <p>This architecture enables pathfinding behaviour to be swapped at runtime, either via the Unity Inspector or through code, without requiring changes to the pathfinding agent itself. This design encourages experimentation, comparison of algorithms, and reuse across different agents and scenarios.</p>
                    <h3>Flocking Behaviour</h3>
                    <p>A boids-based flocking system was implemented to explore group movement and emergent behaviour. Two versions of the system were created:</p>
                    <ul>
                        <li>
                            <p>A single-threaded implementation for clarity and ease of debugging</p>
                        </li>
                        <li>
                            <p>A multithreaded implementation utilising the Unity Job System to improve performance and scalability</p>
                        </li>
                    </ul>
                    <p>This comparison highlights the benefits of data-oriented design and parallel processing when working with large numbers of agents.</p>
                    <h3>Agent Behaviour Example</h3>
                    <p>These systems were integrated into a small interactive scenario featuring a mouse character controlled by a finite state machine. The agent exhibits distinct behaviours and dynamically reacts to global changes in its environment, demonstrating the interaction between decision-making logic and environmental stimuli.</p>
                    <h3>Additional AI techniques</h3>
                    <p>The module also introduced Behaviour Trees and Goal-Oriented Action Planning (GOAP) as alternative approaches to agent decision-making. While these systems were explored at an introductory level, they highlighted the strengths and limitations of different AI architectures. Further exploration of these techniques is planned to support more scalable and expressive AI behaviour in future projects.</p>
                    <h3>Code Architecture & Development Practices</h3>
                    <p>Throughout development, emphasis was placed on clean code architecture and reusability. Systems were designed to be modular and decoupled, allowing individual components—such as decision-making logic or pathfinding algorithms—to be extended or replaced with minimal impact on the wider codebase.</p>
                    <p>The use of ScriptableObjects, editor tooling, and design patterns reflects a production-oriented approach to AI development rather than a one-off prototype.</p>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Development of games for non PC platforms (Buzzard & Necrosis)</div>                    
                    <p>Buzzard is a mobile game published on the Google Play Store. This project provided valuable experience in developing, testing, and deploying a game specifically for mobile platforms. Throughout development, key considerations such as UI</p>
                    <p>scalability, performance, and mobile-friendly control schemes were prioritized to ensure the game was well suited to its target platform.</p>
                    <strong>Mobile-Specific Features</strong>
                    <p>The game leverages several hardware features unique to mobile devices:</p>
                    <ul>
                        <li>
                            <strong>Microphone Integration</strong>
                            <p>The device microphone is used in combination with a Hugging Face API to create interactive cinematic moments where players must verbally respond to in-game characters to progress. The microphone is also used to trigger custom audio playback when the player’s ship is destroyed.</p>
                        </li>
                        <li>
                            <strong>Gyroscope Controls</strong>
                            <p>The phone’s gyroscope allows players to control the pitch and roll of the spaceship by physically tilting the device. This control scheme can be disabled in the settings menu, allowing players to switch to on-screen virtual joysticks instead.</p>
                        </li>
                        <li>
                            <strong>Haptic Feedback</strong>
                            <p>Vibration is used to provide tactile feedback when enemy ships are defeated. The vibration strength is dynamically adjusted based on the distance between the player and the enemy, enhancing immersion.</p>
                        </li>
                    </ul>
                    <strong>Frameworks & Services Used</strong>
                    <p>The project integrates several third-party frameworks and services:</p>
                    <ul>
                        <li>
                            <strong>Google Play Games Services</strong>
                            <ul>
                                <li>
                                    <p>Google account login</p>
                                </li>
                                <li>
                                    <p>Persistent local and cloud-based data saving</p>
                                </li>
                                <li>
                                    <p>Achievement system</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Cinemachine</strong>
                            <ul>
                                <li>
                                    <p>Dynamic camera behaviour</p>
                                </li>
                                <li>
                                    <p>Support for both first-person and third-person perspectives</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Unity Cloud Services</strong>
                            <ul>
                                <li>
                                    <p>In-game advertisements</p>
                                </li>
                                <li>
                                    <p>Addressables system to reduce initial install size and improve download efficiency</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <strong>Code Architecture & Development Practices</strong>
                    <p>During development, I regularly refactored code to maintain clarity and scalability. The project is organised into small, atomic classes, which significantly improved development speed and enabled the addition of more complex features.</p>
                    <p>A particular highlight is the ship customisation system, which makes extensive use of abstract classes, inheritance, and abstract/virtual methods. This design allows new ship components and behaviours to be added with minimal changes to existing code, demonstrating strong object-oriented programming principles.</p>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <strong>Necrosis</strong>
                    <p>Necrosis is a console-targeted game developed for PlayStation, created and tested using PlayStation-specific APIs and devkits. The project was developed by a team of three over the course of a semester (approximately twelve weeks) and required close collaboration, platform-specific testing, and performance awareness.</p>
                    <strong>Core Gameplay Contribution – Drone Mechanic</strong>
                    <p>My primary contribution to the project was the design and implementation of the drone mechanic. Throughout the level, players can interact with in-world terminals to gain control of a remotely operated drone. Once deployed, the drone can be piloted across the map to locate and sabotage the opposing player, culminating in a timed detonation.</p>
                    <p>This mechanic introduces an asymmetric layer to gameplay, shifting the player temporarily from direct confrontation to tactical disruption and positioning.</p>
                    <strong>Visual Effects & Rendering Pipeline</strong>
                    <p>The drone’s visual presentation was heavily inspired by the Dune films and games, particularly their use of abstract, high-contrast surveillance imagery. To achieve a similar aesthetic, I implemented a custom renderer feature using Unity’s Scriptable Render Pipeline (URP).</p>
                    <p>The final visual effect is composed of multiple render passes, each with a clearly defined responsibility:</p>
                    <strong>Render Pass Breakdown</strong>
                    <ul>
                        <li>
                            <strong>Skybox Tint & Static Overlay</strong>
                            <p>Applies colour grading to the skybox and overlays a subtle static effect to reinforce the drone’s surveillance perspective.</p>
                        </li>
                        <li>
                            <strong>Scene Outlining (Difference of Gaussians)</strong>
                            <p>Uses a Difference of Gaussians technique to generate a high-contrast, black-and-white outlined version of the scene, enhancing readability and stylisation.</p>
                        </li>
                        <li>
                            <strong>Character Highlighting (Fresnel Shader)</strong>
                            <p>Applies a Fresnel-based shader to characters, causing them to glow when viewed through the drone feed and ensuring clear visual separation from the environment.</p>
                        </li>
                    </ul>
                    <p>Together, these passes combine to create a distinct visual mode that communicates both gameplay function and narrative tone.</p>
                    <strong>Inventory System</strong>
                    <p>In addition to the drone mechanic, I implemented the game’s inventory system. The system makes use of asynchronous programming to handle delayed responses to player input, allowing inventory actions to resolve after a variable amount of time without blocking gameplay.</p>
                    <p>This approach ensured responsive user interaction while supporting mechanics such as timed item usage and delayed effects.</p>
                    <strong>Development Practices & Collaboration</strong>
                    <p>Working as part of a small team required clear division of responsibilities and frequent iteration. My work focused on gameplay systems, rendering features, and technical problem-solving, while maintaining compatibility with console hardware constraints and team workflows.</p>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
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

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Freight</div>                    
                    <p>Freight is my first game developed using Unreal Engine, created as part of the 3D Games Programming and Game Asset Pipeline modules at university. The project was completed over approximately ten weeks and provided hands-on experience with Unreal Engine’s gameplay framework, asset workflows, and real-time rendering tools.</p>
                    <p>The game is set in a post-apocalyptic world where a group of survivors travel across a devastated landscape aboard an old freight train. Players take on the role of a “runner,” jumping off the moving train at points of interest to scavenge resources for the group before rejoining the convoy.</p>
                    <strong>Gameplay & Combat Systems</strong>
                    <p>The player is equipped with two weapons—a revolver and a sword—which can be swapped between at runtime. Combat is designed to encourage weapon chaining, allowing players to combine ranged and melee attacks into fluid combos. This system was intended to promote aggressive, expressive play rather than isolated weapon usage.</p>
                    <strong>Development & Learning Outcomes</strong>
                    <p>As my first Unreal Engine project, Freight was a significant learning experience. It required adapting to Unreal’s component-based architecture, Blueprint scripting, and asset pipeline, while also managing scope within a fixed development timeframe.</p>
                    <p>One of the most successful outcomes of the project was the world-building and visual presentation. The environments, lighting, and overall atmosphere effectively communicate the game’s tone and setting, helping to establish a strong sense of place.</p>
                    <p>The development process and technical decisions behind the project are documented in one of my most successful YouTube videos, The Making of Freight, which showcases the project’s evolution and provides insight into my workflow.</p>
                    <strong>Reflection & Areas for Improvement</strong>
                    <p>While the visual design and world-building are strong, there are clear opportunities to improve the gameplay feel and feedback. Enhancements such as:</p>
                    <ul>
                        <li>
                            <p>Improved particle effects for combat impacts</p>
                        </li>
                        <li>
                            <p>Screen shake and camera feedback during attacks</p>
                        </li>
                        <li>
                            <p>More responsive audio cues and hit reactions</p>
                        </li>
                    </ul>
                    <p>would significantly increase the sense of weight and responsiveness with relatively small changes. Revisiting these elements would elevate the combat system and better align the game feel with the visual quality of the world.</p>
                    <FreightScreenshot style={{width: "100%"}} />

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Additional projects</div>                    
                    <p>Additional smaller projects such as game jam projects as part of small friendly game Jams, larger game jams (such as ggj) and personal projects  can be found on my itch io page https://averagealtodriver.itch... as well as other module projects such as a triangle rasterizer can be found on my github https://github.com/JamesB0010</p>

                    <div style={{height: "2rem"}} />
                    <div className="cv-heading">Below are links to projects / content covering projects i have worked on</div>                    
                </section>
            </div>
        </div>
    );
}