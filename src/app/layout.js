import "./globals.css";

export const metadata = {
  title: "Steven Leonardo",
  description: "This is Steven Leonardo Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
