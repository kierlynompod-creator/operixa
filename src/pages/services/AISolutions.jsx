import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

function AISolutions() {
  return (
    <>
      <SEO
        title="AI Solutions"
        description="OPERIXA provides practical AI solutions, automation, AI integrations, chatbots, and workflow optimization for modern businesses."
        path="/services/ai-solutions"
      />

      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="container">
            <p className="section-label">AI SOLUTIONS</p>

            <h1>
              Practical AI That Helps
              <br />
              Your Business Work Smarter
            </h1>

            <p className="service-detail-intro">
              OPERIXA helps businesses use AI to automate repetitive work,
              improve customer experiences, streamline operations, and
              uncover new opportunities for growth.
            </p>

            <div className="service-detail-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss an AI Project
              </Link>

              <a href="#ai-services" className="btn btn-secondary">
                Explore AI Solutions
              </a>
            </div>
          </div>
        </section>

        <section
          id="ai-services"
          className="service-detail-section"
        >
          <div className="container">
            <div className="service-section-heading">
              <p className="section-label">
                WHAT WE BUILD
              </p>

              <h2>
                AI Solutions Designed Around Real Business Needs
              </h2>

              <p>
                We focus on practical implementations that can save time,
                improve consistency, support teams, and create measurable
                operational value.
              </p>
            </div>

            <div className="service-detail-grid">
              <article className="service-detail-card">
                <span>01</span>

                <h3>AI Chatbots</h3>

                <p>
                  Intelligent customer-facing or internal assistants designed
                  to answer questions, support users, qualify leads, and reduce
                  repetitive support work.
                </p>
              </article>

              <article className="service-detail-card">
                <span>02</span>

                <h3>Workflow Automation</h3>

                <p>
                  Automate repetitive business processes and connect tools so
                  information moves between systems with less manual effort.
                </p>
              </article>

              <article className="service-detail-card">
                <span>03</span>

                <h3>AI Integrations</h3>

                <p>
                  Add AI capabilities to websites, applications, internal
                  systems, and existing workflows without rebuilding your
                  entire technology stack.
                </p>
              </article>

              <article className="service-detail-card">
                <span>04</span>

                <h3>Custom AI Tools</h3>

                <p>
                  Build practical AI-powered tools around your organization's
                  specific processes, data, objectives, and customer needs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-detail-cta">
          <div className="container">
            <p className="section-label">
              EXPLORE THE POSSIBILITIES
            </p>

            <h2>
              Not Sure Where AI Fits Into Your Business?
            </h2>

            <p>
              Tell us how your team works today. We can help identify areas
              where automation or AI may improve efficiency and reduce
              repetitive work.
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

export default AISolutions;