import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={closeMenu}>
            Ashish<span>.</span>
          </Link>

          <div className="nav-links desktop-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact" className="contact-link">
              Contact
            </Link>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/skills" onClick={closeMenu}>
              Skills
            </Link>

            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>

            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>

            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
