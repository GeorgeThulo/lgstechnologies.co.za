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
    "LGS Technologies provides digital solutions including web development, UI/UX design, data analysis, domain management, branding, and Google Business Profile optimization.",
  icons: {
    icon: "/lgs-logo.png",
    shortcut: "/lgs-logo.png",
    apple: "/lgs-logo.png",
  },
  openGraph: {
    title: "LGS Technologies | Digital Solutions & Web Services",
    description:
      "Empowering Businesses Through Technology. UI/UX, Data, Domains, Branding & Google Services.",
    images: [
      {
        url: "/lgs-logo.png",
        alt: "LGS Technologies Logo",
      },
    ],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
