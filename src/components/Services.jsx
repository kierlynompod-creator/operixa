import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites designed to strengthen your online presence and turn visitors into customers.",
      features: [
        "Business Websites",
        "Website Redesign",
        "Landing Pages",
        "Custom Development",
      ],
      path: "/services/web-development",
    },
    {
      number: "02",
      title: "AI Solutions",
      description:
        "Practical AI tools and automation designed to improve efficiency, reduce repetitive work, and support growth.",
      features: [
        "AI Chatbots",
        "Workflow Automation",
        "AI Integrations",
        "Custom AI Tools",
      ],
      path: "/services/ai-solutions",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Digital strategies designed to increase visibility, attract potential customers, and generate more leads.",
      features: [
        "Search Engine Optimization",
        "Content Strategy",
        "Social Media Strategy",
        "Lead Generation",
      ],
      path: "/services/digital-marketing",
    },
    {
      number: "04",
      title: "IT Support",
      description:
        "Reliable technical support and technology solutions that help keep your business running smoothly.",
      features: [
        "Technical Support",
        "System Troubleshooting",
        "Cloud Support",
        "Technology Consulting",
      ],
      path: "/services/it-support",
    },
    {
      number: "05",
      title: "Virtual Assistance",
      description:
        "Flexible administrative and operational support that helps your business stay organized and productive.",
      features: [
        "Administrative Support",
        "Customer Support",
        "Scheduling & Coordination",
        "Operations Support",
      ],
      path: "/services/virtual-assistance",
    },
  ];

  return (
    <>
      <SEO
        title="Services"
        description="Explore OPERIXA services including web development, AI solutions, digital marketing, IT support, and virtual assistance."
        path="/services"
      />

      <main className="services-page">

        {/* HERO */}
        <section className="services-page-hero">
          <div className="container services-page-header">

            <p className="section-label">
              OUR SERVICES
            </p>

            <h1>
              Digital Solutions Built Around Your Business
            </h1>

            <p>
              From web development and AI automation to marketing,
              IT support, and virtual assistance, OPERIXA provides
              practical solutions designed to help businesses work
              smarter and grow with confidence.
            </p>

          </div>
        </section>


        {/* SERVICES */}
        <section className="services-page-content">
          <div className="container">

            <div className="services-page-grid">
              {services.map((service) => (
                <Link
                  to={service.path}
                  className="services-page-card services-page-card-link"
                  key={service.number}
                >

                  <div className="services-page-card-top">
                    <span className="services-page-number">
                      {service.number}
                    </span>

                    <span className="services-page-line"></span>
                  </div>

                  <h2>{service.title}</h2>

                  <p>
                    {service.description}
                  </p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="services-page-learn">
                    Explore Service
                    <span aria-hidden="true"> →</span>
                  </span>

                </Link>
              ))}
            </div>

          </div>
        </section>


        {/* CTA */}
        <section className="services-page-cta">
          <div className="container">

            <div className="services-cta-box">

              <p className="section-label">
                NOT SURE WHERE TO START?
              </p>

              <h2>
                Find Opportunities to Improve Your Business
              </h2>

              <p>
                Request a free website and digital growth audit and
                we'll help identify practical opportunities related
                to your website, visibility, automation, and digital
                operations.
              </p>

              <Link
                to="/free-audit"
                className="btn btn-primary"
              >
                Get a Free Audit
              </Link>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default ServicesPage;