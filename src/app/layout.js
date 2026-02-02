import "./scss/main.scss";

export const metadata = {
  title: "Steven Leonardo",
  description: "This is Steven Leonardo Portfolio",
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
