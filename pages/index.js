import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS & GSAP Page Transitions</title>
        <meta name="description" content="Simple example of GSAP generated transitions in a Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>THIS IS THE HOME PAGE</h1>
      </main>
    </div>
  )
}
