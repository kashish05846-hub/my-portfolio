import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={closeMenu}>
            Ashish<span>.</span>
          </a>

          <div className="nav-links desktop-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#blog">Blog</a>
            <a href="#contact" className="contact-link">
              Contact
            </a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#resume" onClick={closeMenu}>
              Resume
            </a>
            <a href="#blog" onClick={closeMenu}>
              Blog
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
