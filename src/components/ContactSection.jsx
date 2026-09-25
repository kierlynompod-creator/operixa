import { NavLink } from "react-router-dom";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container contact-section-grid">

        <div className="contact-section-copy">
          <span className="section-tag">
            Contact OPERIXA
          </span>

          <h2>
            Let’s Talk About What You’re Building
          </h2>

          <p>
            Tell us about your project, goals, or business challenge.
            We’ll help you identify the right next step.
          </p>

          <div className="contact-highlights">
            <div>
              <span>Email</span>
              <strong>contact@operixaus.com</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>United States</strong>
            </div>

            <div>
              <span>Support</span>
              <strong>Responsive & Reliable</strong>
            </div>
          </div>
        </div>

        <div className="contact-section-card">
          <span className="contact-section-label">
            Start a Conversation
          </span>

          <h3>
            Ready to move your project forward?
          </h3>

          <p>
            Use our contact form to tell us what you need and we’ll get back
            to you as soon as possible.
          </p>

          <NavLink to="/contact" className="btn">
            Contact Us
          </NavLink>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;