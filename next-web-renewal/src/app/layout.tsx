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
        <main className="w-full px-2 py-4 min-h-[70vh] mt-16 sm:px-4 sm:py-8 sm:min-h-[80vh] sm:mt-24">{children}</main>
      </body>
    </html>
  );
} 