import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>NextJS & GSAP Page Transitions</title>
        <meta name="description" content="Simple example of GSAP generated transitions in a Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="home-title">THIS IS THE HOME PAGE</h1>
      </main>
    </div>
  )
}
