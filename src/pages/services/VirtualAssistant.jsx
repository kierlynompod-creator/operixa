import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

function VirtualAssistant() {
  return (
    <>
      <SEO
        title="Virtual Assistant Services"
        description="OPERIXA provides flexible virtual assistant services including administrative support, customer service, scheduling, data entry, and business operations support."
        path="/services/virtual-assistance"
      />

      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="container">
            <p className="section-label">
              VIRTUAL ASSISTANCE
            </p>

            <h1>
              Flexible Support That Helps
              <br />
              Your Business Stay Productive
            </h1>

            <p className="service-detail-intro">
              OPERIXA provides dependable virtual assistance for businesses
              that need help managing daily tasks, supporting customers,
              staying organized, and keeping operations moving.
            </p>

            <div className="service-detail-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Support Needs
              </Link>

              <a
                href="#va-services"
                className="btn btn-secondary"
              >
                Explore VA Services
              </a>
            </div>
          </div>
        </section>

        <section
          id="va-services"
          className="service-detail-section"
        >
          <div className="container">
            <div className="service-section-heading">
              <p className="section-label">
                HOW WE SUPPORT YOU
              </p>

              <h2>
                Virtual Assistance Built Around Your Workflow
              </h2>

              <p>
                Flexible support can help reduce administrative workload,
                improve responsiveness, and give your team more time to
                focus on higher-value work.
              </p>
            </div>

            <div className="service-detail-grid">
              <article className="service-detail-card">
                <span>01</span>

                <h3>Administrative Support</h3>

                <p>
                  Support routine administrative work, document organization,
                  inbox management, research, and other recurring business
                  tasks.
                </p>
              </article>

              <article className="service-detail-card">
                <span>02</span>

                <h3>Customer Support</h3>

                <p>
                  Help manage customer inquiries, follow-ups, communication,
                  and everyday support tasks that keep clients informed.
                </p>
              </article>

              <article className="service-detail-card">
                <span>03</span>

                <h3>Scheduling & Coordination</h3>

                <p>
                  Manage calendars, appointments, reminders, meetings, and
                  coordination so your business stays organized.
                </p>
              </article>

              <article className="service-detail-card">
                <span>04</span>

                <h3>Operations Support</h3>

                <p>
                  Assist with data entry, reporting, research, process
                  documentation, and other operational tasks that help teams
                  work more efficiently.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-detail-cta">
          <div className="container">
            <p className="section-label">
              GET MORE TIME BACK
            </p>

            <h2>
              Ready to Take Repetitive Work Off Your Plate?
            </h2>

            <p>
              Tell us which tasks are taking too much of your time.
              We’ll help identify where virtual support can make the
              biggest difference.
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

export default VirtualAssistant;