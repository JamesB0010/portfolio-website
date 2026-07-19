export const Page = () =>
{
  return (
    <div className="cv-page-shell">
      <div className="cv-page">
        <div className="cv-header">
          <div className="cv-name">James Bland</div>

          <div className="cv-subtitle">
            Software Engineer | Gameplay Programmer | Game Tools Developer
          </div>

          <div className="cv-contact">
          📧 jamesricardbland@gmail.com | 📞 07484 140475 | 📍 Worcester, UK
          <br />
          Portfolio: james-bland.me • GitHub: github.com/JamesB0010 •
          LinkedIn: linkedin.com/in/james-bland
        </div>
        </div>

        <section className="cv-section">
          <div className="cv-heading">Profile</div>

        <p>
          Award-winning software engineer with commercial experience
          developing internal game creation tools at Push Gaming and a
          First-Class BSc (Hons) in Computer Games Technology.
        </p>

        <p>
          Recipient of the TIGA Graduate of the Year award and Birmingham
          City University's Inspirational Student of the Year.
        </p>

        <p>
          Experienced in TypeScript, React, Electron, C++, C# and game
          engine technologies, with a background spanning gameplay
          programming, graphics, tooling and engine development.
        </p>

        <p>
          Passionate about building maintainable software, solving
          technical problems collaboratively and taking ownership of
          impactful features from concept through delivery.
        </p>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Professional Experience</div>

          <div className="cv-job">
            <div>
              <span className="cv-job-title">Software Engineer</span>
              {" | "}
              <span className="cv-company">Push Gaming</span>

              <span className="cv-date">Jul 2025 – Present</span>
            </div>

          <p>
            Working within the Game Technology team to develop and
            maintain bespoke tools that support game production.
          </p>

          <strong>Key achievements</strong>

          <ul className="cv-list">
            <li>
              Develop production features using TypeScript, React and
              Electron.
            </li>
            <li>
              Build editor tooling and interfaces for internal game
              development workflows.
            </li>
            <li>
              Work across frontend and backend systems, including Electron
              IPC and Webpack.
            </li>
            <li>
              Contribute to build automation, CI/CD workflows and
              dependency management across multiple repositories.
            </li>
            <li>
              Investigated and prototyped a potential architectural
              redesign for an internal tool.
            </li>
            <li>
              Took ownership of tooling for an experimental game project
              requiring bespoke editor support.
            </li>
            <li>
              Built a React Flow editor integrating frontend tooling with
              backend services via HTTP APIs.
            </li>
            <li>
              Review pull requests, write documentation and collaborate
              closely with QA.
            </li>
            <li>
              Participate in Agile ceremonies, sprint planning and
              stand-ups using ClickUp.
            </li>
            <li>
              Support teammates by debugging issues and removing technical
              blockers.
            </li>
            <li>
              Use AI responsibly to accelerate research and repetitive
              tasks while maintaining ownership of implementation.
            </li>
          </ul>
          </div>

          <div className="cv-job">
            <div>
              <span className="cv-job-title">Visiting Demonstrator</span>
              {" | "}
              <span className="cv-company">
                Birmingham City University
              </span>

              <span className="cv-date">Mar 2024 – Jun 2025</span>
            </div>

            <ul className="cv-list">
            <li>
              Supported students learning Unreal Engine, C++,
              Blueprints and web game development.
            </li>
            <li>
              Assisted with debugging and mentoring during practical
              sessions.
            </li>
          </ul>
        </div>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Education</div>

          <div className="cv-job-title">
            Birmingham City University
          </div>

        <p>
          BSc (Hons) Computer Games Technology — <strong>First Class</strong>
        </p>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Awards</div>

          <ul className="cv-list">
          <li>TIGA Graduate of the Year (2025)</li>
          <li>BCU Inspirational Student of the Year</li>
          <li>Unity for Humanity Recognition</li>
          <li>Co-author – MiNT Conference (2025)</li>
        </ul>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Technical Skills</div>

          <div className="cv-skill-category">
            <div className="cv-skill-title">Languages</div>
          <p>C++, C#, TypeScript, JavaScript, GLSL, HLSL</p>
        </div>

        <div className="cv-skill-category">
          <div className="cv-skill-title">
            Frameworks & Technologies
          </div>
          <p>
            React, Electron, React Flow, Node.js, REST APIs, SQL,
            Webpack
          </p>
        </div>

        <div className="cv-skill-category">
          <div className="cv-skill-title">Game Development</div>
          <p>
            Unity, Unreal Engine 5 (C++ & Blueprints), Gameplay Systems,
            Graphics Programming, Engine Development, Rendering
          </p>
        </div>

        <div className="cv-skill-category">
          <div className="cv-skill-title">Software Engineering</div>
          <p>
            Git, GitHub, CI/CD, Agile, ClickUp, Clean Code, Design
            Patterns, Object-Oriented Programming, Documentation, Pull
            Requests
          </p>
        </div>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Selected Projects</div>

          <div className="cv-project-block">
            <div className="cv-project-title">
            Gamified Rehabilitation Platform (Unity)
          </div>

          <p>
            Dissertation project developing an upper-limb stroke
            rehabilitation application using etee motion controllers.
          </p>

          <ul className="cv-list">
            <li>
              Developed adaptive gameplay systems for rehabilitation
              exercises.
            </li>
            <li>
              Modified open-source APIs to support project requirements.
            </li>
            <li>
              Recognised by Unity through Unity for Humanity – Unity for
              Good.
            </li>
            <li>
              Co-authored a paper presented at the MiNT Conference
              (2025).
            </li>
          </ul>
        </div>

        <div>
          <div className="cv-project-title">Knightly Knockout</div>

          <p>Networked multiplayer web game.</p>

          <ul className="cv-list">
            <li>
              Built using Three.js, Socket.io and Ammo.js.
            </li>
            <li>
              Implemented additive animation blending and RESTful backend
              integration.
            </li>
            <li>Achieved 93% in Web Games Development.</li>
          </ul>

          <p>
            GitHub: github.com/JamesB0010/KnightlyKnockout
          </p>
        </div>
        </section>

        <section className="cv-section">
          <div className="cv-heading">Interests</div>

        <p>
          Climbing • FPV Drones • Fitness • Game Jams • Graphics
          Programming
        </p>
        </section>

        <section className="cv-section">
          <div className="cv-heading">References</div>

        <p>Available upon request.</p>
      </section>
      </div>
    </div>
  )
}