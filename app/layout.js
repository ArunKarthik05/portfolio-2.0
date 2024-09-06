import "./globals.css";
import LenisScroll from "@/lenis/SmoothScroll";

export const metadata = {
  title: "Arun Karthik-Full Stack Developer",
  description: "Awwwards-3D Portfolios by Arun Karthik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
