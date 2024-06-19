import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrian Sandu - Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-200 mx-3 md:flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
