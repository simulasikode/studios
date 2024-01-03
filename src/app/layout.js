import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "./_component/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./_component/Header";
import Footer from "./_component/footer";

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
        <GoogleTagManager gtmId="GTM-PBBJ4ZFZ" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
