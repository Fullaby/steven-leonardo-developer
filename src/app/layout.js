import "./scss/main.scss";

export const metadata = {
  metadataBase: new URL("https://steven-leonardo.vercel.app"),

  title: {
    default: "Steven Leonardo | Fullstack Developer",
    template: "%s | Steven Leonardo",
  },

  description:
    "Full-stack developer passionate about solving real user and business problems through scalable web solutions, modern engineering practices, and collaborative product development.",

  applicationName: "Steven Leonardo Portfolio",

  keywords: [
    "Steven Leonardo",
    "Fullstack Developer Australia",
    "JavaScript Developer Sydney",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Modern Web Development",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Steven Leonardo" }],
  creator: "Steven Leonardo",
  publisher: "Steven Leonardo",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/ico.png", sizes: "32x32", type: "image/png" },
      { url: "/ico.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/ico.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/ico.png"],
  },

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
      "Portfolio of Steven Leonardo featuring scalable web applications, interactive UI, and modern full-stack engineering using Next.js and JavaScript.",
    url: "/",
    siteName: "Steven Leonardo",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/ico.png",
        width: 1200,
        height: 630,
        alt: "Steven Leonardo Fullstack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Steven Leonardo — Fullstack Developer",
    description:
      "Full-stack JavaScript developer building scalable and interactive web experiences.",
    images: ["/ico.png"],
  },

  alternates: {
    canonical: "/",
  },

  category: "technology",
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
