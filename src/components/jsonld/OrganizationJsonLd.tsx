import React from "react";

interface OrganizationJsonLdProps {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export default function OrganizationJsonLd({
  name,
  url,
  logo,
  sameAs,
}: OrganizationJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(sameAs && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
