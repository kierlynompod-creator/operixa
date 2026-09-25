import { Link } from "react-router-dom";

function WebDevelopment() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="container">
          <p className="section-label">WEB DEVELOPMENT</p>

          <h1>
            Websites Built to Help
            <br />
            Your Business Grow
          </h1>

          <p className="service-detail-intro">
            OPERIXA builds modern, responsive, and performance-focused
            websites designed to help businesses strengthen their online
            presence and turn visitors into customers.
          </p>

          <div className="service-detail-actions">
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>

            <a href="#web-services" className="btn btn-secondary">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      <section id="web-services" className="service-detail-section">
        <div className="container">
          <div className="service-section-heading">
            <p className="section-label">WHAT WE BUILD</p>
            <h2>Web Solutions Designed Around Your Business</h2>
            <p>
              From a new business website to a complete redesign, we build
              digital experiences around your goals.
            </p>
          </div>

          <div className="service-detail-grid">
            <article className="service-detail-card">
              <span>01</span>
              <h3>Business Websites</h3>
              <p>
                Professional websites that clearly communicate your services,
                establish credibility, and help potential customers take
                action.
              </p>
            </article>

            <article className="service-detail-card">
              <span>02</span>
              <h3>Website Redesign</h3>
              <p>
                Modernize an outdated website with improved design,
                navigation, mobile responsiveness, and user experience.
              </p>
            </article>

            <article className="service-detail-card">
              <span>03</span>
              <h3>Landing Pages</h3>
              <p>
                Conversion-focused landing pages for campaigns, services,
                promotions, and lead generation.
              </p>
            </article>

            <article className="service-detail-card">
              <span>04</span>
              <h3>Custom Development</h3>
              <p>
                Custom functionality and web experiences developed around
                your company's specific requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <p className="section-label">LET'S BUILD SOMETHING</p>
          <h2>Ready to Improve Your Online Presence?</h2>

          <p>
            Tell us about your business and what you're looking to accomplish.
            We'll help you determine the right solution.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

export default WebDevelopment;