import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

function DigitalMarketing() {
  return (
    <>
      <SEO
        title="Digital Marketing Services"
        description="OPERIXA provides digital marketing solutions designed to increase visibility, attract qualified prospects, generate leads, and support sustainable business growth."
        path="/services/digital-marketing"
      />

      <main className="service-detail-page">

        {/* HERO */}
        <section className="service-detail-hero">
          <div className="container">

            <p className="section-label">
              DIGITAL MARKETING
            </p>

            <h1>
              Marketing Built to Turn
              <br />
              Attention Into Growth
            </h1>

            <p className="service-detail-intro">
              OPERIXA helps businesses strengthen their digital presence,
              reach the right audience, generate qualified leads, and build
              marketing strategies focused on long-term growth.
            </p>

            <div className="service-detail-actions">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Discuss Your Marketing
              </Link>

              <a
                href="#marketing-services"
                className="btn btn-secondary"
              >
                Explore Solutions
              </a>
            </div>

          </div>
        </section>


        {/* SERVICES */}
        <section
          id="marketing-services"
          className="service-detail-section"
        >
          <div className="container">

            <div className="service-section-heading">

              <p className="section-label">
                HOW WE HELP
              </p>

              <h2>
                Digital Strategies Designed Around Your Goals
              </h2>

              <p>
                We combine strategy, content, search visibility, and
                conversion-focused thinking to help businesses build a
                stronger digital presence.
              </p>

            </div>


            <div className="service-detail-grid">

              <article className="service-detail-card">
                <span>01</span>

                <h3>Search Engine Optimization</h3>

                <p>
                  Improve your website structure, content, and search
                  visibility so potential customers can discover your
                  business when searching for the services you provide.
                </p>
              </article>


              <article className="service-detail-card">
                <span>02</span>

                <h3>Content Strategy</h3>

                <p>
                  Create useful, targeted content designed to build
                  credibility, attract potential customers, and support
                  your long-term search strategy.
                </p>
              </article>


              <article className="service-detail-card">
                <span>03</span>

                <h3>Social Media Strategy</h3>

                <p>
                  Develop a consistent social presence that strengthens
                  your brand, communicates your expertise, and helps your
                  business connect with the right audience.
                </p>
              </article>


              <article className="service-detail-card">
                <span>04</span>

                <h3>Lead Generation</h3>

                <p>
                  Build campaigns, landing pages, and conversion paths
                  designed to turn interested visitors into qualified
                  business opportunities.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* CTA */}
        <section className="service-detail-cta">
          <div className="container">

            <p className="section-label">
              GROW YOUR DIGITAL PRESENCE
            </p>

            <h2>
              Ready to Attract More Potential Customers?
            </h2>

            <p>
              Tell us about your business, audience, and growth goals.
              We'll help you identify digital marketing opportunities
              that make sense for your organization.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Talk With OPERIXA
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}

export default DigitalMarketing;