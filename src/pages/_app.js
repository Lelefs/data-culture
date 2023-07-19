import BtnWhatsApp from "@/components/btnWhatsApp/btnWhatsApp";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ Component, ...pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <BtnWhatsApp />
    </main>
  );
}
