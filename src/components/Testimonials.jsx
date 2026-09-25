const testimonials = [
  {
    quote:
      "OPERIXA helped us simplify our digital workflow and gave us a much clearer path forward. Communication was smooth from start to finish.",
    name: "Client Name",
    role: "Business Owner",
  },
  {
    quote:
      "The team was responsive, practical, and focused on what actually mattered for our business. The overall experience was excellent.",
    name: "Client Name",
    role: "Startup Founder",
  },
  {
    quote:
      "We appreciated the clear communication, fast turnaround, and attention to detail throughout the project.",
    name: "Client Name",
    role: "Operations Manager",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Testimonials
          </span>

          <h2 className="section-title">
            Built on Clear Communication and Dependable Delivery
          </h2>

          <p className="section-description">
            We focus on creating long-term value through practical solutions,
            responsive communication, and reliable execution.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={index}
            >
              <span className="testimonial-quote-mark">
                “
              </span>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-client">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>
                    {testimonial.name}
                  </h3>

                  <span>
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;