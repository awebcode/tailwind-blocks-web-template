import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Asikur Web Template",
  description: "Asikur Web Template -Md Asikur Rahman",
  keywords:"asikur,asikur portfolio,tailwind,tailblocs,web desing,web development,ui,ux,software,software engineering,cse,com"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
{/* <Head>
  <title>Asikur Web Template</title>
  <meta name="description" content="Asikur Web Template - Md Asikur Rahman" />
  <meta
    name="keywords"
    content="asikur, asikur portfolio, tailwind, tailblocks, web desing, web development, ui, ux, software, software engineering, cse, computer science, fiverr, upwork"
  />
  <link rel="icon" href="/icon.png" />
  <meta property="og:title" content="Asikur Web Template" />
  <meta property="og:description" content="Asikur Web Template - Md Asikur Rahman" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://asikur-web-template.vercel.app/" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/asikur/image/upload/v1701021482/Screenshot_541_beq5wy.png"
  />{" "}
  {/* Replace with your URL */}
  {/* Add more og:image, og:type, og:locale etc. if needed 
</Head>*/}