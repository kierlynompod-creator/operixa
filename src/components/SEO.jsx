import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  path = "",
  image = "/preview.png",
  noIndex = false,
}) {
  const siteName = "OPERIXA";
  const baseUrl = "https://operixaus.com";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : "OPERIXA | Digital Solutions & AI Services";

  const canonicalUrl = `${baseUrl}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${baseUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default SEO;