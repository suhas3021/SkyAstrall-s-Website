import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  name?: string;
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  name = "SkyAstrall",
  image = "/og-image.png",
  keywords,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://skyastrall.com";
  const fullUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteUrl}${canonical}`
    : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={name} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@SkyAstrall" />{" "}
      {/* Assuming handle */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
