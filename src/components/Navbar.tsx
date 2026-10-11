import logoText from "../assets/logo-text.png";
function Navbar() {
  return (
    <nav>
        <button aria-label="Open menu">☰</button>
        <div>
            <img src={logoText} alt="Dev Stack Logo" />
        </div>
        <div>
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    </nav>
  );
}

export default Navbar;
