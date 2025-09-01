import "../Style.css"

export default function Hero(){

    return(
    <section className="hero">
      <div className="hero-content">
  <h1>
    Hi, I'm <span>Sudarshan</span>
  </h1>
  <h2>
    Aspiring Software Engineer | AI & Data Science Student at VIIT | Skilled in
    Full Stack Development & Problem Solving
  </h2>

  <div className="hero-buttons">
    <button className="btn-primary">View My Work</button>
    <button className="btn-secondary">Download Resume</button>
  </div>

  {/* Extra Social + Tech Section */}
  <div className="hero-extra">
    {/* Available On */}
    <div className="available">
      <p>I'm available on</p>
      <div className="icons">
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>

    {/* Currently Working On */}
    <div className="working">
      <p>Currently working on</p>
      <div className="icons">
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
        <i className="fas fa-database"></i>
        <i className="fab fa-java"></i>
      </div>
    </div>
  </div>
</div>


      <div className="hero-image">
        <span role="img" aria-label="coder">👨‍💻</span>
      </div>
    </section>
    )
}