import type { Metadata } from "next";
import { Titillium_Web, Potta_One } from "next/font/google";
import "./globals.css";
import "./app.css";
// import Navbar from "@/Components/Navbar";

const potta_One = Potta_One({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-potta',
  fallback: ['cursive']
});
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-titillium',
  fallback: ['sans-serif']
});



export const metadata: Metadata = {
  title: "Peniel House Ministries International",
  description: "An Apostolic Church founded upon the commandments and teachings of the New Testament church in the book of Acts. It's a church commission by God to propagate the message of Grace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${potta_One.variable} ${titillium.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
