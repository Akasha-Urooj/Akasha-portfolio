function Navbar() {
  return (
    <nav className="navbar">

      <a
        href="#home"
        className="logo"
      >
        <span>&lt;</span>
        AKASHA
        <span>/&gt;</span>
      </a>


      <div className="nav-links">

        <a href="#home">
          Home
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#about">
          About
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#experience">
          Experience
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>


      <div className="nav-socials">

        <a
          href="https://github.com/Akasha-Urooj"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          GH
        </a>

        <a
          href="https://www.linkedin.com/in/akasha-urooj/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          IN
        </a>

      </div>

    </nav>
  );
}

export default Navbar;
