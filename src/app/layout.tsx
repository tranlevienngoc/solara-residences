import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solara Residences — Luxury Coastal Living in Da Nang",
  description:
    "A collection of contemporary residences shaped by light, landscape and the sea. Beachfront luxury living in Da Nang, Vietnam.",
  keywords: [
    "Solara Residences",
    "Da Nang luxury real estate",
    "beachfront residences Vietnam",
    "architectural living",
    "contemporary coastal villa",
    "penthouse Da Nang",
  ],
  authors: [{ name: "Solara Development Studio" }],
  openGraph: {
    title: "Solara Residences — Luxury Coastal Living in Da Nang",
    description:
      "A collection of contemporary residences shaped by light, landscape and the sea. An interactive architectural editorial experience.",
    url: "https://solara-residences.com",
    siteName: "Solara Residences",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Solara Residences Beachfront Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara Residences — Luxury Coastal Living in Da Nang",
    description: "A place shaped by light. Beachfront residences in Da Nang.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F2EFE8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth selection:bg-charcoal selection:text-warm-ivory`}
    >
      <body className="bg-warm-ivory text-charcoal antialiased overflow-x-hidden relative font-sans">
        {children}
      </body>
    </html>
  );
}
