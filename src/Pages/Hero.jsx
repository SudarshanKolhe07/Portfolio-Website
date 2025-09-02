import "../Style.css"

export default function Hero(){

    return(
    <section className="hero" id="Hero">
      <div className="hero-content">
  <h1>
    Hi, I'm <span>Sudarshan</span>
  </h1>
  <h2>
    Aspiring Software Engineer | AI & Data Science Student at VIIT | Skilled in
    Full Stack Development & Problem Solving
  </h2>

  <div className="hero-buttons">
  {/* View Resume - Opens in a new tab */}
  <a href="/Sudarshan_VIIT.pdf" target="_blank" rel="noreferrer">
    <button className="btn-primary">View Resume</button>
  </a>

  {/* Download Resume */}
  <a href="/Sudarshan_VIIT.pdf" download="Sudarshan_Kolhe.pdf">
    <button className="btn-secondary">Download Resume</button>
  </a>
</div>



  {/* Extra Social + Tech Section */}
  <div className="hero-extra">
    {/* Available On */}
    <div className="available">
      <p>I'm available on</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/sudarshankolhe" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ws0x6iw
" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/SudarshanKolhe07" target="_blank" rel="noreferrer">
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