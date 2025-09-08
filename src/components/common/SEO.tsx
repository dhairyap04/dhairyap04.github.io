import React from 'react';
import { Helmet } from 'react-helmet-async';
import { personalInfo } from '../../data/portfolio';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = `${personalInfo.name} - ${personalInfo.title}`,
  description = personalInfo.bio,
  keywords = "software developer, react, typescript, javascript, web development, portfolio, intern, engineering",
  image = "/api/placeholder/1200/630",
  url = "https://dhairyap04.github.io",
  type = "website"
}) => {
  const fullTitle = title.includes(personalInfo.name) ? title : `${title} | ${personalInfo.name}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={personalInfo.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={`${personalInfo.name} Portfolio`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#0a0a23" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": personalInfo.name,
          "jobTitle": personalInfo.title,
          "description": personalInfo.bio,
          "url": url,
          "image": image,
          "sameAs": [
            personalInfo.github,
            personalInfo.linkedin
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": personalInfo.location
          },
          "email": personalInfo.email,
          "knowsAbout": [
            "Software Development",
            "Web Development",
            "React",
            "TypeScript",
            "JavaScript",
            "Frontend Development",
            "Backend Development"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
