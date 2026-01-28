import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  // Avoid build-time failure when font override metadata is missing.
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Sahettima | Clean Energy Infrastructure at National Scale",
  description:
    "Sahettima is a clean-energy infrastructure developer, investor, and long-term operator delivering CNG and LCNG gas systems through PPP models across Nigeria.",
  icons: {
    icon: "/sahettima_logo.png"
  },
  metadataBase: new URL("https://sahettima.com"),
  openGraph: {
    title: "Sahettima | Clean Energy Infrastructure at National Scale",
    description:
      "Developer, anchor investor, and operator of CNG and LCNG infrastructure using PPP models with state governments.",
    url: "https://sahettima.com",
    siteName: "Sahettima",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>
        <div className="site">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
