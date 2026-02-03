import "./scss/main.scss";

export const metadata = {
  icons: {
    icon: "/ico.png",
  },
  title: "Steven Leonardo | Fullstack Developer",
  description:
    "Steven Leonardo Full-stack JavaScript developer with 3+ years of experience delivering scalable, user-focused web solutions. Strong collaborator with a growth mindset and passion for modern engineering practices.",

  keywords: [
    "Steven Leonardo",
    "Steven Leonardo developer",
    "Steven Leonardo portfolio",
    "Steven Leonardo web developer",
    "creative web developer",
    "Next.js experiment",
    "interactive web experience",
    "framer motion animation",
    "modern JavaScript projects",
  ],

  authors: [{ name: "Steven Leonardo" }],
  creator: "Steven Leonardo",
  publisher: "Steven Leonardo",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Steven Leonardo — Fullstack Developer",
    description:
      "A unique interactive web experience by Steven Leonardo. Featuring animated transitions, sound design, and experimental UI built with Next.js.",
    url: "https://steven-leonardo.vercel.app",
    siteName: "Steven Leonardo",
    images: [
      {
        url: "https://steven-leonardo.vercel.app/ico.png",
        width: 1200,
        height: 630,
        alt: "Steven Leonardo Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Steven Leonardo — Fullstack Developer",
    description:
      "Creative interactive web experiment by Steven Leonardo using Next.js and animation.",
    images: ["https://steven-leonardo.vercel.app/ico.png"],
  },

  alternates: {
    canonical: "https://steven-leonardo.vercel.app",
  },

  category: "Technology",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon for browsers */}
        <link rel="icon" href="/favicon.png" />
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        {/* Optional: manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
