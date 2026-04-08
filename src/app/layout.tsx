import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://keshavagames.com/"),
  title: {
    default: "Keshava - Wooden Puzzles & Dot Connect Brain Games for Adults",
    template: "%s | keshava Games",
  },
  description: "Play Keshava online - wooden puzzles, puzzle board, dot puzzle, bolt sort, 3D puzzles and relaxing brain games for adults. Train your mind with premium puzzel games.",
  keywords: ["keshava game", "wooden puzzles", "wooden puzzles for adults", "dot puzzle",
    "connect dot", "bolt sort", "3d puzzle", "brain games for adults", "puzzle you"],
  authors: [{ name: "keshava Games" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Keshava - Best Wooden Puzzle Game for Adults",
    description: "Relax and train your brain with beautiful wooden puzzles and dot connect challenges.",
    images: [
      {
        url: "https://i.ytimg.com/vi/wxS1TWMqMU8/hqdefault.jpg", // Your YouTube thumbnail
        width: 1280,
        height: 720,
        alt: "Keshava Wooden Puzzle Game",
      },
    ]
  },
  alternates: {
    canonical: "https://keshavagames.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />   {/* Replace with your GA4 ID */}

        {/* Google Ads (Conversion Tracking) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}