import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomado Travel — Discover Kashmir Beyond the Postcards",
  description: "Nomado curates immersive journeys that reveal the many layers of Kashmir—its people, traditions, landscapes, and stories.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
