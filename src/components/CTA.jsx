import { NavLink } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <span className="section-tag">
              Ready to Get Started?
            </span>

            <h2>
              Let’s Build Something That Moves Your Business Forward
            </h2>

            <p>
              Whether you need a website, AI automation, digital strategy,
              IT support, or virtual assistance, OPERIXA is ready to help.
            </p>

            <div className="cta-actions">
              <NavLink to="/contact" className="btn">
                Start a Project
              </NavLink>

              <NavLink to="/services" className="btn-outline">
                Explore Services
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;