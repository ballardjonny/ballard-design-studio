import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import localFont from 'next/font/local'
const myFont = localFont({ src: './FKDisplay/FKDisplayTrial-Regular.otf' })
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ballard Design Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={myFont.className}>
        <Header title="Ballard Design Studio" />
        <p>Product Design Consultancy</p>
      </main>

      <Footer />
    </div>
  )
}
