import "./globals.css";
import LenisScroll from "@/lenis/SmoothScroll";

export const metadata = {
  title: "Arun Karthik - Web Developer",
  description: "Get to know my story from my creative 3d web design",
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
