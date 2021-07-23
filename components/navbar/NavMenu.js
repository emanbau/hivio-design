import React from 'react'
import Link from 'next/link';
import { useNavbarContext } from '../../contexts/NavbarContext';
import styles from '../../styles/navbar.module.scss';

function NavMenu() {
    // Navbar Context
    const navbarContext = useNavbarContext();
    // Navbar State
    const inNavbar = navbarContext.inNavbar;

    return (
        <div className={inNavbar ? `${styles.navMenuContainer}` : `${styles.navMenuContainer} ${styles.menuClosed}`}>
            <div className={styles.menuLeftContainer}>
                <div className={styles.navMenu}>
                    <div className={styles.navMenuItem}><Link href='/#services' ><a>Services</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='#industries' ><a>Industries</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='/#procedure' ><a>Procedure</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='/blog' ><a>Blog</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='/#contact' ><a>Contact</a></Link></div>
                </div>
            </div>
            <div className={styles.menuRightContainer}>
            </div>
        </div>
    )
}

export default NavMenu