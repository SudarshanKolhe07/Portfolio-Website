import "../Style.css"
export default function Projetcs(){
    return(
        <section className="projects" id="projects">
  <h2>
    Featured <span>Projects</span>
  </h2>
  <p>Here are some of my recent projects showcasing my expertise in software and web development.</p>

  <div className="projects-grid">
    {/* AgriSense AI */}
    <div className="project-card">
      <div className="project-icon">🌱</div>
      <h3>AgriSense AI</h3>
      <p>
        An intelligent framework for predictive analysis and proactive problem-solving in agriculture. 
        Built using machine learning for crop disease detection, weather forecasting, and water management.
      </p>
      <div className="project-tags">
        <span>Python</span>
        <span>TensorFlow</span>
        <span>Flask</span>
        <span>ML</span>
      </div>
      <a href="#" className="btn-demo">Live Demo</a>
    </div>

    {/* StayEase */}
    <div className="project-card">
      <div className="project-icon">🏨</div>
      <h3>StayEase – Hotel Booking Platform</h3>
      <p>
        A full-stack hotel booking platform enabling property listings, search, and booking management with 
        secure authentication and seamless user experience.
      </p>
      <div className="project-tags">
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>EJS</span>
      </div>
      <a href="#" className="btn-demo">Live Demo</a>
    </div>

    {/* Traffic Management */}
    <div className="project-card">
      <div className="project-icon">🚦</div>
      <h3>Adaptive Traffic Management System</h3>
      <p>
        Smart system to optimize urban traffic flow using real-time data analysis, reducing congestion and 
        improving efficiency.
      </p>
      <div className="project-tags">
        <span>Java</span>
        <span>MySQL</span>
        <span>Spring Boot</span>
      </div>
      <a href="#" className="btn-demo">Live Demo</a>
    </div>

    {/* Image Steganography */}
    <div className="project-card">
      <div className="project-icon">🖼️</div>
      <h3>The Chambers of Secrete</h3>
      <p>
        An Android-based image steganography app for encoding and decoding secret text and images into cover 
        images securely.
      </p>
      <div className="project-tags">
        <span>Android</span>
        <span>Java</span>
        <span>XML</span>
      </div>
      <a href="#" className="btn-demo">Live Demo</a>
    </div>

    {/* Automated MCQ Generator */}
    <div className="project-card">
      <div className="project-icon">📝</div>
      <h3>Automated MCQs Extractor</h3>
      <p>
        Tool that extracts text from PDFs, preprocesses data, and generates multiple-choice questions for 
        assessments.
      </p>
      <div className="project-tags">
        <span>Python</span>
        <span>NLP</span>
        <span>Flask</span>
      </div>
      <a href="#" className="btn-demo">Live Demo</a>
    </div>
  </div>
</section>

    )
}