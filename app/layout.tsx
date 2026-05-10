import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToastProvider } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ipu-counselling-hub.vercel.app"),
  title: {
    default: "IPU Counselling Hub",
    template: "%s | IPU Counselling Hub"
  },
  description:
    "Rank prediction, mentor connect, college comparison, and counselling guidance for GGSIPU admissions.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "IPU Counselling Hub",
    description: "Find your college. Own your future.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
