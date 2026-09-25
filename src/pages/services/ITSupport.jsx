import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

function ITSupport() {
  return (
    <>
      <SEO
        title="IT Support Services"
        description="OPERIXA provides reliable IT support, troubleshooting, cloud support, cybersecurity guidance, and technology consulting for modern businesses."
        path="/services/it-support"
      />

      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="container">
            <p className="section-label">IT SUPPORT</p>

            <h1>
              Reliable Technology Support
              <br />
              That Keeps Business Moving
            </h1>

            <p className="service-detail-intro">
              OPERIXA helps businesses troubleshoot technical issues,
              improve reliability, strengthen day-to-day operations, and
              make smarter decisions about the technology they depend on.
            </p>

            <div className="service-detail-actions">
              <Link to="/contact" className="btn btn-primary">
                Get IT Support
              </Link>

              <a href="#it-services" className="btn btn-secondary">
                Explore IT Solutions
              </a>
            </div>
          </div>
        </section>

        <section
          id="it-services"
          className="service-detail-section"
        >
          <div className="container">
            <div className="service-section-heading">
              <p className="section-label">
                HOW WE HELP
              </p>

              <h2>
                Practical IT Support Built Around Your Business
              </h2>

              <p>
                From everyday troubleshooting to longer-term technology
                planning, we help businesses keep their systems reliable,
                secure, and easier to manage.
              </p>
            </div>

            <div className="service-detail-grid">
              <article className="service-detail-card">
                <span>01</span>

                <h3>Technical Support</h3>

                <p>
                  Get help resolving common technology issues affecting
                  computers, applications, users, and day-to-day business
                  operations.
                </p>
              </article>

              <article className="service-detail-card">
                <span>02</span>

                <h3>System Troubleshooting</h3>

                <p>
                  Identify the cause of technical problems and implement
                  practical solutions that reduce disruption and improve
                  reliability.
                </p>
              </article>

              <article className="service-detail-card">
                <span>03</span>

                <h3>Cloud Support</h3>

                <p>
                  Support cloud-based tools, collaboration platforms, account
                  configuration, and technology workflows used by modern teams.
                </p>
              </article>

              <article className="service-detail-card">
                <span>04</span>

                <h3>Technology Consulting</h3>

                <p>
                  Get practical guidance when selecting software, improving
                  systems, planning upgrades, or making technology decisions
                  for your business.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-detail-cta">
          <div className="container">
            <p className="section-label">
              DEPENDABLE SUPPORT
            </p>

            <h2>
              Need Help With Your Business Technology?
            </h2>

            <p>
              Tell us what is slowing your team down or creating technical
              challenges. We’ll help you identify the right next step.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Talk With OPERIXA
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ITSupport;