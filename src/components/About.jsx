import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="about-section">
      <div className="container about-grid">

        <div className="about-visual">
          <div className="about-visual-inner">
            <span className="about-kicker">
              OPERIXA
            </span>

            <h3>
              Technology built around real business needs.
            </h3>

            <p>
              Practical solutions. Reliable support.
              Long-term partnerships.
            </p>

            <div className="about-visual-stats">
              <div>
                <strong>US-Based</strong>
                <span>Company</span>
              </div>

              <div>
                <strong>Flexible</strong>
                <span>Service Model</span>
              </div>

              <div>
                <strong>Modern</strong>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">
            About OPERIXA
          </span>

          <h2 className="section-title">
            A Smarter Technology Partner for Growing Businesses
          </h2>

          <p>
            OPERIXA is a US-based technology company focused on helping
            businesses improve operations, build stronger digital
            experiences, and adopt modern technology with confidence.
          </p>

          <p>
            We work with startups, small businesses, enterprises, and
            individuals who need dependable digital solutions without
            unnecessary complexity.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span className="about-point-label">01</span>

              <div>
                <strong>Experienced</strong>
                <span>Industry professionals</span>
              </div>
            </div>

            <div className="about-point">
              <span className="about-point-label">02</span>

              <div>
                <strong>Reliable</strong>
                <span>Responsive communication</span>
              </div>
            </div>

            <div className="about-point">
              <span className="about-point-label">03</span>

              <div>
                <strong>Practical</strong>
                <span>Solutions focused on results</span>
              </div>
            </div>

            <div className="about-point">
              <span className="about-point-label">04</span>

              <div>
                <strong>Flexible</strong>
                <span>Support for businesses of any size</span>
              </div>
            </div>
          </div>

          <NavLink
            to="/about"
            className="btn about-button"
          >
            Learn More About Us
          </NavLink>
        </div>

      </div>
    </section>
  );
}

export default About;