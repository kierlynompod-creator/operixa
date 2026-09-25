import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO.jsx";

function FreeAudit() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendAuditRequest = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUDIT_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus(
        "Thank you! Your free audit request has been received. We'll be in touch soon."
      );

      form.current.reset();
    } catch (error) {
      console.error("AUDIT EMAIL ERROR:", error);

      setStatus(
        "We couldn't submit your request. Please try again or contact us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Free Website & Digital Growth Audit"
        description="Request a free website and digital growth audit from OPERIXA."
        path="/free-audit"
      />

      <main className="audit-page">
        <section className="audit-hero">
          <div className="audit-grid-effect"></div>

          <div className="container audit-hero-inner">
            <span className="audit-badge">
              ✦ Free Website & Digital Growth Audit
            </span>

            <h1>
              Unlock <span>Real Growth.</span>
            </h1>

            <p className="audit-hero-copy">
              Get a free, no-obligation review of your website and digital
              presence. We&apos;ll uncover opportunities to improve visibility,
              user experience, conversions, automation, and overall performance.
            </p>

            <div className="audit-trust-grid">
              <div className="audit-trust-card">
                <div className="audit-trust-icon">◇</div>

                <div>
                  <h3>100% Free</h3>
                  <p>
                    No cost. No obligation.
                    <br />
                    Just valuable insights.
                  </p>
                </div>
              </div>

              <div className="audit-trust-card">
                <div className="audit-trust-icon">◎</div>

                <div>
                  <h3>Human Reviewed</h3>
                  <p>
                    We personally review your
                    <br />
                    information and goals.
                  </p>
                </div>
              </div>

              <div className="audit-trust-card">
                <div className="audit-trust-icon">⬡</div>

                <div>
                  <h3>Confidential & Secure</h3>
                  <p>
                    Your information is safe
                    <br />
                    and never shared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="audit-content">
          <div className="container">
            <div className="audit-shell">
              <div className="audit-left">
                <span className="audit-eyebrow">
                  WHAT YOU&apos;LL GET
                </span>

                <h2>
                  Practical Insights You
                  <br />
                  Can Actually Use
                </h2>

                <p className="audit-left-intro">
                  This is not an automated score. We&apos;ll review the
                  information you provide and identify areas where your
                  digital presence may be improved.
                </p>

                <div className="audit-benefits">
                  <article className="audit-benefit">
                    <span className="audit-benefit-number">01</span>

                    <div className="audit-benefit-symbol">▣</div>

                    <div>
                      <h3>Website Review</h3>

                      <p>
                        We&apos;ll look at structure, usability,
                        responsiveness, messaging, and conversion opportunities.
                      </p>
                    </div>
                  </article>

                  <article className="audit-benefit">
                    <span className="audit-benefit-number">02</span>

                    <div className="audit-benefit-symbol">↗</div>

                    <div>
                      <h3>Growth Opportunities</h3>

                      <p>
                        We&apos;ll identify opportunities related to visibility,
                        lead generation, digital marketing, and customer
                        journeys.
                      </p>
                    </div>
                  </article>

                  <article className="audit-benefit">
                    <span className="audit-benefit-number">03</span>

                    <div className="audit-benefit-symbol">⚙</div>

                    <div>
                      <h3>Technology & Automation</h3>

                      <p>
                        We&apos;ll look for areas where AI, automation, or
                        better workflows may save time or improve operations.
                      </p>
                    </div>
                  </article>

                  <article className="audit-benefit">
                    <span className="audit-benefit-number">04</span>

                    <div className="audit-benefit-symbol">✓</div>

                    <div>
                      <h3>Recommended Next Steps</h3>

                      <p>
                        You&apos;ll receive clear, actionable recommendations
                        based on the information available to us.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="audit-goal">
                  <div className="audit-goal-icon">★</div>

                  <p>
                    Our goal is simple: help you identify the right
                    opportunities that can bring the biggest impact to your
                    business.
                  </p>
                </div>
              </div>

              <form
                ref={form}
                onSubmit={sendAuditRequest}
                className="audit-form"
              >
                <div className="audit-form-heading">
                  <div className="audit-form-heading-icon">▤</div>

                  <div>
                    <h2>Request Your Free Audit</h2>

                    <span>Tell us about your business</span>

                    <p>
                      The more context you provide, the more useful our review
                      can be.
                    </p>
                  </div>
                </div>

                <div className="audit-form-grid">
                  <div className="audit-field">
                    <label htmlFor="name">
                      Full Name <em>*</em>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="audit-field">
                    <label htmlFor="email">
                      Email Address <em>*</em>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="audit-field">
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div className="audit-field">
                  <label htmlFor="website">Website</label>

                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourwebsite.com (optional)"
                  />
                </div>

                <div className="audit-form-grid">
                  <div className="audit-field">
                    <label htmlFor="audit_focus">
                      What would you like us to review? <em>*</em>
                    </label>

                    <select
                      id="audit_focus"
                      name="audit_focus"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an area
                      </option>

                      <option value="Website">Website</option>
                      <option value="SEO">SEO / Search Visibility</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="AI Automation">AI / Automation</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Overall Digital Presence">
                        Overall Digital Presence
                      </option>
                    </select>
                  </div>

                  <div className="audit-field">
                    <label htmlFor="business_goal">
                      Main Business Goal <em>*</em>
                    </label>

                    <input
                      id="business_goal"
                      name="business_goal"
                      type="text"
                      placeholder="e.g. generate more leads"
                      required
                    />
                  </div>
                </div>

                <div className="audit-field">
                  <label htmlFor="message">
                    Anything else we should know?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your current challenges, goals, or anything else we should consider..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="audit-submit"
                  disabled={sending}
                >
                  {sending
                    ? "Submitting..."
                    : "✦ Request My Free Audit"}
                </button>

                <p className="audit-privacy">
                  🔒 We respect your privacy. No spam. Ever.
                </p>

                {status && (
                  <p className="audit-status">
                    {status}
                  </p>
                )}
              </form>
            </div>

            <div className="audit-contact-bar">
              <div className="audit-contact-copy">
                <div className="audit-contact-icon">◉</div>

                <div>
                  <h3>Have questions before requesting?</h3>

                  <p>
                    We&apos;re here to help you make the right decision.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="audit-contact-link"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FreeAudit;