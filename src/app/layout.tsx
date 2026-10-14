import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solara Residences — Tuyệt Tác Dinh Thự Nghỉ Dưỡng Bên Bờ Biển Đà Nẵng",
  description:
    "Bộ sưu tập 28 dinh thự biển độc bản được định hình bởi ánh sáng, thiên nhiên nhiệt đới và đại dương bao la tại Đà Nẵng, Việt Nam.",
  keywords: [
    "Solara Residences",
    "bất động sản cao cấp Đà Nẵng",
    "dinh thự ven biển Đà Nẵng",
    "biệt thự biển Mỹ Khê",
    "penthouse nghỉ dưỡng cao cấp",
    "kiến trúc nhiệt đới đương đại",
  ],
  authors: [{ name: "Solara Development Studio" }],
  openGraph: {
    title: "Solara Residences — Tuyệt Tác Dinh Thự Nghỉ Dưỡng Bên Bờ Biển Đà Nẵng",
    description:
      "Nơi ánh sáng định hình không gian. Trải nghiệm kiến trúc nghệ thuật và phong cách sống tĩnh dưỡng ven biển.",
    url: "https://solara-residences.com",
    siteName: "Solara Residences",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Kiến trúc Solara Residences Đà Nẵng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara Residences — Tuyệt Tác Dinh Thự Nghỉ Dưỡng Bên Bờ Biển Đà Nẵng",
    description: "Nơi ánh sáng định hình không gian. Dinh thự biển độc bản tại Đà Nẵng.",
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
      lang="vi"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth selection:bg-charcoal selection:text-warm-ivory`}
    >
      <body className="bg-warm-ivory text-charcoal antialiased overflow-x-hidden relative font-sans">
        {children}
      </body>
    </html>
  );
}
