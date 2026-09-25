import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO.jsx";

function ContactPage() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      // Send inquiry to OPERIXA
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      // Send confirmation email to customer
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus(
        "Thank you! Your message has been sent. Please check your email for confirmation."
      );

      form.current.reset();
    } catch (error) {
      console.error("EmailJS ERROR:", error);

      setStatus(
        `Email failed: ${
          error?.text ||
          error?.message ||
          "Please try again or email us directly."
        }`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contact OPERIXA to discuss web development, AI solutions, digital marketing, IT support, virtual assistance, or your next technology project."
        path="/contact"
      />

      <main className="contact-page">
        <section className="contact-page-hero">
          <div className="container contact-page-header">
            <span className="section-tag">
              Contact OPERIXA
            </span>

            <h1>
              Let&apos;s Talk About Your Next Project
            </h1>

            <p>
              Tell us what you&apos;re working on, what challenges you&apos;re
              facing, and what kind of support you need. We&apos;d be happy
              to discuss how OPERIXA can help.
            </p>
          </div>
        </section>

        <section className="contact-page-content">
          <div className="container contact-page-grid">
            <div className="contact-page-info">
              <div className="contact-page-card">
                <span>Email</span>

                <h3>
                  contact@operixaus.com
                </h3>

                <p>
                  Send us a message anytime and we&apos;ll get back
                  to you as soon as possible.
                </p>
              </div>

              <div className="contact-page-card">
                <span>Location</span>

                <h3>
                  United States
                </h3>

                <p>
                  US-based business support with flexible service
                  for clients in different locations.
                </p>
              </div>

              <div className="contact-page-card">
                <span>Business Hours</span>

                <h3>
                  Monday – Friday
                </h3>

                <p>
                  9:00 AM – 6:00 PM Eastern Time
                </p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-page-form"
            >
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name (optional)"
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="AI Solutions">
                    AI Solutions
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="IT Support">
                    IT Support
                  </option>

                  <option value="Virtual Assistance">
                    Virtual Assistance
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell us about your project, goals, or challenges..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="contact-form-status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;