import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "  Findily",
  description: "A perfect resource finder",
};
const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModel />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
