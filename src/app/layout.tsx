import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
import {ImageProvider} from "@/context/imageContext"
import {DarkModeProvider} from "@/context/darkModeContext"
import Head from 'next/head'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from '@/ui/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zidbit',
  description: 'Edit Your Photos Instantly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Head>
    <link rel="icon" type="image/png" sizes="24x24" href="/fevicon.ico"></link>
    <link rel="shortcut icon" href="favicon.ico"></link>
    <link
  rel="apple-touch-icon"
  href="/zidbit_logo.png?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
    </Head>
    <html lang="en">
    <DarkModeProvider> 
      <ImageProvider>
      <body className={inter.className}> 
       
      <AntdRegistry>  
     
        <Layout>
   
     
        {children}  
   
       
        </Layout>
  
        </AntdRegistry></body>
      </ImageProvider>
      </DarkModeProvider>
   
    </html>
    </>
  )
}
