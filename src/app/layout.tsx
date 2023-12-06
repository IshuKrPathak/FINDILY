import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./components/modals/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";
import RentModel from "./components/modals/RentModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "  Findily",
  description: "A perfect resource finder",
};
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModel />
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser ={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
