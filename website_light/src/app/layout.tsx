import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ImageProvider } from "@/context/imageContext";
import { DarkModeProvider } from "@/context/darkModeContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "@/components/ui/layout";

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
            <ImageProvider>
              <body className={`  ${inter.className}`}>
                <Layout>{children}</Layout>
              </body>
            </ImageProvider>
          </DarkModeProvider>
        </AntdRegistry>
      </html>
    </>
  );
}
