import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav-container">

        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt="OPERIXA"
            className="brand-logo"
          />
        </NavLink>

        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/free-audit"
            className="audit-nav-link"
            onClick={closeMenu}
          >
            Free Audit
          </NavLink>

          <NavLink
            to="/contact"
            className="btn-nav mobile-nav-cta"
            onClick={closeMenu}
          >
            Get Started
          </NavLink>
        </nav>

        <div className="nav-actions">
          <NavLink
            to="/contact"
            className="btn-nav desktop-nav-cta"
          >
            Get Started
          </NavLink>

          <button
            type="button"
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;