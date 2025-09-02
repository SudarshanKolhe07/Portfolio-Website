import "../Style.css"


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="name">Sudarshan<span>Kolhe</span></div>
      <div>
        <ul className="nav-links">
          <li><a href="#Hero">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

      </div>
    </div>
  );
}

