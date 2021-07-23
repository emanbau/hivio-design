import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.scss'
import React from 'react';
import { useNavbarContext } from '../contexts/NavbarContext';
import Link from 'next/link';

export default function Home() {
  // Navbar Context
  const navbarContext = useNavbarContext();
  // Navbar State
  const inNavbar = navbarContext.inNavbar;

  return (
    <div className={styles.container}>
      <Head>
        <title>Hivio | Software Development Company</title>
        <meta name="description" content="Hivio is a business to business software development company focused on custom web applications, mobile applications, and custom software solutions" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.landingpage}>
          <div className={inNavbar ? `${styles.landingpageCopyContainer} ${styles.landingpageCopyContainerInNavbar}` : `${styles.landingpageCopyContainer} ${styles.landingpageCopyContainerOutNavbar}`}>
            <h1 className={styles.landingpageCopyHeader}>TECH SAVY SOLUTIONS
              <br />
              <span className={styles.landingpageCopyHeader2}>+ CREATIVE THINKING</span>
            </h1>
            <p className={styles.landingpageCopyParagraph}>A dedicated software development team that delivers with deep expertise, experience, and efficiency.</p>
            <span className={styles.landingpageCta}><Link href='/#services'><a>SEE WHAT WE DO &rarr;</a></Link></span>
          </div>
        </div>

      </main>
    </div>
  )
}
