import "../Style.css"
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>
        Technical <span>Skills</span>
      </h2>
      <p>
        Here’s my technology stack and coursework that help me build scalable and innovative applications.
      </p>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span>Java</span>
            <span>C</span>
            <span>C++</span>
            <span>Python</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind CSS</span>
            <span>BootStrap</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>RESTful APIs</span>
            <span>JWT Authentication</span>
            <span>Middleware</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>Database</h3>
          <div className="skill-tags">
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
          </div>
        </div>

        {/* Coursework */}
        <div className="skill-card">
          <h3>Coursework</h3>
          <div className="skill-tags">
            <span>Data Structures & Algorithms</span>
            <span>DBMS</span>
            <span>Operating Systems</span>
            <span>Computer Networks</span>
            <span>AI & ML</span>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="skill-card">
          <h3>Tools & Others</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Hoppscotch</span>
            <span>Figma</span>
            <span>Google Collab</span>
          </div>
        </div>
      </div>
    </section>
  );
}
