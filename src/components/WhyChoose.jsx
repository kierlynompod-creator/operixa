const reasons = [
  {
    number: "01",
    title: "US-Based Company",
    description:
      "Professional communication, dependable service, and support built around real business needs.",
  },
  {
    number: "02",
    title: "Experienced Professionals",
    description:
      "Our solutions are shaped by practical industry experience and a strong understanding of modern business technology.",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description:
      "We focus on efficient execution while maintaining quality, usability, and long-term maintainability.",
  },
  {
    number: "04",
    title: "Affordable Solutions",
    description:
      "We build practical digital solutions designed to deliver strong value without unnecessary complexity.",
  },
  {
    number: "05",
    title: "Modern Technology",
    description:
      "We use current tools and proven technologies to create scalable, secure, and future-ready solutions.",
  },
  {
    number: "06",
    title: "Reliable Support",
    description:
      "Our relationship continues after launch with responsive support, updates, and ongoing guidance.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Why OPERIXA
          </span>

          <h2 className="section-title">
            A Technology Partner Built Around Trust
          </h2>

          <p className="section-description">
            We combine practical experience, modern technology, reliable
            communication, and flexible support to help businesses move
            forward with confidence.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article
              className="why-card"
              key={reason.number}
            >
              <div className="why-card-top">
                <span className="why-number">
                  {reason.number}
                </span>

                <span className="why-line"></span>
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;