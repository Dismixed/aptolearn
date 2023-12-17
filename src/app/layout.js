import './globals.css'
import { Poppins } from 'next/font/google'
import { NextSeo } from 'next-seo';
import Head from 'next/head'
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>AptoLearn</title>
          <meta name="description" content={"Start Studying Smarter. Your Custom Learning Path Awaits!"} />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
      <body className={`${poppins.variable} bg-white`}>{children}</body>
    </html>
  )
}
