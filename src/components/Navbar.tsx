import logoText from '../assets/logo-text.png'
function Navbar() {
  return (
    <nav>
      <div>
        <img src={logoText} alt="Dev Stack Logo" />
      </div>
      <div>links</div>
      <div>sign up</div>
    </nav>
  );
}

export default Navbar;