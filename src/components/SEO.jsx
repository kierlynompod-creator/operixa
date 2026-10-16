
import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  path = "",
  image = "/preview.png",
  noIndex = false,
}) {
  const siteName = "OPERIXA";

  // Primary website domain
  const baseUrl = "https://www.operixaus.com";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : "OPERIXA | Digital Solutions & AI Services";

  // Canonical URL for each page
  const normalizedPath = path
    ? `/${path.replace(/^\/+/, "")}`
    : "/";

  const canonicalUrl = `${baseUrl}${normalizedPath}`;

  // Full social sharing image URL
  const imageUrl = image.startsWith("http")
    ? image
    : `${baseUrl}/${image.replace(/^\/+/, "")}`;

  return (
    <Helmet>
      {/* Page Title */}
      <title>{fullTitle}</title>

      {/* Meta Description */}
      {description && (
        <meta name="description" content={description} />
      )}

      {/* Search Engine Instructions */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />

      {description && (
        <meta
          property="og:description"
          content={description}
        />
      )}

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={fullTitle} />

      {description && (
        <meta
          name="twitter:description"
          content={description}
        />
      )}

      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default SEO;
