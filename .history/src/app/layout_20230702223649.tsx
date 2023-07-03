import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';

// const montserrat = localFont({
//   src: 'm.ttf',
//   display: 'swap',
// })

// const apercu = localFont({
//   src: 'fonts/apercu-regular-pro.woff2',
//   display: 'swap',
// })

// const apercuMedium = localFont({
//   src: 'fonts/apercu-medium-pro.woff2',
//   display: 'swap',
// })

// const apercuBold = localFont({
//   src: 'fonts/apercu-bold-pro.woff2',
//   display: 'swap',
// })

const meta = {
  title:
    'Importlio - Supercharge your ecommerce performance with our AI powered Product Importer & Management App. Streamline product management, boost sales, and drive growth. Experience the power today!',
  description: 'Shopify product importing, Amazon product research',
  cardImage: '/logo.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
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
      <body className="antialiased ">
        <SupabaseProvider>
          {/* @ts-expect-error */}
          <Navbar />
          <main className="flex w-full flex-auto min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] p-[20px] gap-[20px]">
            <Canvas>{children}</Canvas>
          </main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
