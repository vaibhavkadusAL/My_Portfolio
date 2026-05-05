import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteTitle = 'Vaibhav Kadus | Full-Stack Java Developer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || 'Portfolio of Vaibhav Kadus, a Full-Stack Java Developer specializing in Spring Boot, React, and modern web applications.';
  const metaKeywords = keywords || 'Vaibhav Kadus, Java Developer, Full-Stack Developer, Spring Boot, React, Web Development, Portfolio, Software Engineer';
  const siteUrl = url || 'https://vaibhavkadus.com'; // Change to actual production URL

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Vaibhav Kadus" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}/favicon.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />
    </Helmet>
  );
};

export default SEO;
