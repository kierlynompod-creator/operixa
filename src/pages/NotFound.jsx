import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        path="/404"
        noIndex
      />

      <main className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">
            404
          </span>

          <p className="not-found-label">
            PAGE NOT FOUND
          </p>

          <h1>
            Looks Like You&apos;re Off Course.
          </h1>

          <p className="not-found-description">
            The page you&apos;re looking for doesn&apos;t exist or may
            have been moved. Let&apos;s get you back to OPERIXA.
          </p>

          <Link
            to="/"
            className="not-found-button"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;