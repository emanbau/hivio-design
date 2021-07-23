import { useContext } from 'react'
import Link from 'next/link';
import { NavbarContext } from '../../contexts/NavbarContext';
import styles from '../../styles/navbar.module.scss';

function NavMenu() {
    // Navbar Context
    const navbarContext = useContext(NavbarContext);
    // Navbar State
    const inNavbar = navbarContext.inNavbar;

    return (
        <div className={inNavbar ? `${styles.navMenuContainer}` : `${styles.navMenuContainer} ${styles.menuClosed}`}>
            <div className={styles.menuLeftContainer}>
                <div className={styles.navMenu}>
                    <div className={styles.navMenuItem}><Link href='../../pages/#services' ><a>Services</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='../../pages/#industries' ><a>Industries</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='../../pages/#procedure' ><a>Procedure</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='../../pages/blog' ><a>Blog</a></Link></div>
                    <div className={styles.navMenuItem}><Link href='../../pages/#contact' ><a>Contact</a></Link></div>
                </div>
            </div>
            <div className={styles.menuRightContainer}>
            </div>
        </div>
    )
}

export default NavMenu