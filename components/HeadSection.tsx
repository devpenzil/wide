import React from "react";
import Head from "next/head";
type htype = {
  page: string;
};
function HeadSection({ page }: htype) {
  return (
    <div>
      <Head>
        <title> {page} | Wide Interiors</title>
        <meta name="title" content="Wide Interiors" />
        <meta
          name="description"
          content="Best Interior Design firm in the city"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Wide Interiors" />
        <meta
          property="og:description"
          content="Best Interior Design firm in the city"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Wide Interiors" />
        <meta
          property="twitter:description"
          content="Best Interior Design firm in the city"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
    </div>
  );
}

export default HeadSection;
