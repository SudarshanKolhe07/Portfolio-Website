import "../Style.css"


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="name">Sudarshan<span>Kolhe</span></div>
      <div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

