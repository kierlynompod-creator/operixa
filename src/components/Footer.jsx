
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <span className="footer-logo-mark">O</span>
              <span>OPERIXA</span>
            </NavLink>

            <p>
              Helping businesses grow through smarter technology,
              reliable support, and practical digital solutions.
            </p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="footer-column">
            <h3>Services</h3>

            <span>Web Development</span>
            <span>AI Solutions</span>
            <span>Digital Marketing</span>
            <span>IT Support</span>
            <span>Virtual Assistance</span>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <a href="mailto:contact@operixaus.com">
              contact@operixaus.com
            </a>

            <span>United States</span>

            <NavLink to="/contact">
              Start a Project
            </NavLink>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} OPERIXA.
            All rights reserved.
          </p>

          <div className="footer-legal">
            <NavLink to="/privacy">
              Privacy Policy
            </NavLink>

            <NavLink to="/terms">
              Terms of Service
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
