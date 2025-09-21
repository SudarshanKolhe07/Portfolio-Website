import "../Style.css";


export default function About() {
  return (
    <section className="about" id="About">
      <h2>About <span>Me</span></h2>
      <p className="about-intro">
        I am Sudarshan Kolhe, an aspiring Software Engineer and AI & Data Science student at VIIT.  
        I’m passionate about web development, data analysis, and building scalable applications 
        that solve real-world problems.
      </p>

      <div className="about-row">
        {/* Education */}
        <div className="about-card">
          <div className="about-icon">🎓</div>
          <h3>Education</h3>
          <p>
            <strong>B.Tech in AI & Data Science</strong> – VIIT (2023 – 2026)<br />
            CGPA: 8.57 <br /><br />
            <strong>Diploma in Computer Engineering</strong> – Govt. Polytechnic, Pune (2020 – 2023)<br />
            Percentage: 81.67% <br /> <br />
            <strong>Sainiki Secondary & Higher Secondary School, B.</strong> (2014 – 2020)<br />
            Percentage: 92%
          </p>
        </div>

        {/* Internship */}
        <div className="about-card">
          <div className="about-icon">💼</div>
          <h3>Internship</h3>
          <p>
            <strong>Web Developer Intern</strong> – Maestro Intellect (2022)<br /><br />
            Worked on the frontend of a Library Management System using HTML, CSS, and JavaScript.  
            Gained hands-on experience in web development and building user-friendly applications.
          </p>
        </div>

        {/* Achievements */}
        <div className="about-card">
          <div className="about-icon">🏆</div>
          <h3>Achievements</h3>
          <p>
            • Secured <strong>3rd place</strong> in the Innovative Project Competition at JSPM Engineering College, Pune.<br /><br />
            • Completed <strong>Microsoft Power BI Data Analyst Professional Certificate</strong> on Coursera,  
            covering data analysis, visualization, DAX, and dashboard design.  
          </p>
        </div>
      </div>
    </section>
  );
}
