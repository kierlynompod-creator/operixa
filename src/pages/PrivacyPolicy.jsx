
import SEO from "../components/SEO.jsx";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how OPERIXA collects, uses, and protects information submitted through our website."
        path="/privacy"
      />

      <main className="legal-page">
        <div className="container legal-container">
          <span className="section-tag">LEGAL INFORMATION</span>

          <h1>Privacy Policy</h1>
          <p className="legal-updated">
            Last updated: October 15, 2026
          </p>

          <p>
            OPERIXA ("we", "us", or "our") respects your
            privacy. This Privacy Policy explains how we
            collect, use, and handle personal information
            when you visit our website or contact us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you contact us or request a free audit,
            we may collect:
          </p>
          <ul>
            <li>Your name and email address</li>
            <li>Company name and website address</li>
            <li>Services you are interested in</li>
            <li>Business goals and project information</li>
            <li>Messages and other information you submit</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use submitted information to:</p>
          <ul>
            <li>Respond to inquiries and requests</li>
            <li>Provide free audit reviews</li>
            <li>Discuss potential projects and services</li>
            <li>Communicate about requested services</li>
            <li>Maintain and improve our website</li>
          </ul>

          <h2>3. Email Communications</h2>
          <p>
            We use EmailJS to process website contact
            forms and audit requests. You may receive
            confirmation emails after submitting a form.
            Submitting a request does not automatically
            subscribe you to marketing emails.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We use third-party service providers,
            including Vercel for website hosting and
            EmailJS for form-related email delivery.
            These providers may process information
            necessary to provide their services.
          </p>

          <h2>5. Cookies and Analytics</h2>
          <p>
            Our website may use cookies or similar
            technologies necessary for functionality.
            If we introduce analytics or additional
            tracking technologies, we will update this
            policy and provide any notices or choices
            required by applicable law.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain information for as long as reasonably
            necessary to respond to requests, provide
            services, maintain business records, and
            comply with applicable legal obligations.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable measures to protect
            information submitted to us. However,
            no internet-based transmission or storage
            system can be guaranteed completely secure.
          </p>

          <h2>8. Your Privacy Choices</h2>
          <p>
            You may contact us to request access to,
            correction of, or deletion of your personal
            information. We will review requests in
            accordance with applicable law.
          </p>

          <h2>9. International Visitors</h2>
          <p>
            If you access our website from outside the
            United States, your information may be
            processed in countries where we or our
            service providers operate, subject to
            applicable legal requirements.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect
            changes in our services, practices, or legal
            obligations. Updates will be posted here
            with a revised date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For questions about this Privacy Policy
            or your personal information, contact:
          </p>
          <p>
            <strong>OPERIXA</strong>
            <br />
            Email:{" "}
            <a href="mailto:contact@operixaus.com">
              contact@operixaus.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
