import './globals.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Script from "next/script";
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11454830556', {
                page_path: window.location.pathname,
              });
            `,
              }}
          />
        </Head>
        <GoogleTagManager gtmId="GTM-5XXZ8LZ9" />
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=AW-11454830556`}
        />
        <body className={`${poppins.variable} bg-white dark:bg-[#121212]`}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'AptoLearn',
    description: 'Start Studying Smarter. Your Personalized Learning Path Awaits!',
}
