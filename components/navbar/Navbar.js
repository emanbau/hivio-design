import React from 'react';
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

    console.log(inNavbar);

    return (
        <React.Fragment>
            <nav className={styles.navContainer}>
                <span className={inNavbar ? `${styles.logo} ${styles.logoInNavbar}` : styles.logo}><Link href='/'><a>Hivio</a></Link></span>
                <div className={styles.rightContainer}>
                    <button className={inNavbar ? `${styles.button} ${styles.buttonInNavbar}` : styles.button}>Work With Us</button>
                    <div>
                        <Hamburger toggled={inNavbar} toggle={navbarHandle} color={inNavbar ? ((window.innerWidth <= 800) ? '#1d1d1d' : '#eaeaea') : '#eaeaea'} duration={1} size={40} />
                    </div>
                </div>
            </nav>
            <NavMenu />
        </React.Fragment>
    )
}

export default Navbar