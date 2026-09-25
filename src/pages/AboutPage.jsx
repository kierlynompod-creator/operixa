import { NavLink } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const values = [
  "Integrity",
  "Innovation",
  "Customer Success",
  "Excellence",
  "Transparency",
  "Continuous Improvement",
];

const reasons = [
  "Experienced industry professionals",
  "US-based company",
  "Fast project delivery",
  "Affordable pricing",
  "Modern technologies",
  "Reliable customer support",
];

function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about OPERIXA, a US-based technology company focused on practical digital solutions, reliable support, and long-term business growth."
        path="/about"
      />

      <main className="about-page">
        <section className="about-page-hero">
          <div className="container about-page-header">
            <span className="section-tag">
              About OPERIXA
            </span>

            <h1>
              Building Smarter Digital Solutions
            </h1>

            <p>
              OPERIXA is a US-based technology company dedicated to helping
              businesses grow through innovative digital solutions, AI,
              web development, IT support, digital marketing, and virtual
              assistance.
            </p>
          </div>
        </section>

        <section className="about-page-content">
          <div className="container">
            <div className="about-page-card">
              <span className="about-page-label">
                Who We Are
              </span>

              <h2>
                Technology With a Practical Business Focus
              </h2>

              <p>
                Our team consists of experienced professionals focused on
                delivering high-quality technology solutions that solve real
                business problems.
              </p>

              <p>
                We work with startups, small businesses, enterprises, and
                individuals to create scalable digital experiences that support
                efficiency, growth, and long-term success.
              </p>
            </div>

            <div className="mission-vision-grid">
              <article className="about-page-card">
                <span className="about-page-label">
                  Our Mission
                </span>

                <h2>
                  Helping Businesses Work Smarter
                </h2>

                <p>
                  Our mission is to empower businesses through innovative,
                  affordable, and dependable digital solutions that improve
                  productivity, operations, and customer experiences.
                </p>
              </article>

              <article className="about-page-card">
                <span className="about-page-label">
                  Our Vision
                </span>

                <h2>
                  Building Long-Term Technology Partnerships
                </h2>

                <p>
                  Our vision is to become a trusted technology partner for
                  organizations that want practical innovation, responsive
                  support, and solutions built for long-term growth.
                </p>
              </article>
            </div>

            <div className="about-page-card">
              <span className="about-page-label">
                Why Choose Us
              </span>

              <h2>
                What Sets OPERIXA Apart
              </h2>

              <div className="about-reasons-grid">
                {reasons.map((reason) => (
                  <div
                    className="about-reason"
                    key={reason}
                  >
                    <span>✓</span>
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-page-card">
              <span className="about-page-label">
                Our Values
              </span>

              <h2>
                Principles That Guide Our Work
              </h2>

              <div className="about-values-grid">
                {values.map((value) => (
                  <div
                    className="about-value"
                    key={value}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-cta">
          <div className="container about-cta-box">
            <span className="section-tag">
              Let&apos;s Work Together
            </span>

            <h2>
              Ready to Build Your Next Project?
            </h2>

            <p>
              Tell us what you&apos;re working on and discover how OPERIXA can
              help turn your ideas into practical digital solutions.
            </p>

            <NavLink
              to="/contact"
              className="btn"
            >
              Contact Us Today
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;