import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContextProvider>
      <body className={inter.className}>      
            {children}      
      </body>
      </AuthContextProvider>
    </html>
  );
}
