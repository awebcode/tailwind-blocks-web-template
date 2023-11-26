import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import "./globals.css"
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Asikur Web Template</title>
        <meta name="description" content="Asikur Web Template - Md Asikur Rahman" />
        <meta
          name="keywords"
          content="asikur, asikur portfolio, tailwind, tailblocks, web desing, web development, ui, ux, software, software engineering, cse, computer science, fiverr, upwork"
        />
        <link rel="icon" href="/icon.png" />
        <meta property="og:title" content="Asikur Web Template" />
        <meta
          property="og:description"
          content="Asikur Web Template - Md Asikur Rahman"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asikur-web-template.vercel.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/asikur/image/upload/v1701021482/Screenshot_541_beq5wy.png"
        />{" "}
        {/* Replace with your URL */}
        {/* Add more og:image, og:type, og:locale etc. if needed */}
      </Head>
      <Navbar />
      {children}
    </>
  );
}
