
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Parth Sharma's Portfolio",
  description: "Frontend Developer",
  icons: {
    // icon: "/favicon.ico", // favicon
    // Change here in icon place to get the favicon 
    icon:"/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
