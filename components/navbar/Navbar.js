import React, { useEffect, useState, useCallback } from 'react';
import { useNavbarContext } from '../../contexts/NavbarContext';
import { Squeeze as Hamburger } from 'hamburger-react';
import styles from '../../styles/navbar.module.scss';
import NavMenu from './NavMenu';
import Link from 'next/link';

function Navbar() {
    // Navbar Context
    const navbarContext = useNavbarContext();
    // Navbar State
    const inNavbar = navbarContext.inNavbar;
    // Navbar State Handle
    const navbarHandle = () => {
        navbarContext.setInNavbar();
    }

    // Navbar Scroll State & Handle
    const scrollPast80 = navbarContext.scrollPast80;
    const scrollPast80Handle = useCallback((boolean) => {
        navbarContext.setScrollPast80(boolean);
    }, [navbarContext]);

    // Y Scroll State
    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll);
        function onWindowScroll() {
            setY(window.scrollY);
        }

        if (window.scrollY >= 80) {
            scrollPast80Handle(true);
        } else {
            scrollPast80Handle(false);
        }

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        }

    }, [y, scrollPast80Handle])

    console.log(inNavbar);

    return (
        <React.Fragment>
            <nav className={scrollPast80 ? (inNavbar ? styles.navContainer : `${styles.navContainer} ${styles.navContainerScrolled}`) : styles.navContainer}>
                <span className={scrollPast80 ? (inNavbar ? `${styles.logo} ${styles.logoInNavbar}` : `${styles.logo} ${styles.logoScrolled}`) : (inNavbar ? `${styles.logo} ${styles.logoInNavbar}` : styles.logo)}><Link href='/'><a>Hivio</a></Link></span>
                <div className={styles.rightContainer}>
                    <button className={scrollPast80 ? (inNavbar ? `${styles.button} ${styles.buttonInNavbar}` : `${styles.button} ${styles.buttonScrolled}`) : (inNavbar ? `${styles.button} ${styles.buttonInNavbar}` : styles.button)}>Work With Us</button>
                    <div>
                        <Hamburger toggled={inNavbar} toggle={navbarHandle} color={scrollPast80 ? (inNavbar ? ((window.innerWidth <= 800) ? '#1d1d1d' : '#eaeaea') : '#1d1d1d') : (inNavbar ? ((window.innerWidth <= 800) ? '#1d1d1d' : '#eaeaea') : '#eaeaea')} duration={1} size={40} />
                    </div>
                </div>
            </nav>
            <NavMenu />
        </React.Fragment>
    )
}

export default Navbar