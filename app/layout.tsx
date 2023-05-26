import { NextAuthProvider } from "./providers";
import Head from 'next/head';
import './globals.css'

export const metadata = {
  title: "Waivero | Home",
  description: "Waivero, simplified waivers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <Head>
	 <link rel="preconnect" href="https://fonts.googleapis.com"></link>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" rel="stylesheet"></link>

      </Head>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

