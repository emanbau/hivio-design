import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hivio | Software Development Company</title>
        <meta name="description" content="Hivio is a business to business software development company focused on custom web applications, mobile applications, and custom software solutions" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.landingpage}></div>
      </main>
    </div>
  )
}
