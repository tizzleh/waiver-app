import { NextAuthProvider } from "./providers";
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
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

