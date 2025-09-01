import "../Style.css"

export default function Hero(){

    return(
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Sudarshan</span>
        </h1>
        <h2>Aspiring Software Engineer | AI & Data Science Student at VIIT | Skilled in Full Stack Development & Problem Solving</h2>
        
        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Download Resume</button>
        </div>

        <div className="social-icons">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:sudarshankolhe04@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <span role="img" aria-label="coder">👨‍💻</span>
      </div>
    </section>
    )
}