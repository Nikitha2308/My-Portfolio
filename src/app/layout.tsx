import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikitha B — Jr. Software Developer",
  description:
    "Jr. Software Developer specializing in React Native, React JS, Nest.js & MongoDB. Gold Medalist with 1+ year industry experience building production-grade mobile and web applications.",
  keywords: [
    "Nikitha B",
    "Junior Software Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "React JS",
    "Nest.js",
    "MongoDB",
    "Angular",
    "TypeScript",
    "Healthcare App",
  ],
  authors: [{ name: "Nikitha B" }],
  robots: "index, follow",
  metadataBase: new URL("https://nikitha.online"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://nikitha.online/",
    title: "Nikitha B — Jr. Software Developer | Mobile App Specialist",
    description:
      "Jr. Software Developer specializing in React Native, React JS, Nest.js & MongoDB. Gold Medalist, production app deployed in healthcare.",
    images: [
      {
        url: "https://nikitha.online/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Nikitha B — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikitha B — Jr. Software Developer | Mobile App Specialist",
    description:
      "React Native & Full Stack Developer. Gold Medalist. Healthcare app in production.",
    images: ["https://nikitha.online/og-image.png"],
    creator: "@nikithab_dev",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
    "theme-color": "#0d0d1a",
    "color-scheme": "dark light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Nikitha B",
    "application-name": "Nikitha B Portfolio",
    "msapplication-TileColor": "#0d0d1a",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikitha B",
  jobTitle: "Junior Software Developer",
  description:
    "Jr. Software Developer specializing in React Native, React JS, Nest.js and MongoDB. Gold Medalist with 9.6 CGPA.",
  email: "nikithab2003@gmail.com",
  url: "https://nikitha.online/",
  sameAs: [
    "https://github.com/Nikitha2308",
    "https://www.linkedin.com/in/nikitha-nikitha",
  ],
  knowsAbout: [
    "React Native",
    "React.js",
    "Angular",
    "Nest.js",
    "MongoDB",
    "TypeScript",
    "Node.js",
    "Flutter",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kamaraj College of Engineering & Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZzEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWVhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y1NTc2YyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgZmlsbD0idXJsKCNnMSkiLz4KICA8dGV4dCB4PSI1MCIgeT0iNjIiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iNDIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Jmx0O04mZ3Q7PC90ZXh0Pgo8L3N2Zz4="
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
