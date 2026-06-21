import "~/styles/globals.css";

import { type Metadata } from "next";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";

export const metadata: Metadata = {
  title: "Ads Mini - We Build Brands. We Build Teams.",
  description: "Ads Mini is a full-service digital marketing and recruitment agency.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@500&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
