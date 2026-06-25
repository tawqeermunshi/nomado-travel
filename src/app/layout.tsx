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
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='18' fill='%230F3460'/%3E%3Cpath d='M50 14c-13.5 0-24 10.7-24 23.8C26 54.5 50 86 50 86s24-31.5 24-48.2C74 24.7 63.5 14 50 14z' fill='%23F5C518'/%3E%3Ccircle cx='50' cy='37' r='8.5' fill='%230F3460'/%3E%3Cline x1='21' y1='83' x2='79' y2='17' stroke='%230F3460' stroke-width='15' stroke-linecap='round'/%3E%3Cline x1='21' y1='83' x2='79' y2='17' stroke='%23F5C518' stroke-width='7.5' stroke-linecap='round'/%3E%3C/svg%3E" />
      </head>
      <body>{children}</body>
    </html>
  );
}
