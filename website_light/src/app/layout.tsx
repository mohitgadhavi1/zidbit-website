import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/darkModeContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "@/components/ui/layout";
import { StockSymbolProvider } from "@/context/StockContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zidbit",
  description: "Edit Your Photos Instantly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <AntdRegistry>
          <DarkModeProvider>
            <StockSymbolProvider>
              <body className={`  ${inter.className}`}>
                <Layout>{children}</Layout>
              </body>
            </StockSymbolProvider>
          </DarkModeProvider>
        </AntdRegistry>
      </html>
    </>
  );
}
