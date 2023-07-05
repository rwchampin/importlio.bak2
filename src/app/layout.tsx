import SupabaseProvider from './supabase-provider';
import SignOutButton from './components/Navbar/SignOutButton';
import { Navbar } from './components';
import { Footer } from '@/components';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local' 
import { PropsWithChildren } from 'react';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true
});

const apercu = localFont({
  src: './fonts/apercu-regular-pro.woff2',
  variable: '--font-apercu',
  display: 'swap',
  preload: true
})

const apercuMedium = localFont({
  src: './fonts/apercu-medium-pro.woff2',
  variable: '--font-apercu-medium',
  preload: true,
  display: 'swap',
})

const apercuBold = localFont({
  src: './fonts/apercu-bold-pro.woff2',
  variable: '--font-apercu-bold',
  preload: true,
  display: 'swap',
})

const meta = {
  title: "Amazon Dropshipping Bulk Product Import App for Shopify",
  description: "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  cardImage: '/logo.png',
  robots: 'follow, index',
  favicon: '/favicon-96x96.ico',
  url: 'https://importlio.com',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      
      <body className="antialiased flex flex-col bg-white">
        <SupabaseProvider>
        <Navbar>
          <SignOutButton />
        </Navbar>
        <main className="flex h-screen w-screen relative flex-col flex-auto min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] p-[20px] gap-[20px]">
          {children}
        </main>
        <Footer />
        {/* <Cursor size={50}/> */}
        </SupabaseProvider>
      </body>
    </html>
  );
}
