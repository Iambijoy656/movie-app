
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Shared/Footer";
import "react-responsive-pagination/themes/classic.css";
import Navbar from "./Shared/Navbar";
import { Suspense } from "react";
import Loading from "./loading";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}></Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
