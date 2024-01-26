import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import Navbar from '@/components/Navbar'
import { ImageProvider } from "@/context/imageContext";
import { DarkModeProvider } from "@/context/darkModeContext";
import Head from "next/head";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "@/ui/layout/Layout";
// import { GoogleAnalytics } from '@next/third-parties/google'

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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FHSD6SKWF7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            //@ts-ignore
            _html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-FHSD6SKWF7');`,
          }}
        ></script>
        <link
          rel="icon"
          type="image/png"
          sizes="24x24"
          href="/fevicon.ico"
        ></link>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          href="/zidbit_logo.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
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
