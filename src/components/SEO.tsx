import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/useLanguage";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  image = "/images/boriss-portfolio-og.png",
  url = "https://boriss.dev",
  type = "website",
}: SEOProps) {
  const { t, language } = useLanguage();

  const siteTitle = title ? `${title} | Boriss` : "Boriss Portfolio";
  const siteDescription = description || t("seo.description");

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="author" content="Boriss" />
      <link rel="canonical" href={url} />
      <meta name="language" content={language} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Boriss Portfolio" />
      <meta
        property="og:locale"
        content={language === "en" ? "en_US" : "fi_FI"}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@boriss_dev" />
      <meta name="twitter:creator" content="@boriss_dev" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* Keywords */}
      <meta name="keywords" content={t("seo.keywords")} />
    </Helmet>
  );
}
