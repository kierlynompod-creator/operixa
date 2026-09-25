import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <span className="hero-badge">
            Trusted Digital Solutions
          </span>

          <h1>
            Building Smarter Digital Solutions
            <span> for Modern Businesses</span>
          </h1>

          <p className="hero-description">
            OPERIXA helps businesses grow through web development,
            AI solutions, digital marketing, IT support, and virtual
            assistance — all built around practical business needs.
          </p>

          <div className="hero-actions">

            <NavLink
              to="/free-audit"
              className="btn hero-primary-btn"
            >
              Get a Free Audit
            </NavLink>

            <NavLink
              to="/services"
              className="btn-outline hero-secondary-btn"
            >
              Explore Services
            </NavLink>

          </div>

          {/* FREE AUDIT TRUST SIGNALS */}

          <div className="hero-audit-trust">

            <span>
              <strong>✓</strong>
              100% Free
            </span>

            <span>
              <strong>✓</strong>
              Human Reviewed
            </span>

            <span>
              <strong>✓</strong>
              No Obligation
            </span>

          </div>

          {/* BUSINESS HIGHLIGHTS */}

          <div className="hero-stats">

            <div className="hero-stat">
              <span className="hero-stat-number">
                Fast
              </span>

              <span className="hero-stat-label">
                Project Delivery
              </span>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-number">
                US-Based
              </span>

              <span className="hero-stat-label">
                Company
              </span>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-number">
                Reliable
              </span>

              <span className="hero-stat-label">
                Responsive Support
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;