import "../Style.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sudarshan Kolhe. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/SudarshanKolhe07" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sudarshankolhe" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ws0x6iw" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:sudarshankolhe04@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="created-by">Created by ❤️ Sudarshan</p>
      </div>
    </footer>
  );
}
