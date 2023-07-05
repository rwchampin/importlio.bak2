"use client"
import { Navbar } from './components';
import { Footer } from '@/components';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local' 
import { PropsWithChildren } from 'react';
import {Provider} from '@/components/Provider';
import Script from 'next/script';
import './globals.css';



const onRedirectCallback = (appState) => {
  debugger
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};


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

// const meta = {
//   title: "Amazon Dropshipping Bulk Product Import App for Shopify",
//   description: "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
//   cardImage: '/logo.png',
//   robots: 'follow, index',
//   favicon: '/favicon-96x96.ico',
//   url: 'https://importlio.com',
//   type: 'website'
// };

// export const metadata = {
//   title: meta.title,
//   description: meta.description,
//   cardImage: meta.cardImage,
//   robots: meta.robots,
//   favicon: meta.favicon,
//   url: meta.url,
//   type: meta.type,
//   openGraph: {
//     url: meta.url,
//     title: meta.title,
//     description: meta.description,
//     cardImage: meta.cardImage,
//     type: meta.type,
//     site_name: meta.title
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@vercel',
//     title: meta.title,
//     description: meta.description,
//     cardImage: meta.cardImage
//   },
//   other: {
//     'google-signin-scope': 'profile email',
//     'google-signin-client_id': '286561888550-mloc3g5h6vi9959tkedubfan41eu3vfj.apps.googleusercontent.com',
//   }
// };

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {

const providerConfig = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: "/",
    ...(process.env.AUTH0_AUDIENCE  ? { audience: process.env.AUTH0_AUDIENCE  } : null),
  },
};

  const onSignIn = (googleUser) => {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Full Name: " + profile.getName());
    console.log("Given Name: " + profile.getGivenName());
    console.log("Family Name: " + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

  }
  return (
    <html lang="en">
      <body className="antialiased flex flex-col bg-white">
      <Provider
    {...providerConfig}
  >
        <Navbar />
        <main className="flex  w-screen relative flex-col flex-auto min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] p-[20px] gap-[20px]">
          {children}
        </main>
        <Footer />
        {/* <Cursor size={50}/> */}
        </Provider>
      </body>
    </html>
  );
}
