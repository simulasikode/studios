import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "./components/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./components/Header";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Studio Simulasi",
  description: "Screen printing studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={ibm.className}>
        <GoogleTagManager gtmId="GTM-PCWP9Z52" />
        <Header />
        {children}
      </body>
    </html>
  );
}
