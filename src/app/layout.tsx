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
        <link rel="icon" href="data:image/x-icon;base64,AAABAAIAEBAAAAAAIADnAAAAJgAAACAgAAAAACAAbAEAAA0BAACJUE5HDQoaCgAAAA1JSERSAAAAEAAAABAIBgAAAB/z/2EAAACuSURBVHicnZOxEYMwDEW/3KZIm2MOuizAGNmAWdiAMViAjjl8aSlSk0o+WZZsH7/ihN6X/9kiGHqOn8uqn8dKulYUPNgzSh89IADEZQMAPN5fAoDQA2l4mKdUC73TNcwM3YGlmhFqcGbAjT2w7A3ej9aJCgOewg3WdPcWpIZ5auaWIiC/xtpkXT+PlbKXKGGdVZ+Gn3My+O2vy2qMy2ZGKQx0FE96I4ttrBlZ6/wHTttbi28FKvAAAAAASUVORK5CYIKJUE5HDQoaCgAAAA1JSERSAAAAIAAAACAIBgAAAHN6evQAAAEzSURBVHicvZexEYMwDEUFly4FbY456LIAY7ABs2SDjMEC6TIHlzZFalLkzMnGsiRbjirubP/3JRkbGlBGN0xbavz9vDcaPdFkDlpipq0Fl64lHZaAY0FVI1oBa/h6W0jNg6sacBzn68tjehWoDe/n8cBgN6ElPBa7AcvsOThmtf+GhyZMWyCF4zAzkAMHAGgsyp8LBzCoQAmcNBCKWsApTbICUhMl8KQBbiEey4WTBrBgTEBbnVCTNZACWvRdZAALu+dceGpeK/2Gs84c4PeRckpNKM2cmwsg2AM14bsBqg2UIPdm9PPIwh3TA+N7IZUN1WPpMYwTFh3FoXAsQ+0d4OJQ+s/j4t2OnPB6W1TwsN3R3nfDtGmFc+CkAWeiNjxpwMoId9Cx54D2b1e7Vi1u/Xv+BWbiuu8zl+mmAAAAAElFTkSuQmCC" />
      </head>
      <body>{children}</body>
    </html>
  );
}
