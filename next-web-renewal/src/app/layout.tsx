import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "GO | Go Jaehyun Portfolio",
  description: "Experience Designer Go Jaehyun's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
        <nav className="w-full bg-[#111] border-b border-gray-800 sticky top-0 z-20 backdrop-blur">
          <div className="max-w-xl mx-auto flex items-center justify-center gap-8 py-4 px-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">GO</Link>
            <div className="flex gap-6 text-lg font-medium">
              <Link href="/">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="w-full px-4 py-8 min-h-[80vh]">{children}</main>
      </body>
    </html>
  );
}
