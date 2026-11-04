import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metabolic Academy — Mastering Diabetes with Dt. Devyani Arbat",
  description:
    "Mastering Diabetes: A Practical Guide to Healthy Living with Dt. Devyani Arbat. Science-backed nutrition, insulin resistance management, and holistic metabolic health.",
  openGraph: {
    title: "Metabolic Academy — Mastering Diabetes with Dt. Devyani Arbat",
    description:
      "A practical, science-backed guide to mastering diabetes, insulin resistance, and sustainable metabolic wellness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabolic Academy — Mastering Diabetes with Dt. Devyani Arbat",
    description:
      "A practical, science-backed guide to mastering diabetes, insulin resistance, and sustainable metabolic wellness.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white min-h-screen flex flex-col">
        {children}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
