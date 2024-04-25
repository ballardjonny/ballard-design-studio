import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ballard Design Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ballard Design Studio" />
        <p>Product Design Consultancy</p>
      </main>

      <Footer />
    </div>
  )
}
