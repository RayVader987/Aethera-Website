import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logoIcon">✦</span>
        <h2>Aethera</h2>
      </div>

      <ul>

        <li><a href="#hero">Home</a></li>

        <li><a href="#problem">Problem</a></li>

        <li><a href="#solution">Solution</a></li>

        <li><a href="#impact">Impact</a></li>

        <li><a href="#usecases">Use Cases</a></li>

        <li><a href="#founders">Founders</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;