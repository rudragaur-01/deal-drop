import "./globals.css";

export const metadata = {
  title: "Deal Drop",
  description: "Price Tracker Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
