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
  title: "LGS Technologies | Digital Solutions & Web Services",
  description:
    "LGS Technologies provides digital solutions including web development, UI/UX design, data analysis, domain management, branding, and Google Business Profile optimization in South Africa.",
  keywords: [
    "LGS Technologies",
    "web development",
    "UI UX design",
    "data analysis",
    "domain registration",
    "branding",
    "Google Business Profile",
    "Cape Town",
    "South Africa",
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
    title: "LGS Technologies | Digital Solutions & Web Services",
    description:
      "Empowering Businesses Through Technology. UI/UX, Data, Domains, Branding & Google Services.",
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
    title: "LGS Technologies | Digital Solutions & Web Services",
    description:
      "Empowering Businesses Through Technology. UI/UX, Data, Domains, Branding & Google Services.",
    images: ["/lgs-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LGS Technologies",
  "url": "https://lgstechnologies.co.za",
  "logo": "https://lgstechnologies.co.za/lgs-logo.png",
  "image": "https://lgstechnologies.co.za/lgs-logo.png",
  "description":
    "LGS Technologies provides digital solutions including web development, UI/UX design, data analysis, domain management, branding, and Google Business Profile optimization.",
  "telephone": "+27814376424",
  "email": "admin@lgstechnologies.co.za",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cape Town",
    "addressCountry": "ZA",
  },
  "priceRange": "R",
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
