import "./globals.css";

export const metadata = {
  title: "Arun Karthik - Web Developer",
  description: "Get to know my story from my creative 3d web design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
