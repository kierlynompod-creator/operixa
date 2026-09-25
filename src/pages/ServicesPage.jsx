import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built for performance, scalability, and long-term growth.",
      features: [
        "Business websites",
        "Landing pages",
        "Custom web applications",
        "Responsive design",
        "Website maintenance",
      ],
      path: "/services/web-development",
    },
    {
      number: "02",
      title: "AI Solutions",
      description:
        "Practical AI tools and automation designed to reduce repetitive work and improve business efficiency.",
      features: [
        "AI chatbots",
        "Workflow automation",
        "Business process automation",
        "AI integrations",
        "Custom AI tools",
      ],
      path: "/services/ai-solutions",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Digital strategies designed to improve visibility, strengthen your brand, and support sustainable growth.",
      features: [
        "SEO",
        "Social media strategy",
        "Content strategy",
        "Lead generation",
        "Digital campaigns",
      ],
      path: "/services/digital-marketing",
    },
    {
      number: "04",
      title: "IT Support",
      description:
        "Reliable technical support and technology guidance to help keep your business running smoothly.",
      features: [
        "Technical support",
        "System troubleshooting",
        "Cloud support",
        "Technology consulting",
        "Business IT guidance",
      ],
      path: "/services/it-support",
    },
    {
      number: "05",
      title: "Virtual Assistance",
      description:
        "Flexible administrative and operational support designed to help your team stay organized and productive.",
      features: [
        "Administrative support",
        "Customer support",
        "Scheduling",
        "Data entry",
        "Operations support",
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
              Explore our services and select the solution that best fits
              your business needs.
            </p>

          </div>
        </section>

        {/* CLICKABLE SERVICE CARDS */}
        <section className="services-page-content">
          <div className="container">

            <div className="services-page-grid">

              {services.map((service) => (
                <Link
                  key={service.number}
                  to={service.path}
                  className="services-page-card services-page-card-link"
                >

                  <div className="services-page-card-top">
                    <span className="services-page-number">
                      {service.number}
                    </span>

                    <span className="services-page-line"></span>
                  </div>

                  <h2>
                    {service.title}
                  </h2>

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
                    Learn More
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
                Let&apos;s Find the Right Solution for Your Business
              </h2>

              <p>
                Request a free digital audit and we&apos;ll help identify
                opportunities that could make the biggest impact.
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