import "app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className + ' text-white'}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
