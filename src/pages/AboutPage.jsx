
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const values = [
  {
    title: "Integrity",
    description: "We believe in honesty, accountability, and building trust.",
  },
  {
    title: "Innovation",
    description: "We embrace practical technologies that create real value.",
  },
  {
    title: "Customer Success",
    description: "Our clients' goals guide the solutions we deliver.",
  },
  {
    title: "Excellence",
    description: "We are committed to quality in every project.",
  },
  {
    title: "Transparency",
    description: "Clear communication is central to how we work.",
  },
  {
    title: "Continuous Improvement",
    description: "We believe there is always a better way forward.",
  },
];

const reasons = [
  "Experienced industry professionals",
  "US-based company",
  "Efficient project delivery",
  "Affordable and flexible solutions",
  "Modern technology and AI capabilities",
  "Responsive customer support",
];

const founders = [
  {
    name: "Roger Coon",
    role: "CEO & Co-Founder",
    initials: "RC",
    photo: null,
  },
  {
    name: "Kierlyn Ompod",
    role: "COO & Co-Founder",
    initials: "KO",
    photo: null,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by learning about your business, challenges, and goals.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We recommend practical solutions aligned with your priorities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We turn the strategy into action through thoughtful delivery.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We remain focused on collaboration, improvement, and growth.",
  },
];

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Meet OPERIXA and its founders, Roger Coon and Kierlyn Ompod. Discover our mission, values, and approach to digital business solutions."
        path="/about"
      />

      <main className="about-page">

        {/* HERO */}
        <section className="about-page-hero">
          <div className="container about-page-header">
            <span className="section-tag">
              GET TO KNOW OPERIXA
            </span>

            <h1>
              Building Smarter Solutions.
              <br />
              <span className="about-gradient-text">
                Creating Better Opportunities.
              </span>
            </h1>

            <p>
              OPERIXA is a US-based digital solutions company
              helping businesses simplify operations, embrace
              technology, and unlock new opportunities for growth.
            </p>

            <div className="about-hero-actions">
              <NavLink to="/services" className="btn">
                Explore Our Services
              </NavLink>

              <NavLink
                to="/contact"
                className="about-outline-btn"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="about-page-content">
          <div className="container">

            <div className="about-page-card about-story-card">
              <div className="about-story-content">
                <span className="about-page-label">
                  OUR STORY
                </span>

                <h2>
                  Technology Should Make
                  Business Easier.
                </h2>

                <p>
                  OPERIXA was founded with a simple belief:
                  businesses deserve access to dependable,
                  practical, and affordable technology solutions.
                </p>

                <p>
                  From websites and AI solutions to digital
                  marketing, IT support, and virtual assistance,
                  we bring together essential services that
                  help organizations work smarter.
                </p>

                <p>
                  Whether you're building a startup, running
                  a growing business, or improving established
                  operations, our goal is to make technology
                  an advantage rather than an obstacle.
                </p>
              </div>

              <div className="about-story-visual">
                <div className="about-story-symbol">
                  O
                </div>
                <span>OPERIXA</span>
                <p>
                  Digital Solutions.
                  <br />
                  Real Business Impact.
                </p>
              </div>
            </div>

            {/* MISSION AND VISION */}
            <div className="mission-vision-grid">
              <article className="about-page-card">
                <span className="about-page-label">
                  OUR MISSION
                </span>

                <h2>
                  Empowering Businesses
                  Through Technology
                </h2>

                <p>
                  To help businesses succeed through
                  accessible, innovative, and dependable
                  digital solutions that strengthen
                  operations, productivity, and growth.
                </p>
              </article>

              <article className="about-page-card">
                <span className="about-page-label">
                  OUR VISION
                </span>

                <h2>
                  Building Lasting
                  Digital Partnerships
                </h2>

                <p>
                  To become a trusted digital partner
                  for businesses seeking smarter
                  technology, meaningful innovation,
                  and sustainable long-term progress.
                </p>
              </article>
            </div>

            {/* LEADERSHIP */}
            <section className="about-leadership">
              <div className="about-section-heading">
                <span className="about-page-label">
                  OUR LEADERSHIP
                </span>

                <h2>
                  Meet the People Behind OPERIXA
                </h2>

                <p>
                  OPERIXA is led by two co-founders
                  working toward a shared vision:
                  helping businesses grow through
                  practical digital solutions.
                </p>
              </div>

              <div className="about-founders-grid">
                {founders.map((founder) => (
                  <article
                    className="about-founder-card"
                    key={founder.name}
                  >
                    <div className="about-founder-photo">
                      {founder.photo ? (
                        <img
                          src={founder.photo}
                          alt={founder.name}
                          loading="lazy"
                        />
                      ) : (
                        <div className="about-photo-placeholder">
                          <span className="about-founder-initials">
                            {founder.initials}
                          </span>
                          <small>
                            Founder Photo Coming Soon
                          </small>
                        </div>
                      )}
                    </div>

                    <div className="about-founder-info">
                      <span className="about-founder-label">
                        OPERIXA LEADERSHIP
                      </span>

                      <h3>{founder.name}</h3>

                      <p className="about-founder-role">
                        {founder.role}
                      </p>

                      <div className="about-founder-line" />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <div className="about-page-card">
              <span className="about-page-label">
                WHY CHOOSE OPERIXA
              </span>

              <h2>
                Built Around Your Business Goals
              </h2>

              <p>
                We focus on delivering practical
                solutions with clear communication
                and a commitment to customer success.
              </p>

              <div className="about-reasons-grid">
                {reasons.map((reason) => (
                  <div
                    className="about-reason"
                    key={reason}
                  >
                    <span aria-hidden="true">
                      ✓
                    </span>
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            {/* OUR APPROACH */}
            <section className="about-approach">
              <div className="about-section-heading">
                <span className="about-page-label">
                  HOW WE WORK
                </span>

                <h2>
                  A Clear Path From Idea to Execution
                </h2>

                <p>
                  We believe successful projects start
                  with understanding your goals and
                  building the right solution around them.
                </p>
              </div>

              <div className="about-approach-grid">
                {approach.map((step) => (
                  <article
                    className="about-approach-card"
                    key={step.number}
                  >
                    <span className="about-step-number">
                      {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* VALUES */}
            <section className="about-values-section">
              <div className="about-section-heading">
                <span className="about-page-label">
                  OUR CORE VALUES
                </span>

                <h2>
                  Principles That Guide Our Work
                </h2>

                <p>
                  Our values shape the way we approach
                  projects, communicate, and build
                  relationships with clients.
                </p>
              </div>

              <div className="about-values-grid">
                {values.map((value) => (
                  <article
                    className="about-value"
                    key={value.title}
                  >
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="about-page-cta">
          <div className="container about-cta-box">
            <span className="section-tag">
              LET'S BUILD SOMETHING BETTER
            </span>

            <h2>
              Your Next Big Step Starts Here.
            </h2>

            <p>
              Have an idea, a challenge, or a business
              goal? Let's explore how OPERIXA can help
              you move forward.
            </p>

            <div className="about-cta-actions">
              <NavLink
                to="/contact"
                className="btn"
              >
                Let's Talk
              </NavLink>

              <NavLink
                to="/free-audit"
                className="about-outline-btn"
              >
                Get a Free Audit
              </NavLink>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;
