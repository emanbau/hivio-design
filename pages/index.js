import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.scss'
import React from 'react';
import { useNavbarContext } from '../contexts/NavbarContext';
import Link from 'next/link';
import Image from 'next/image';
import Winery from '../assets/winery.jpg'

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
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutHeader}>WE ARE HIVIO</h1>
          <p className={styles.aboutParagraph}>We are a software development company and consultancy that takes advantage of modern day technology
            to provide cutting edge solutions for businesses of all industries. Started in 2021, we are a young team of engineers, developers, designers, and lifelong students
            looking to usher the professional world into a new digital age.
          </p>
          <div className={styles.aboutImageContainer}>
            <Image 
              src={Winery} 
              className={styles.aboutImage} 
              alt='Winery Website Mockup' 
              objectFit='contain'
              width={1700}
              height={1000}
            />
          </div>
        </div>
        <div className={styles.servicesContainer} id='services'>
          <h1 className={styles.servicesHeader}>WHAT WE DO</h1>
          <div className={styles.servicesCardContainer}>
            
          </div>
        </div>
      </main>
    </div>
  )
}
