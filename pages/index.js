import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.scss'
import React, { useContext } from 'react';
import { NavbarContext } from '../contexts/NavbarContext';

export default function Home() {
  // Navbar Context
  const navbarContext = useContext(NavbarContext);
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
          </div>
        </div>

      </main>
    </div>
  )
}
