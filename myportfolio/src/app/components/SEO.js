import Head from "next/head";

export default function SEO({
  title = "Parth Sharma | Frontend Developer",
  description = "Portfolio of Parth Sharma, a frontend developer skilled in React, Next.js, and UI design.",
  keywords = "Parth Sharma, Frontend Developer, React, Next.js, Portfolio",
  url = "https://yourdomain.com",
  image = "https://yourdomain.com/og-image.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Parth Sharma" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
