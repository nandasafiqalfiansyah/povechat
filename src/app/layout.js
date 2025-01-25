import { Inter } from "next/font/google";
import { ClerkLoaded, ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from "next/link";
import Image from "next/image";
import { Theme } from "@radix-ui/themes";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PoveChat",
  description: "Real time chat app",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
          <nav className="flex justify-between p-5 border-b border-gray-200">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="PoveChat"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>PoveChat</p>
          </Link>
            <SignedOut>
              <SignInButton className="font-bold mr-2" mode='modal' />
            </SignedOut>
            <SignedIn>  
              <Link href="/chat" className="font-bold nitems-center flex">
              Chat</Link>
              <UserButton showName afterSignOutUrl="/" />
            </SignedIn>
          </nav>
          <ClerkLoaded >
            {children}
          </ClerkLoaded>
          </Theme>
        </body>
      </html>
    </ClerkProvider >
  )
}