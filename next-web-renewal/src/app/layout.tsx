import Link from "next/link";
import "./globals.css";
import GlassHeader from "./components/GlassHeader";

export const metadata = {
  title: "GO | Go Jaehyun Portfolio",
  description: "Experience Designer Go Jaehyun's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
        <GlassHeader />
        <main className="w-full px-4 py-8 min-h-[80vh] mt-24">{children}</main>
      </body>
    </html>
  );
} 