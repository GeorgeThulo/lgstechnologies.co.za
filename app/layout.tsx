import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lgstechnologies.co.za"),
  title: "LGS Technologies South Africa – Software & Hosting Solutions",
  description:
    "Legacy General Solutions (LGS Technologies) provides secure hosting, software development, UI/UX design, and ICT services in South Africa.",
  keywords: [
    "LGS Technologies",
    "Legacy General Solutions",
    "Software & Hosting Solutions",
    "South Africa",
    "ICT services",
    "web development",
    "UI UX design",
    "data analysis",
    "domain registration",
    "branding",
    "Google Business Profile",
    "Cape Town",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/lgs-logo.png",
    shortcut: "/lgs-logo.png",
    apple: "/lgs-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://lgstechnologies.co.za",
    siteName: "LGS Technologies",
    title: "LGS Technologies South Africa – Software & Hosting Solutions",
    description:
      "Legacy General Solutions (LGS Technologies) provides secure hosting, software development, UI/UX design, and ICT services in South Africa.",
    images: [
      {
        url: "/lgs-logo.png",
        width: 1200,
        height: 630,
        alt: "LGS Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LGS Technologies South Africa – Software & Hosting Solutions",
    description:
      "Legacy General Solutions (LGS Technologies) provides secure hosting, software development, UI/UX design, and ICT services in South Africa.",
    images: ["/lgs-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lgstechnologies.co.za/#organization",
      "name": "Legacy General Solutions (LGS Technologies)",
      "alternateName": "LGS Technologies",
      "url": "https://lgstechnologies.co.za",
      "logo": "https://lgstechnologies.co.za/lgs-logo.png",
      "image": "https://lgstechnologies.co.za/lgs-logo.png",
      "description":
        "Legacy General Solutions (LGS Technologies) provides secure hosting, software development, UI/UX design, and ICT services in South Africa.",
      "telephone": "+27814376424",
      "email": "admin@lgstechnologies.co.za",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressCountry": "ZA"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://lgstechnologies.co.za/#website",
      "url": "https://lgstechnologies.co.za",
      "name": "LGS Technologies South Africa",
      "description": "Software & Hosting Solutions in South Africa",
      "publisher": {
        "@id": "https://lgstechnologies.co.za/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
